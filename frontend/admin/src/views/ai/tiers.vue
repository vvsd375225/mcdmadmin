<template>
  <div>
    <n-card v-if="!memberMode" title="会员登录" class="mb-4">
      <n-result status="info" title="请先登录会员账号" description="AI 套餐购买仅对注册会员开放">
        <template #footer><n-button type="primary" @click="goMemberLogin">会员登录 / 注册</n-button></template>
      </n-result>
    </n-card>

    <div v-else>
    <n-card title="AI 套餐购买" class="mb-4">
      <template #header-extra>
        <n-tag :type="quota.pct > 90 ? 'error' : quota.pct > 70 ? 'warning' : 'info'">
          已用 {{ quota.pct }}%
        </n-tag>
      </template>

      <n-alert type="info" class="mb-4" v-if="!activated">
        您当前使用免费体验模式，每日 {{ trialDailyLimit }} token 额度。购买套餐获得更多额度。
      </n-alert>
      <n-alert type="success" class="mb-4" v-if="activated">
        当前套餐：<strong>{{ activationInfo.tier_name }}</strong>，
        到期时间：{{ activationInfo.expiry_at || '长期' }}
      </n-alert>

      <n-grid :cols="4" :x-gap="16" :y-gap="16">
        <n-grid-item v-for="(t, k) in tiers" :key="k">
          <n-card :bordered="true" :class="['tier-card', { 'tier-current': k === currentTier }]">
            <template #header>
              <n-space align="center" justify="center">
                <strong :class="'tier-name tier-' + k">{{ t.name }}</strong>
              </n-space>
            </template>
            <div class="tier-body">
              <div class="tier-price">
                <span class="price-num" v-if="t.price > 0">¥{{ t.price }}</span>
                <span class="price-num" v-else>免费</span>
                <span class="price-unit" v-if="t.price > 0">/月</span>
              </div>
              <div class="tier-limit">{{ formatTokens(t.limit) }} tokens/月</div>
              <div class="tier-desc">
                {{ k === 'free' ? '试用体验' : k === 'basic' ? '个人开发者' : k === 'pro' ? '专业团队' : '企业级' }}
              </div>
              <n-divider />
              <div class="tier-features">
                <div class="feature-item" v-for="(f, i) in (t.features?.length ? t.features : defaultFeatures(k))" :key="i">{{ f }}</div>
              </div>
            </div>
            <template #footer>
              <n-button v-if="k === currentTier" type="info" block disabled>当前套餐</n-button>
              <n-button v-else-if="t.price === 0" type="primary" block @click="showPayment(k, t)">免费升级</n-button>
              <n-button v-else type="warning" block @click="showPayment(k, t)">购买 ¥{{ t.price }}</n-button>
            </template>
          </n-card>
        </n-grid-item>
      </n-grid>
    </n-card>

    <n-card title="用量概览" class="mb-4">
      <n-grid :cols="3" :x-gap="16">
        <n-grid-item><n-statistic label="当月已用" :value="formatTokens(quota.used)" /></n-grid-item>
        <n-grid-item><n-statistic label="总额度" :value="formatTokens(quota.limit)" /></n-grid-item>
        <n-grid-item><n-statistic label="剩余" :value="formatTokens(quota.remaining)" /></n-grid-item>
      </n-grid>
      <n-progress type="line" :percentage="quota.pct"
        :color="quota.pct > 90 ? '#ff4444' : quota.pct > 70 ? '#ffaa00' : '#00ff41'" class="mt-4" />
    </n-card>

    <n-modal v-model:show="showPayModal" title="确认购买">
      <n-card style="width: 500px">
        <n-descriptions bordered :column="1">
          <n-descriptions-item label="套餐">{{ selectedTier?.name }}</n-descriptions-item>
          <n-descriptions-item label="价格">¥{{ selectedTier?.price || 0 }}/月</n-descriptions-item>
          <n-descriptions-item label="额度">{{ formatTokens(selectedTier?.limit || 0) }} tokens/月</n-descriptions-item>
        </n-descriptions>
        <n-divider />
        <n-form label-placement="left" label-width="100">
          <n-form-item label="会员ID">
            <n-input-number v-model:value="memberId" :min="1" placeholder="输入会员ID" />
          </n-form-item>
          <n-form-item label="支付方式">
            <n-radio-group v-model:value="payChannel">
              <n-radio value="balance">💰 余额支付</n-radio>
              <n-radio value="alipay">支付宝</n-radio>
              <n-radio value="wechat">微信支付</n-radio>
            </n-radio-group>
          </n-form-item>
        </n-form>
        <template #footer>
          <n-space justify="end">
            <n-button @click="showPayModal = false">取消</n-button>
            <n-button type="primary" :loading="paying" @click="handlePay">
              确认支付 ¥{{ selectedTier?.price || 0 }}
            </n-button>
          </n-space>
        </template>
      </n-card>
    </n-modal>
  </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useMessage } from 'naive-ui'
import { aiConfigApi, aiCreateOrderApi } from '@/api/ai'

const memberMode = !!new URLSearchParams(window.location.hash.split('?')[1] || '').get('m_token')
function goMemberLogin(){ window.location.href='http://127.0.0.1:3002/member' }

const message = useMessage()
const activated = ref(false)
const trialDailyLimit = ref(10)
const activationInfo = ref<any>({})
const currentTier = ref('')
const tiers = ref<Record<string, { name: string; limit: number; price: number }>>({})
const quota = ref({ pct: 0, used: 0, limit: 100000, remaining: 100000 })
const showPayModal = ref(false)
const payChannel = ref('alipay')
const paying = ref(false)
const selectedTier = ref<{ name: string; price: number; limit: number } | null>(null)
const selectedTierKey = ref('')
const memberId = ref(0)

function formatTokens(n: number) {
  if (n >= 100000000) return (n / 100000000).toFixed(1) + '亿'
  if (n >= 10000) return (n / 10000).toFixed(1) + '万'
  return n.toLocaleString()
}

function defaultFeatures(key: string): string[] {
  if (key === 'free') return ['AI智能对话', '代码自动生成']
  if (key === 'basic') return ['AI智能对话', '代码自动生成', '插件一键安装']
  if (key === 'pro') return ['AI智能对话', '代码自动生成', '插件一键安装', '优先技术支持']
  if (key === 'enterprise') return ['AI智能对话', '代码自动生成', '插件一键安装', '优先技术支持', '专属定制开发']
  return ['AI智能对话', '代码自动生成']
}

async function loadConfig() {
  try {
    const res = await aiConfigApi()
    const d = res.data
    activated.value = d.activated || false
    currentTier.value = d.tier || 'free'
    activationInfo.value = {
      tier: d.tier, tier_name: d.tier_name, expiry: d.expiry, expiry_at: d.expiry_at,
    }
    quota.value = {
      pct: d.quota?.pct || 0, used: d.quota?.used || 0,
      limit: d.quota?.limit || 100000, remaining: d.quota?.remaining || 100000,
    }
    tiers.value = d.tiers || {}
  } catch {}
}

function showPayment(key: string, tier: any) {
  selectedTierKey.value = key
  selectedTier.value = tier
  payChannel.value = 'balance'
  memberId.value = 0
  showPayModal.value = true
}

async function handlePay() {
  if (!selectedTier.value) return
  paying.value = true
  try {
    // 余额支付
    if (payChannel.value === 'balance') {
      const res = await aiCreateOrderApi({
        tier: selectedTierKey.value,
        channel: 'balance',
      })
      if (res.data.code !== 0) { message.error(res.data.msg || '余额不足'); paying.value = false; return }
      message.success('购买成功！已激活 ' + selectedTier.value.name)
      showPayModal.value = false
      paying.value = false
      loadConfig()
      return
    }
    // 外部支付
    const res = await aiCreateOrderApi({
      tier: selectedTierKey.value,
      channel: payChannel.value,
      member_id: memberId.value || undefined,
    })
    const orderNo = res.data.order_no
    const amount = selectedTier.value.price
    const subject = `McdmAdmin AI ${selectedTier.value.name}`
    const params = new URLSearchParams({
      order_no: orderNo, amount: String(amount), subject,
      channel: payChannel.value, site: window.location.hostname,
      return_url: window.location.origin + '/admin#/payment/result',
      product_type: 'ai_tier', product_id: selectedTierKey.value,
    })
    window.location.href = 'https://www.machuangziyuan.cn/api/pay?' + params.toString()
  } catch (e: any) {
    message.error(e?.response?.data?.msg || '创建订单失败')
  } finally {
    paying.value = false
  }
}

onMounted(loadConfig)
</script>

<style scoped>
.tier-card { text-align: center; transition: all .2s; }
.tier-card:hover { border-color: var(--n-color-target); transform: translateY(-2px); }
.tier-current { border-color: #00ff41; border-width: 2px; }
.tier-body { padding: 8px 0; }
.tier-price { margin: 12px 0; }
.price-num { font-size: 28px; font-weight: bold; }
.price-unit { font-size: 13px; color: #999; }
.tier-limit { color: #666; margin: 4px 0; }
.tier-desc { color: #999; font-size: 12px; margin: 4px 0; }
.tier-features { text-align: left; }
.feature-item { padding: 3px 0; font-size: 13px; color: #666; }
.tier-name { font-size: 15px; }
.tier-free { color: #888; } .tier-basic { color: #00ccff; } .tier-pro { color: #00ff41; } .tier-enterprise { color: #ffaa00; }
.mt-4 { margin-top: 16px; } .mb-4 { margin-bottom: 16px; }
</style>
