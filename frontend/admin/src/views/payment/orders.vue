<template>
  <div>
    <n-card title="我的订单">
      <template #header-extra>
        <n-button type="primary" @click="$router.push('/ai/tiers')">购买套餐</n-button>
      </template>
      <n-data-table :columns="columns" :data="list" :loading="loading" :pagination="pagination" />
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, h, reactive } from 'vue'
import { NButton, NSpace, NTag } from 'naive-ui'
import { getPaymentListApi } from '@/api/payment'

const list = ref<any[]>([])
const loading = ref(false)

const statusMap: any = { 0: '待支付', 1: '已支付', 2: '已退款' }
const statusType: any = { 0: 'default', 1: 'success', 2: 'warning' }

const pagination = reactive({
  page: 1, pageSize: 10,
  onChange: (p: number) => { pagination.page = p; fetchList() },
  itemCount: 0,
})

const columns = [
  { title: '订单号', key: 'order_no', width: 200 },
  { title: '标题', key: 'title', ellipsis: { tooltip: true } },
  { title: '金额', key: 'amount', width: 100, render: (r: any) => '¥' + (r.amount || 0) },
  { title: '渠道', key: 'channel', width: 100, render: (r: any) => r.channel === 'alipay' ? '支付宝' : r.channel === 'wechat' ? '微信支付' : r.channel || '-' },
  { title: '状态', key: 'status', width: 90, render: (r: any) => h(NTag, { type: statusType[r.status] || 'default', size: 'small' }, statusMap[r.status] || r.status) },
  { title: '时间', key: 'create_time', width: 170 },
  {
    title: '操作', key: 'actions', width: 100,
    render: (r: any) => h(NSpace, null, {
      default: () => [
        r.status === 0 ? h(NButton, { size: 'small', type: 'warning', onClick: () => handlePay(r) }, '去支付') : null,
      ],
    }),
  },
]

async function fetchList() {
  loading.value = true
  try {
    const r = await getPaymentListApi({ page: pagination.page, limit: pagination.pageSize })
    list.value = r.data.list || []
    pagination.itemCount = r.data.total || 0
  } catch {}
  loading.value = false
}

function handlePay(order: any) {
  const params = new URLSearchParams({
    order_no: order.order_no,
    amount: String(order.amount || 0),
    subject: order.title || '订单支付',
    channel: order.channel || 'alipay',
    site: window.location.hostname,
    return_url: window.location.origin + '/admin#/payment/result',
  })
  window.location.href = 'https://www.mcdmadmin.cn/api/pay?' + params.toString()
}

onMounted(fetchList)
</script>
