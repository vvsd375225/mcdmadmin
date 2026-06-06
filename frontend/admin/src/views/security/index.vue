<template>
  <div>
    <n-grid :cols="3" :x-gap="12" :y-gap="12" class="mb-4" responsive="screen">
      <n-grid-item>
        <n-card size="small">
          <n-statistic label="已封禁 IP" :value="stats.blocked_ips">
            <template #prefix><n-icon :component="ShieldCheckmarkOutline" color="#c0392b" /></template>
          </n-statistic>
        </n-card>
      </n-grid-item>
      <n-grid-item>
        <n-card size="small">
          <n-statistic label="总攻击事件" :value="stats.total_events">
            <template #prefix><n-icon :component="WarningOutline" color="#e67e22" /></template>
          </n-statistic>
        </n-card>
      </n-grid-item>
      <n-grid-item>
        <n-card size="small">
          <n-statistic label="今日攻击" :value="stats.today_events">
            <template #prefix><n-icon :component="TodayOutline" color="#1677ff" /></template>
          </n-statistic>
        </n-card>
      </n-grid-item>
    </n-grid>

    <n-card title="封禁 IP 列表" size="small" class="mb-4">
      <template #header-extra>
        <n-space>
          <n-input v-model:value="ipKeyword" placeholder="搜索IP" size="small" clearable style="width:180px" @keyup.enter="loadBlocklist" />
          <n-button size="small" @click="loadBlocklist">搜索</n-button>
        </n-space>
      </template>
      <n-data-table
        :columns="blockColumns"
        :data="blocklist"
        :loading="blockLoading"
        :pagination="{ pageSize: 15 }"
        size="small"
        striped
      />
    </n-card>

    <n-card title="攻击日志" size="small">
      <template #header-extra>
        <n-button size="small" type="error" ghost @click="handleClearLogs">清空日志</n-button>
      </template>
      <n-data-table
        :columns="logColumns"
        :data="attackLogs"
        :loading="logLoading"
        :pagination="{ pageSize: 15 }"
        size="small"
        striped
      />
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, h } from 'vue'
import { useDialog, useMessage } from 'naive-ui'
import { ShieldCheckmarkOutline, WarningOutline, TodayOutline } from '@vicons/ionicons5'
import { getSecurityListApi, getSecurityLogsApi, getSecurityStatsApi, unblockIpApi, clearLogsApi } from '@/api/security'

const dialog = useDialog()
const message = useMessage()

const stats = ref({ blocked_ips: 0, total_events: 0, today_events: 0 })
const blocklist = ref<any[]>([])
const attackLogs = ref<any[]>([])
const blockLoading = ref(false)
const logLoading = ref(false)
const ipKeyword = ref('')

const blockColumns = [
  { title: 'IP 地址', key: 'ip', width: 180, ellipsis: { tooltip: true } },
  { title: '封禁时间', key: 'time', width: 180, render(row: any) { return row.time ? new Date(row.time * 1000).toLocaleString() : '-' } },
  { title: '封禁期限', key: 'until', width: 140, render(row: any) { return row.until === 0 ? '永久' : row.until ? new Date(row.until * 1000).toLocaleString() : '永久' } },
  { title: '原因', key: 'reason', ellipsis: { tooltip: true } },
  {
    title: '操作', key: 'actions', width: 100,
    render(row: any) {
      return h('a', {
        style: { color: '#18a058', cursor: 'pointer' },
        onClick: () => handleUnblock(row.ip)
      }, '解封')
    }
  },
]

const logColumns = [
  { title: '时间', key: 'time', width: 180 },
  { title: 'IP 地址', key: 'ip', width: 170 },
  { title: '详情', key: 'reason', ellipsis: { tooltip: true } },
]

async function loadStats() {
  try {
    const res = await getSecurityStatsApi()
    stats.value = res.data
  } catch {}
}

async function loadBlocklist() {
  blockLoading.value = true
  try {
    const params: any = { page: 1, limit: 1000 }
    if (ipKeyword.value) params.keyword = ipKeyword.value
    const res = await getSecurityListApi(params)
    blocklist.value = res.data.list || []
  } catch {} finally { blockLoading.value = false }
}

async function loadLogs() {
  logLoading.value = true
  try {
    const res = await getSecurityLogsApi({ page: 1, limit: 1000 })
    attackLogs.value = res.data.list || []
  } catch {} finally { logLoading.value = false }
}

function handleUnblock(ip: string) {
  dialog.warning({
    title: '确认解封',
    content: '确定要解封 IP ' + ip + ' 吗？',
    positiveText: '确认解封',
    negativeText: '取消',
    onPositiveClick: async () => {
      try {
        await unblockIpApi(ip)
        message.success('已解封 ' + ip)
        loadBlocklist()
        loadStats()
      } catch (e: any) {
        message.error(e?.response?.data?.msg || '解封失败')
      }
    }
  })
}

function handleClearLogs() {
  dialog.warning({
    title: '确认清空',
    content: '确定要清空所有攻击日志吗？此操作不可恢复。',
    positiveText: '确认清空',
    negativeText: '取消',
    onPositiveClick: async () => {
      try {
        await clearLogsApi()
        message.success('日志已清空')
        loadLogs()
        loadStats()
      } catch (e: any) {
        message.error('清空失败')
      }
    }
  })
}

onMounted(() => {
  loadStats()
  loadBlocklist()
  loadLogs()
})
</script>

<style scoped>
.mb-4 { margin-bottom: 16px; }
</style>
