<template>
  <div>
    <n-card title="支付结果">
      <n-spin :show="loading">
        <n-result v-if="result"
          :status="result.success ? 'success' : 'info'"
          :title="result.success ? '支付成功' : '支付处理中'"
          :description="result.msg"
        >
          <template #footer>
            <n-descriptions bordered :column="2" v-if="result.data">
              <n-descriptions-item label="订单号">{{ result.data.order_no }}</n-descriptions-item>
              <n-descriptions-item label="金额">¥{{ result.data.amount }}</n-descriptions-item>
              <n-descriptions-item label="状态">
                <n-tag :type="statusType[result.data.status]">{{ statusMap[result.data.status] }}</n-tag>
              </n-descriptions-item>
              <n-descriptions-item label="渠道">{{ result.data.channel === 'alipay' ? '支付宝' : '微信支付' }}</n-descriptions-item>
              <n-descriptions-item label="标题">{{ result.data.title }}</n-descriptions-item>
              <n-descriptions-item label="时间">{{ result.data.create_time }}</n-descriptions-item>
            </n-descriptions>
            <n-space justify="center" class="mt-4">
              <n-button type="primary" @click="$router.push('/ai/tiers')">返回套餐</n-button>
              <n-button @click="$router.push('/payment/orders')">查看订单</n-button>
            </n-space>
          </template>
        </n-result>
        <n-empty v-if="!result && !loading" description="未找到订单信息" />
      </n-spin>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getPaymentListApi } from '@/api/payment'

const route = useRoute()
const loading = ref(true)
const result = ref<any>(null)

const statusMap: any = { 0: '待支付', 1: '已支付', 2: '已退款' }
const statusType: any = { 0: 'default', 1: 'success', 2: 'warning' }

onMounted(async () => {
  const orderNo = route.query.order_no as string
  if (orderNo) {
    try {
      const res = await getPaymentListApi({ order_no: orderNo, limit: 1 })
      if (res.data && res.data.list && res.data.list.length > 0) {
        const d = res.data.list[0]
        result.value = {
          success: d.status == 1,
          msg: d.status == 1 ? '订单支付成功，服务已开通。' : d.status == 0 ? '订单正在处理中，请稍候...' : '订单已退款。',
          data: d,
        }
      }
    } catch {}
  }
  loading.value = false
})
</script>

<style scoped>
.mt-4 { margin-top: 16px; }
</style>
