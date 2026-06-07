<template>
  <div class="market-page">
    <!-- Header -->
    <n-card title="模块市场" class="mb-4" size="small">
      <template #header-extra>
        <n-space>
          <n-button size="small" @click="fetchData">
            <template #icon><n-icon><RefreshOutline /></n-icon></template>
            刷新
          </n-button>
        </n-space>
      </template>

      <!-- Category tabs -->
      <div class="category-tabs mb-3">
        <n-scrollbar x-scrollable>
          <n-space>
            <n-tag
              v-for="cat in categories"
              :key="cat.slug"
              :type="activeCategory === cat.slug ? 'primary' : 'default'"
              :checkable="activeCategory !== cat.slug"
              :checked="activeCategory === cat.slug"
              size="medium"
              class="cat-tag"
              @click="switchCategory(cat.slug)"
            >
              {{ cat.name }}
              <template v-if="cat.count !== undefined"> ({{ cat.count }})</template>
            </n-tag>
          </n-space>
        </n-scrollbar>
      </div>

      <!-- Search & Sort -->
      <n-space justify="space-between" align="center" class="mb-3">
        <n-input
          v-model:value="keyword"
          placeholder="搜索模块..."
          clearable
          round
          style="width: 300px"
          @keyup.enter="search"
          @clear="search"
        >
          <template #prefix><n-icon><SearchOutline /></n-icon></template>
        </n-input>
        <n-select
          v-model:value="sort"
          :options="sortOptions"
          style="width: 140px"
          size="small"
          @update:value="fetchMarket"
        />
      </n-space>
    </n-card>

    <!-- AI Generated Modules (from aisc) -->
    <n-card v-if="aiscModules.length > 0" title="AI 生成的待安装模块" class="mb-4" size="small">
      <template #header-extra>
        <n-tag type="info" size="small">由AI助手生成</n-tag>
      </template>
      <n-grid :cols="3" :x-gap="16" :y-gap="16" responsive="screen">
        <n-grid-item v-for="m in aiscModules" :key="m.name">
          <n-card size="small" class="aisc-card" hoverable>
            <div class="aisc-icon">
              <n-icon size="32" color="#7c3aed"><HardwareChipOutline /></n-icon>
            </div>
            <div class="plugin-title">{{ m.title }}</div>
            <div class="plugin-excerpt">{{ m.description || 'AI生成的模块' }}</div>
            <div class="plugin-meta">
              <span class="meta-item">
                <n-icon size="12"><PersonOutline /></n-icon>
                {{ m.author || 'AI生成' }}
              </span>
              <span class="meta-item">v{{ m.version }}</span>
            </div>
            <div class="plugin-action">
              <n-button
                v-if="!m.installed"
                type="primary"
                size="small"
                block
                :loading="aiscActing === m.name"
                @click="handleAiscInstall(m)"
              >
                一键安装
              </n-button>
              <n-popconfirm v-else @positive-click="handleUninstall(m)">
                <template #trigger>
                  <n-button size="small" block type="error">已安装(卸载)</n-button>
                </template>
                确认卸载「{{ m.title }}」？
              </n-popconfirm>
            </div>
          </n-card>
        </n-grid-item>
      </n-grid>
    </n-card>

    <!-- Module Grid -->
    <n-spin :show="loading">
      <div v-if="plugins.length > 0">
        <n-grid :cols="3" :x-gap="16" :y-gap="16" responsive="screen">
          <n-grid-item v-for="p in plugins" :key="p.id">
            <n-card size="small" class="plugin-card" hoverable>
              <template #cover>
                <div class="plugin-cover" @click="showDetail(p)">
                  <img :src="p.cover || defaultCover" :alt="p.title" />
                  <n-tag
                    v-if="p.is_free"
                    type="success"
                    size="tiny"
                    class="price-badge"
                  >
                    免费
                  </n-tag>
                  <n-tag
                    v-else
                    type="warning"
                    size="tiny"
                    class="price-badge"
                  >
                    {{ p.price_text || '¥' + p.price }}
                  </n-tag>
                </div>
              </template>

              <div class="plugin-title" @click="showDetail(p)">{{ p.title }}</div>
              <div class="plugin-excerpt">{{ p.excerpt || p.description || '暂无描述' }}</div>

              <div class="plugin-meta">
                <span class="meta-item">
                  <n-icon size="12"><PersonOutline /></n-icon>
                  {{ p.author }}
                </span>
                <span class="meta-item">v{{ p.version }}</span>
                <span class="meta-item">
                  <n-icon size="12"><CloudDownloadOutline /></n-icon>
                  {{ formatCount(p.download_count) }}
                </span>
              </div>

              <div class="plugin-action">
                <n-button
                  v-if="btnState(p).action === 'install'"
                  type="primary"
                  size="small"
                  block
                  :loading="acting === p.id"
                  @click="handleInstall(p)"
                >
                  安装
                </n-button>
                <n-button
                  v-else-if="btnState(p).action === 'buy'"
                  type="warning"
                  size="small"
                  block
                  @click="handleBuy(p)"
                >
                  购买 {{ p.price_text || ('¥' + p.price) }}
                </n-button>
                <n-button
                  v-else-if="btnState(p).action === 'update'"
                  type="success"
                  size="small"
                  block
                  :loading="acting === p.id"
                  @click="handleInstall(p)"
                >
                  更新
                </n-button>
                <n-popconfirm v-else-if="btnState(p).action === 'uninstall'" @positive-click="handleUninstall(p)">
                  <template #trigger>
                    <n-button size="small" block type="error">已安装(卸载)</n-button>
                  </template>
                  确认卸载「{{ p.title }}」？
                </n-popconfirm>
              </div>
            </n-card>
          </n-grid-item>
        </n-grid>

        <!-- Pagination -->
        <div class="pagination-wrap">
          <n-pagination
            v-model:page="page"
            :page-size="limit"
            :item-count="total"
            :page-slot="5"
            @update:page="fetchMarket"
          />
        </div>
      </div>

      <n-empty v-if="!loading && plugins.length === 0" description="暂无模块数据" />
    </n-spin>

    <!-- Detail Modal -->
    <n-modal
      v-model:show="detailVisible"
      preset="card"
      :title="detailPlugin?.title"
      style="width: 720px; max-width: 95vw"
      :segmented="{ content: 'soft', footer: 'soft' }"
    >
      <n-spin :show="detailLoading">
        <template v-if="detailData">
          <n-space vertical :size="16">
            <!-- Screenshots -->
            <div v-if="detailData.screenshots?.length" class="screenshots-wrap">
              <n-scrollbar x-scrollable>
                <n-space>
                  <img
                    v-for="(src, i) in detailData.screenshots"
                    :key="i"
                    :src="src"
                    class="screenshot"
                    @click="previewImg = src"
                  />
                </n-space>
              </n-scrollbar>
            </div>

            <!-- Info -->
            <n-descriptions bordered :column="2" size="small">
              <n-descriptions-item label="作者">{{ detailData.author }}</n-descriptions-item>
              <n-descriptions-item label="版本">{{ detailData.version }}</n-descriptions-item>
              <n-descriptions-item label="分类">{{ detailData.category_name }}</n-descriptions-item>
              <n-descriptions-item label="价格">
                <span v-if="detailData.is_free" class="text-success">免费</span>
                <span v-else class="text-warning">{{ detailData.price_text || ('¥' + detailData.price) }}</span>
              </n-descriptions-item>
              <n-descriptions-item label="下载量">{{ formatCount(detailData.download_count) }}</n-descriptions-item>
              <n-descriptions-item label="评分">{{ detailData.rating || '-' }}</n-descriptions-item>
              <n-descriptions-item label="标签" :span="2">
                <n-space v-if="detailData.tags?.length">
                  <n-tag v-for="t in detailData.tags" :key="t" size="tiny">{{ t }}</n-tag>
                </n-space>
                <span v-else>-</span>
              </n-descriptions-item>
            </n-descriptions>

            <!-- Description -->
            <div>
              <h4 class="section-title">模块描述</h4>
              <p class="detail-desc">{{ detailData.description }}</p>
            </div>

            <!-- Changelog -->
            <div v-if="detailData.changelog?.length">
              <h4 class="section-title">更新日志</h4>
              <n-timeline>
                <n-timeline-item
                  v-for="cl in detailData.changelog"
                  :key="cl.version"
                  :title="'v' + cl.version"
                  :time="cl.date"
                >
                  <ul class="changelog-list">
                    <li v-for="(c, i) in cl.changes" :key="i">{{ c }}</li>
                  </ul>
                </n-timeline-item>
              </n-timeline>
            </div>
          </n-space>
        </template>
      </n-spin>

      <template #footer>
        <n-space justify="end">
          <n-button @click="detailVisible = false">关闭</n-button>
          <n-button
            v-if="detailPlugin && btnState(detailPlugin).action === 'install'"
            type="primary"
            @click="detailVisible = false; handleInstall(detailPlugin)"
          >
            安装
          </n-button>
          <n-button
            v-else-if="detailPlugin && btnState(detailPlugin).action === 'buy'"
            type="warning"
            @click="detailVisible = false; handleBuy(detailPlugin)"
          >
            购买 {{ detailPlugin.price_text || ('¥' + detailPlugin.price) }}
          </n-button>
          <n-button
            v-else-if="detailPlugin && btnState(detailPlugin).action === 'update'"
            type="success"
            @click="detailVisible = false; handleInstall(detailPlugin)"
          >
            更新
          </n-button>
        </n-space>
      </template>
    </n-modal>

    <!-- Image preview -->
    <n-modal :show="!!previewImg" preset="card" style="width: auto; max-width: 90vw" @update:show="previewImg = ''">
      <img :src="previewImg" style="max-width: 100%; max-height: 80vh" />
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useMessage, useDialog } from 'naive-ui'
import { RefreshOutline, SearchOutline, PersonOutline, CloudDownloadOutline, HardwareChipOutline } from '@vicons/ionicons5'
import { getModuleListApi, installModuleApi, uninstallModuleApi, scanAiscModulesApi, installFromAiscApi } from '@/api/module'
import { savePaymentApi } from '@/api/payment'

const MARKET_API = 'https://www.mcdmadmin.cn/api/plugins'

const message = useMessage()
const dialog = useDialog()

const loading = ref(false)
const plugins = ref<any[]>([])
const localModules = ref<any[]>([])
const categories = ref<any[]>([])
const total = ref(0)
const page = ref(1)
const limit = ref(12)
const keyword = ref('')
const sort = ref('newest')
const activeCategory = ref('all')
const acting = ref<number | null>(null)

// AI Generated Modules
const aiscModules = ref<any[]>([])
const aiscActing = ref<string | null>(null)
const buying = ref(false)

const sortOptions = [
  { label: '最新', value: 'newest' },
  { label: '最热', value: 'popular' },
  { label: '最多下载', value: 'downloads' },
  { label: '价格最低', value: 'price_asc' },
  { label: '价格最高', value: 'price_desc' },
]

const defaultCover = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="180" fill="#f0f2f5"><rect width="300" height="180"/><text x="150" y="95" text-anchor="middle" fill="#c0c4cc" font-size="14">暂无封面</text></svg>')

// Detail
const detailVisible = ref(false)
const detailLoading = ref(false)
const detailPlugin = ref<any>(null)
const detailData = ref<any>(null)
const previewImg = ref('')

function formatCount(n: number): string {
  if (!n) return '0'
  if (n >= 10000) return (n / 1000).toFixed(1) + 'k'
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k'
  return String(n)
}

function btnState(p: any) {
  const local = localModules.value.find((m: any) => m.name === p.name)
  if (!local) {
    if (p.is_free || p.price === 0) {
      return { text: '安装', action: 'install', type: 'primary' }
    }
    return { text: `购买 ¥${p.price}`, action: 'buy', type: 'warning' }
  }
  if (p.price > 0 && !local.purchased) {
    return { text: `购买 ¥${p.price}`, action: 'buy', type: 'warning' }
  }
  const localVer = parseFloat(local.version)
  const marketVer = parseFloat(p.version)
  if (!isNaN(localVer) && !isNaN(marketVer) && localVer < marketVer) {
    return { text: '更新', action: 'update', type: 'success' }
  }
  return { text: '已安装(可卸载)', action: 'uninstall' }
}

async function fetchMarket() {
  try {
    const params = new URLSearchParams()
    params.set('category', activeCategory.value)
    params.set('page', String(page.value))
    params.set('limit', String(limit.value))
    if (keyword.value) params.set('keyword', keyword.value)
    if (sort.value) params.set('sort', sort.value)

    const resp = await fetch(`${MARKET_API}?${params.toString()}`)
    const json = await resp.json()
    if (json.code === 0 && json.data) {
      plugins.value = json.data.list || []
      total.value = json.data.total || 0
      if (json.data.categories?.length) {
        categories.value = json.data.categories
      }
    }
  } catch (e) {
    console.error('Market API fetch failed', e)
  }
}

async function fetchLocal() {
  try {
    const res = await getModuleListApi()
    localModules.value = res.data.list || []
  } catch {}
}

async function fetchAisc() {
  try {
    const res = await scanAiscModulesApi()
    aiscModules.value = res.data.list || []
  } catch {}
}

async function fetchData() {
  loading.value = true
  await Promise.all([fetchMarket(), fetchLocal(), fetchAisc()])
  loading.value = false
}

function switchCategory(slug: string) {
  activeCategory.value = slug
  page.value = 1
  keyword.value = ''
  fetchMarket()
}

function search() {
  page.value = 1
  fetchMarket()
}

async function handleUninstall(p: any) {
  acting.value = p.id
  try { await uninstallModuleApi(p.name); message.success('已卸载'); await fetchLocal() }
  catch(e:any) { message.error(e?.response?.data?.msg||'卸载失败') }
  acting.value = null
}

async function handleInstall(p: any) {
  dialog.warning({
    title: '确认安装',
    content: `确定要安装模块「${p.title}」吗？`,
    positiveText: '确定',
    negativeText: '取消',
    onPositiveClick: async () => {
      acting.value = p.id
      try {
        await installModuleApi(p.name)
        message.success('安装成功，即将刷新')
        setTimeout(() => window.location.reload(), 800)
      } catch { message.error('安装失败') }
      finally { acting.value = null }
    },
  })
}

async function handleAiscInstall(m: any) {
  dialog.warning({
    title: '一键安装AI生成模块',
    content: `确定要安装 AI 生成的模块「${m.title}」吗？系统将从 aisc 目录复制模块文件并自动安装。`,
    positiveText: '一键安装',
    negativeText: '取消',
    onPositiveClick: async () => {
      aiscActing.value = m.name
      try {
        await installFromAiscApi(m.name)
        message.success('模块安装成功！')
        await Promise.all([fetchLocal(), fetchAisc()])
      } catch { message.error('安装失败，请检查模块文件是否完整') }
      finally { aiscActing.value = null }
    },
  })
}

async function handleBuy(p: any) {
  buying.value = true
  try {
    const res = await savePaymentApi({
      channel: 'alipay',
      amount: p.price || 0,
      title: '购买模块: ' + p.title,
      product_type: 'module',
      product_id: p.name,
      return_url: window.location.origin + '/admin/#/module',
    })
    const orderNo = res.data.order_no
    const amount = res.data.amount
    const params = new URLSearchParams({
      order_no: orderNo,
      amount: String(amount),
      subject: '购买模块: ' + p.title,
      channel: 'alipay',
      site: window.location.hostname,
      return_url: window.location.origin + '/admin/#/module',
      product_type: 'module',
      product_id: p.name,
    })
    window.location.href = 'https://www.mcdmadmin.cn/api/pay?' + params.toString()
  } catch (e: any) {
    message.error(e?.response?.data?.msg || '创建订单失败')
  } finally {
    buying.value = false
  }
}

async function showDetail(p: any) {
  detailPlugin.value = p
  detailVisible.value = true
  detailLoading.value = true
  detailData.value = null
  try {
    const resp = await fetch(`${MARKET_API}/${p.id}`)
    const json = await resp.json()
    if (json.code === 0) {
      detailData.value = json.data
    }
  } catch {}
  detailLoading.value = false
}

onMounted(() => {
  fetchData()
})
</script>

<style scoped>
.market-page { max-width: 1200px; }
.category-tabs { overflow: hidden; }
.cat-tag { cursor: pointer; white-space: nowrap; user-select: none; }

.plugin-card { cursor: default; overflow: hidden; transition: transform 0.2s; }
.plugin-card:hover { transform: translateY(-2px); }

.aisc-card {
  cursor: default; overflow: hidden; transition: transform 0.2s;
  border: 1px dashed #7c3aed;
  background: linear-gradient(135deg, #faf5ff 0%, #f0e6ff 100%);
}
.aisc-card:hover { transform: translateY(-2px); border-color: #a78bfa; }

.aisc-icon {
  text-align: center; margin-bottom: 8px; padding: 8px 0;
}

.plugin-cover {
  width: 100%; height: 160px; overflow: hidden; cursor: pointer;
  position: relative; background: #f5f7fa;
}
.plugin-cover img {
  width: 100%; height: 100%; object-fit: cover;
}
.price-badge {
  position: absolute; top: 8px; right: 8px;
  font-weight: 600; font-size: 12px;
}

.plugin-title {
  font-size: 15px; font-weight: 600; cursor: pointer;
  margin-bottom: 6px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.plugin-title:hover { color: #1989fa; }

.plugin-excerpt {
  font-size: 12px; color: var(--n-text-color-3);
  margin-bottom: 10px; line-height: 1.5;
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
  overflow: hidden; min-height: 36px;
}

.plugin-meta {
  display: flex; gap: 12px; font-size: 11px; color: var(--n-text-color-3);
  margin-bottom: 12px; align-items: center; flex-wrap: wrap;
}
.meta-item { display: flex; align-items: center; gap: 3px; }

.plugin-action { margin-top: 4px; }

.pagination-wrap {
  display: flex; justify-content: center; margin-top: 24px;
}

/* Detail */
.screenshots-wrap { overflow: hidden; }
.screenshot {
  height: 200px; border-radius: 8px; cursor: pointer;
  border: 1px solid #ebeef2; object-fit: cover;
}
.screenshot:hover { border-color: #1989fa; }

.section-title {
  font-size: 14px; font-weight: 600; margin: 0 0 8px;
  padding-bottom: 6px; border-bottom: 1px solid #ebeef2;
}
.detail-desc { font-size: 13px; line-height: 1.7; color: var(--n-text-color-2); }
.changelog-list { margin: 4px 0; padding-left: 20px; font-size: 13px; }
.changelog-list li { line-height: 1.6; }

.text-success { color: #18a058; font-weight: 600; }
.text-warning { color: #f0a020; font-weight: 600; }
</style>
