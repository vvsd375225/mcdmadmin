<template>
  <div class="mc-root" :class="{ dark: themeStore.isDark }">
    <!-- 顶栏 -->
    <header class="mc-top" :class="{ dark: themeStore.isDark }">
      <div class="mc-top-inner">
        <span class="mc-logo" @click="$router.push('/')">McdmAdmin</span>
        <div class="mc-top-btns">
          <n-button v-if="user.id" text @click="$router.push('/')">首页</n-button>
          <n-button v-if="user.id" text type="error" @click="doLogout">退出</n-button>
        </div>
      </div>
    </header>

    <!-- 未登录：登录/注册 -->
    <div v-if="!user.id" class="mc-auth">
      <div class="auth-card">
        <div class="auth-header">
          <div class="auth-logo">McdmAdmin</div>
          <p class="auth-subtitle">会员中心</p>
        </div>
        <div class="auth-tabs">
          <button :class="['auth-tab', authTab==='login'?'active':'']" @click="authTab='login'">登录</button>
          <button :class="['auth-tab', authTab==='register'?'active':'']" @click="authTab='register'">注册</button>
        </div>

        <!-- 登录 -->
        <form v-if="authTab==='login'" class="auth-form" @submit.prevent="doLogin">
          <div class="input-group">
            <span class="input-icon">👤</span>
            <input v-model="loginForm.username" placeholder="用户名 / 邮箱 / 手机号" @keyup.enter="doLogin" />
          </div>
          <div class="input-group">
            <span class="input-icon">🔒</span>
            <input v-model="loginForm.password" type="password" placeholder="密码" @keyup.enter="doLogin" />
          </div>
          <div style="display:flex;gap:10px;align-items:center">
            <input v-model="loginForm.captcha" placeholder="验证码" style="flex:1;padding:12px;border:1px solid #e0e0e0;border-radius:8px;font-size:14px;outline:none" :style="{'border-color':themeStore.isDark?'#3a4050':'#e0e0e0',background:themeStore.isDark?'#232838':'#fafafa',color:themeStore.isDark?'#e0e0e0':'#333'}" />
            <img :src="captchaUrl" @click="refreshCaptcha" style="height:42px;cursor:pointer;border-radius:6px" title="点击刷新" />
          </div>
          <button type="submit" class="auth-btn" :disabled="loading">{{ loading ? '登录中...' : '登 录' }}</button>
        </form>

        <!-- 注册 -->
        <form v-if="authTab==='register'" class="auth-form" @submit.prevent="doRegister">
          <div class="input-group">
            <span class="input-icon">👤</span>
            <input v-model="regForm.username" placeholder="用户名" />
          </div>
          <div class="input-group">
            <span class="input-icon">🔒</span>
            <input v-model="regForm.password" type="password" placeholder="密码 (至少6位)" />
          </div>
          <div class="input-group">
            <span class="input-icon">🔒</span>
            <input v-model="regForm.rePass" type="password" placeholder="确认密码" />
          </div>
          <div class="input-group">
            <span class="input-icon">📱</span>
            <input v-model="regForm.mobile" placeholder="手机号 (选填)" />
          </div>
          <div class="input-group">
            <span class="input-icon">📧</span>
            <input v-model="regForm.email" placeholder="邮箱 (选填)" />
          </div>
          <div style="display:flex;gap:10px;align-items:center">
            <input v-model="regForm.captcha" placeholder="验证码" style="flex:1;padding:12px;border:1px solid #e0e0e0;border-radius:8px;font-size:14px;outline:none" :style="{'border-color':themeStore.isDark?'#3a4050':'#e0e0e0',background:themeStore.isDark?'#232838':'#fafafa',color:themeStore.isDark?'#e0e0e0':'#333'}" />
            <img :src="captchaUrl" @click="refreshCaptcha" style="height:42px;cursor:pointer;border-radius:6px" title="点击刷新" />
          </div>
          <button type="submit" class="auth-btn" :disabled="loading">{{ loading ? '注册中...' : '注 册' }}</button>
        </form>
      </div>
    </div>

    <!-- 已登录：会员中心 -->
    <div v-else class="mc-body">
      <!-- 信息卡 -->
      <n-card class="mc-info-card">
        <div style="display:flex;align-items:center;justify-content:space-between">
          <n-space align="center" size="large">
            <n-avatar :size="56" round :style="{background:'linear-gradient(135deg,#667eea,#764ba2)'}">{{ user.username?.charAt(0)?.toUpperCase() }}</n-avatar>
            <div>
              <h3>{{ user.nickname || user.username }}</h3>
              <n-space size="small">
                <n-tag v-if="user.level_name" type="info" size="small">{{ user.level_name }}</n-tag>
                <n-text depth="3">余额: ¥{{ (user.balance||0).toFixed(2) }}</n-text>
              </n-space>
            </div>
          </n-space>
          <div style="display:flex;gap:8px">
            <n-button type="primary" size="small" @click="goToAi">🤖 AI 开发</n-button>
            <n-button size="small" @click="handleLogout">退出</n-button>
          </div>
        </div>
      </n-card>

      <!-- 内容 Tab -->
      <n-card class="mc-tab-card">
        <n-tabs v-model:value="tab" type="line" animated>
          <n-tab-pane name="plan" tab="💎 我的套餐" />
          <n-tab-pane name="wallet" tab="💰 钱包" />
          <n-tab-pane name="orders" tab="📋 购买记录" />
          <n-tab-pane name="tickets" tab="🎫 工单" />
          <n-tab-pane name="info" tab="👤 个人信息" />
        </n-tabs>

        <div class="mc-tab-content">
          <!-- 套餐 -->
          <div v-if="tab==='plan'">
            <n-grid :cols="4" :x-gap="12" responsive="screen">
              <n-grid-item v-for="l in levels" :key="l.id">
                <n-card class="plan-card" :class="'card-'+l.tier_key" size="small">
                  <template #header><strong>{{ l.name }}</strong></template>
                  <div class="plan-price">¥{{ l.price }}<span>/月</span></div>
                  <p>{{ formatNum(l.tokens_month) }} Token/月</p>
                  <div class="plan-feats"><span v-for="(f,i) in (l.features||[])" :key="i">✓ {{ f }}</span></div>
                  <n-tag v-if="isCurrentTier(l.tier_key)" type="success" block style="text-align:center">当前使用</n-tag>
                  <n-tag v-else-if="hasActiveSub(l.tier_key)" type="info" block style="text-align:center">已购买</n-tag>
                  <n-button v-else type="primary" block size="small" @click="checkLogin(()=>openBuyModal(l))">购买</n-button>
                </n-card>
              </n-grid-item>
            </n-grid>
          </div>

          <!-- 钱包 -->
          <div v-if="tab==='wallet'" style="max-width:480px">
            <n-statistic label="可用余额" :value="(user.balance||0).toFixed(2)" />
            <n-space class="mt-4">
              <n-button v-for="a in [50,100,200,500]" :key="a" size="small" @click="rechargeAmount=a;showRecharge=true">¥{{ a }}</n-button>
              <n-input-number v-model:value="rechargeAmount" :min="1" style="width:90px" size="small" placeholder="金额" />
              <n-button type="primary" size="small" @click="showRecharge=true">充值</n-button>
            </n-space>
            <n-modal v-model:show="showRecharge" title="确认充值" preset="card" style="width:340px">
              <p>金额: ¥{{ rechargeAmount }}</p>
              <n-radio-group v-model:value="payChannel"><n-radio value="alipay">支付宝</n-radio><n-radio value="wechat">微信</n-radio></n-radio-group>
              <template #footer><n-space justify="end"><n-button @click="showRecharge=false">取消</n-button><n-button type="primary" :loading="recharging" @click="doRecharge">确认</n-button></n-space></template>
            </n-modal>
            <n-divider>流水</n-divider>
            <n-data-table :columns="txCols" :data="transactions" size="small" :pagination="false" max-height="300" />
          </div>

          <!-- 购买记录 -->
          <div v-if="tab==='orders'" style="max-width:800px">
            <n-data-table :columns="orderCols" :data="subscriptions" size="small" :pagination="false" />
          </div>

          <!-- 工单 -->
          <div v-if="tab==='tickets'" style="max-width:600px">
            <n-space vertical class="mb-4">
              <n-input v-model:value="ticketTitle" placeholder="标题" />
              <n-input v-model:value="ticketContent" type="textarea" :rows="3" placeholder="描述你的问题..." />
              <n-button type="primary" size="small" :loading="subTicket" @click="submitTicket">提交工单</n-button>
            </n-space>
            <n-data-table :columns="ticketCols" :data="tickets" size="small" :pagination="false" :expanded-row-keys="expT" @update:expanded-row-keys="(k:any)=>expT=k" />
          </div>

          <!-- 个人信息 -->
          <div v-if="tab==='info'" style="max-width:400px">
            <n-form label-width="70">
              <n-form-item label="手机号"><n-input v-model:value="pf.mobile" /></n-form-item>
              <n-form-item label="邮箱"><n-input v-model:value="pf.email" /></n-form-item>
              <n-form-item label="昵称"><n-input v-model:value="pf.nickname" /></n-form-item>
              <n-form-item><n-button type="primary" size="small" :loading="saving" @click="saveProfile">保存</n-button></n-form-item>
            </n-form>
            <n-divider />
            <n-form label-width="70">
              <n-form-item label="旧密码"><n-input v-model:value="pwd.old" type="password" /></n-form-item>
              <n-form-item label="新密码"><n-input v-model:value="pwd.n1" type="password" /></n-form-item>
              <n-form-item label="确认"><n-input v-model:value="pwd.n2" type="password" /></n-form-item>
              <n-form-item><n-button type="primary" size="small" :loading="chPwd" @click="changePwd">修改密码</n-button></n-form-item>
            </n-form>
          </div>
        </div>
      </n-card>
    </div>
  </div>

  <!-- 购买确认弹窗 -->
  <n-modal v-model:show="showBuyModal" title="确认购买" preset="card" style="width:380px">
    <template v-if="buyLevel">
      <p><strong>{{ buyLevel.name }}</strong></p>
      <n-statistic label="价格" :value="buyPrice" />
      <p v-if="user.balance>=buyPrice" style="color:#18a058">余额 ¥{{ user.balance?.toFixed(2) }} 充足</p>
      <p v-else style="color:#e74c3c">余额不足，还需 ¥{{ (buyPrice-(user.balance||0)).toFixed(2) }}</p>
      <n-radio-group v-model:value="buyPayMethod" class="mt-4">
        <n-radio value="balance">💰 余额支付 (¥{{ user.balance?.toFixed(2) }})</n-radio>
        <n-radio value="alipay">📱 支付宝</n-radio>
        <n-radio value="wechat">💬 微信</n-radio>
      </n-radio-group>
    </template>
    <template #footer>
      <n-space justify="end"><n-button @click="showBuyModal=false">取消</n-button><n-button type="primary" :loading="buying" @click="confirmBuy">确认购买</n-button></n-space>
    </template>
  </n-modal>

  <!-- 未登录提示 -->
  <n-modal v-model:show="showLoginTip" title="提示" preset="card" style="width:360px">
    <p>请先登录或注册后再进行操作</p>
    <template #footer>
      <n-space justify="end">
        <n-button @click="showLoginTip=false">取消</n-button>
        <n-button type="primary" @click="showLoginTip=false; authTab='login'">去登录</n-button>
        <n-button @click="showLoginTip=false; authTab='register'">去注册</n-button>
      </n-space>
    </template>
  </n-modal>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed, h } from 'vue'
import { useRouter } from 'vue-router'
import { useThemeStore } from '@/stores/theme'
import axios from 'axios'

const router = useRouter()
const showLoginTip = ref(false)
function checkLogin(fn: Function) { if (!user.value.id) { showLoginTip.value = true; return }; fn() }
function goToAi(){ const t=localStorage.getItem('m_token'); if(!t) { showLoginTip.value=true; return }; localStorage.setItem('swift_member_token', t); window.open('http://127.0.0.1:3001/#/ai', '_blank') }
function handleLogout(){ localStorage.removeItem('m_token'); user.value={}; router.push('/member') }
const themeStore = useThemeStore()
const api = axios.create({ baseURL: '' })
api.interceptors.request.use(c => { const t=localStorage.getItem('m_token'); if(t) c.headers.Authorization=`Bearer ${t}`; return c })
api.interceptors.response.use(r => { if(r.data&&r.data.code!==0&&r.data.code!==undefined){ message.error(r.data.msg||'请求失败'); if(r.data.code===403||(r.data.msg||'').includes('违规')) doLogout(); }; return r })

const authTab = ref('login')
const tab = ref('plan')
const loading = ref(false)
const user = ref<any>({})
const levels = ref<any[]>([])
const transactions = ref<any[]>([])
const subscriptions = ref<any[]>([])
const activeSubs = ref<any[]>([])
function isCurrentTier(key:string){ return user.value.level_name && levels.value.find((l:any)=>l.tier_key===key)?.name === user.value.level_name }
function hasActiveSub(key:string){ return activeSubs.value.some((s:any)=>s.level_name && levels.value.find((l:any)=>l.tier_key===key)?.name === s.level_name) }
const tickets = ref<any[]>([])
const expT = ref<number[]>([])
const captchaUrl = ref('/admin/captcha?'+Date.now())
function refreshCaptcha(){ captchaUrl.value='/admin/captcha?'+Date.now() }
const loginForm = reactive({ username:'', password:'', captcha:'' })
const regForm = reactive({ username:'', password:'', rePass:'', mobile:'', email:'', captcha:'' })
const pf = reactive({ mobile:'', email:'', nickname:'' })
const pwd = reactive({ old:'', n1:'', n2:'' })
const rechargeAmount = ref(100)
const showRecharge = ref(false)
const payChannel = ref('alipay')
const recharging = ref(false)
const saving = ref(false)
const chPwd = ref(false)
const subTicket = ref(false)
const ticketTitle = ref('')
const ticketContent = ref('')
const showBuyModal = ref(false)
const buyLevel = ref<any>(null)
const buyPrice = ref(0)
const buyPayMethod = ref('balance')
const buyPeriod = ref('month')
const buying = ref(false)

const txCols = [{title:'类型',key:'type_text',width:60},{title:'金额',key:'amount',width:80},{title:'余额',key:'balance_after',width:80},{title:'备注',key:'remark'},{title:'时间',key:'create_time',width:140}]
function statusText(s:string){ return s==='active'?'已支付':s==='pending'?'待支付':s==='expired'?'已过期':s }
async function deleteOrder(id:number){ try{await api.delete('/admin/member_api/order/'+id); message.success('已删除'); fetchData()}catch(e:any){message.error(e?.response?.data?.msg||'失败')} }
async function goPay(row:any){
  if(!row.order_no||!row.amount) return message.warning('订单信息不全')
  const params=new URLSearchParams({order_no:row.order_no,amount:String(row.amount),subject:'McdmAdmin AI '+row.level_name,channel:'alipay',site:window.location.hostname,return_url:window.location.origin+'/member',product_type:'ai_tier',product_id:row.level_name})
  window.location.href='https://www.mcdmadmin.cn/api/pay?'+params.toString()
}
const orderCols = [
  {title:'订单号',key:'order_no',width:180},{title:'套餐',key:'level_name',width:90},{title:'金额',key:'amount',width:70,render:(r:any)=>'¥'+r.amount},{title:'周期',key:'period',width:60},
  {title:'状态',key:'status',width:80,render:(r:any)=>h(NTag,{type:r.status==='active'?'success':r.status==='pending'?'warning':'default',size:'tiny'},{default:()=>statusText(r.status)})},
  {title:'时间',key:'pay_time',width:130},
  {title:'操作',key:'actions',width:150,render:(r:any)=>h('div',{style:{display:'flex',gap:'4px'}},[
    r.status==='pending'?h(NButton,{size:'tiny',type:'warning',onClick:()=>goPay(r)},{default:()=>'去支付'}):null,
    h(NButton,{size:'tiny',type:'error',secondary:true,onClick:()=>deleteOrder(r.id)},{default:()=>'删除'}),
  ])}]
const ticketCols = [{title:'标题',key:'title',width:150},{title:'状态',key:'status_text',width:70},{title:'回复',key:'reply',ellipsis:{tooltip:true}},{title:'时间',key:'create_time',width:130}]

function formatNum(n:number){if(n>=1e8)return (n/1e8).toFixed(1)+'亿';if(n>=1e4)return (n/1e4).toFixed(1)+'万';return n?.toLocaleString()||'0'}

import { NTag, NText, NDivider, NStatistic, NRadioGroup, NRadio, NDataTable, NButton, useMessage } from 'naive-ui'
const message = useMessage()

function isValidEmail(e:string){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) }
function isValidMobile(m:string){ return /^1[3-9]\d{9}$/.test(m) }

async function doLogin(){
  if(!loginForm.username.trim()) return message.warning('请输入用户名')
  if(!loginForm.password) return message.warning('请输入密码')
  if(!loginForm.captcha) return message.warning('请输入验证码')
  loading.value=true
  try{
    const r=await api.post('/admin/member_api/login',loginForm)
    if(r.data.code!==0){ message.error(r.data.msg||'登录失败'); loading.value=false; return }
    localStorage.setItem('m_token',r.data.data.token); user.value=r.data.data; message.success('登录成功'); fetchData()
  } catch(e:any){ message.error(e?.response?.data?.msg||'登录失败') }
  loading.value=false
}
async function doRegister(){
  const u=regForm.username.trim()
  if(!u) return message.warning('请输入用户名')
  if(u.length<2||u.length>20) return message.warning('用户名2-20个字符')
  if(!/^[a-zA-Z0-9_一-龥]+$/.test(u)) return message.warning('用户名只允许字母数字下划线和中文')
  if(!regForm.password) return message.warning('请输入密码')
  if(regForm.password.length<6) return message.warning('密码至少6位')
  if(regForm.password!==regForm.rePass) return message.warning('两次密码不一致')
  if(regForm.mobile&&!isValidMobile(regForm.mobile)) return message.warning('手机号格式不正确')
  if(regForm.email&&!isValidEmail(regForm.email)) return message.warning('邮箱格式不正确')
  if(!regForm.captcha) return message.warning('请输入验证码')
  loading.value=true
  try{ const r=await api.post('/admin/member_api/register',regForm); localStorage.setItem('m_token',r.data.data.token); user.value=r.data.data; message.success('注册成功'); authTab.value='login'; fetchData() }
  catch(e:any){ message.error(e?.response?.data?.msg||'注册失败') }
  loading.value=false
}
function doLogout(){ localStorage.removeItem('m_token'); user.value={}; router.push('/member') }
async function fetchData(){
  if(!user.value.id) return
  try{ const r=await api.get('/admin/member_api/profile'); user.value=r.data.data.user||{}; levels.value=r.data.data.levels||[] }
  catch{ doLogout() }
  try{ const r=await api.get('/admin/member_api/subscriptions'); subscriptions.value=r.data.data.list||[]; activeSubs.value=subscriptions.value.filter((s:any)=>s.status==='active') }catch{}
  try{ const r=await api.get('/admin/member_api/transactions'); transactions.value=r.data.data.list||[] }catch{}
  try{ const r=await api.get('/admin/member_api/tickets'); tickets.value=r.data.data.list||[] }catch{}
}
async function saveProfile(){ saving.value=true; try{await api.post('/admin/member_api/updateProfile',pf); message.success('保存成功'); fetchData()}catch(e:any){message.error(e?.response?.data?.msg||'失败')}; saving.value=false }
async function changePwd(){ if(!pwd.old||!pwd.n1)return message.warning('填写完整'); if(pwd.n1!==pwd.n2)return message.warning('两次不一致'); chPwd.value=true; try{await api.post('/admin/member_api/changePwd',{old_password:pwd.old,new_password:pwd.n1}); message.success('已修改'); pwd.old='';pwd.n1='';pwd.n2=''}catch(e:any){message.error(e?.response?.data?.msg||'失败')}; chPwd.value=false }
async function doRecharge(){ recharging.value=true; try{await api.post('/admin/member_api/recharge',{amount:rechargeAmount.value,channel:payChannel.value}); message.success('订单已创建'); showRecharge.value=false}catch(e:any){message.error(e?.response?.data?.msg||'失败')}; recharging.value=false }
function openBuyModal(l:any){ buyLevel.value=l; buyPrice.value=Number(l.price)||0; buyPayMethod.value='balance'; buyPeriod.value='month'; showBuyModal.value=true }
async function confirmBuy(){ buying.value=true; try{
  const r=await api.post('/admin/member_api/order',{level_id:buyLevel.value.tier_key,period:buyPeriod.value,channel:buyPayMethod.value})
  if(r.data.code!==0){ message.error(r.data.msg||'失败'); buying.value=false; return }
  if(buyPayMethod.value==='balance'){
    message.success('购买成功！已激活 '+buyLevel.value.name)
    user.value.balance=r.data.data.balance; showBuyModal.value=false; fetchData()
  } else {
    // 外部支付：跳转支付页
    const d=r.data.data||r.data
    const params=new URLSearchParams({
      order_no:d.order_no, amount:String(buyPrice.value),
      subject:'McdmAdmin AI '+buyLevel.value.name,
      channel:buyPayMethod.value, site:window.location.hostname,
      return_url:window.location.origin+'/member',
      product_type:'ai_tier', product_id:buyLevel.value.tier_key,
    })
    window.location.href='https://www.mcdmadmin.cn/api/pay?'+params.toString()
  }
}catch(e:any){message.error(e?.response?.data?.msg||'失败')}
buying.value=false }
async function submitTicket(){ if(!ticketTitle.value||!ticketContent.value)return message.warning('填写完整'); subTicket.value=true; try{await api.post('/admin/member_api/ticket/submit',{title:ticketTitle.value,content:ticketContent.value}); message.success('已提交'); ticketTitle.value='';ticketContent.value=''; fetchData()}catch(e:any){message.error(e?.response?.data?.msg||'失败')}; subTicket.value=false }

onMounted(()=>{
  const token = localStorage.getItem('m_token')
  if(token){ try{ api.get('/admin/member_api/profile').then(r=>{ user.value=r.data.data.user||{}; fetchData() }).catch(()=>localStorage.removeItem('m_token')) }catch{} }
  setInterval(async () => {
    if(!user.value.id) return
    try {
      const r = await api.get('/admin/member_api/status')
      if(r.data.code===403 || (r.data.msg||'').includes('违规')) { user.value.is_banned = 1; user.value.ban_reason = r.data?.ban_reason || r.data.msg }
      else { user.value.is_banned = 0; user.value.ban_reason = '' }
    } catch(e) {}
  }, 30000)
})
</script>

<style scoped>
.mc-root{min-height:100vh;background:#f5f7fa;transition:background .3s;}.mc-root.dark{background:#0f172a;}
.mc-top{background:#fff;border-bottom:1px solid #e8ecf0;position:sticky;top:0;z-index:100;}.mc-top.dark{background:#141a23;border-color:#1e2833;}
.mc-top-inner{max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;height:56px;padding:0 24px;}
.mc-logo{font-size:20px;font-weight:800;color:#18a058;cursor:pointer;}.dark .mc-logo{color:#4ade80;}
.mc-top-btns{display:flex;gap:8px;}
.mc-auth{display:flex;justify-content:center;padding:80px 24px;}
.mc-card{width:420px;}
/* 新登录注册样式 */
.auth-card { width: 420px; background: #fff; border-radius: 16px; padding: 40px 36px; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
.dark .auth-card { background: #1a1f2e; box-shadow: 0 4px 24px rgba(0,0,0,0.3); }
.auth-header { text-align: center; margin-bottom: 28px; }
.auth-logo { font-size: 28px; font-weight: 800; color: #18a058; }
.dark .auth-logo { color: #4ade80; }
.auth-subtitle { color: #999; font-size: 14px; margin-top: 6px; }
.auth-tabs { display: flex; border-bottom: 2px solid #f0f0f0; margin-bottom: 24px; }
.dark .auth-tabs { border-color: #2a3040; }
.auth-tab { flex: 1; padding: 10px 0; border: none; background: none; font-size: 16px; color: #999; cursor: pointer; transition: all .2s; position: relative; }
.auth-tab.active { color: #18a058; font-weight: 600; }
.dark .auth-tab.active { color: #4ade80; }
.auth-tab.active::after { content: ''; position: absolute; bottom: -2px; left: 0; right: 0; height: 2px; background: #18a058; }
.dark .auth-tab.active::after { background: #4ade80; }
.auth-form { display: flex; flex-direction: column; gap: 14px; }
.input-group { display: flex; align-items: center; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; transition: border-color .2s; background: #fafafa; }
.dark .input-group { border-color: #3a4050; background: #232838; }
.input-group:focus-within { border-color: #18a058; }
.dark .input-group:focus-within { border-color: #4ade80; }
.input-icon { padding: 0 12px; font-size: 16px; opacity: 0.5; }
.input-group input { flex: 1; border: none; background: transparent; padding: 12px 12px 12px 0; font-size: 14px; color: #333; outline: none; }
.dark .input-group input { color: #e0e0e0; }
.input-group input::placeholder { color: #bbb; }
.auth-btn { width: 100%; padding: 12px; border: none; border-radius: 8px; background: #18a058; color: #fff; font-size: 16px; font-weight: 600; cursor: pointer; transition: all .2s; margin-top: 4px; }
.auth-btn:hover { background: #0d7a3e; }
.auth-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.mc-body{max-width:1100px;margin:24px auto;padding:0 24px;}
.mc-info-card{margin-bottom:16px;}
.mc-tab-content{padding-top:16px;min-height:300px;}
.plan-card{transition:all .2s}.plan-card:hover{transform:translateY(-2px);box-shadow:0 4px 12px rgba(0,0,0,.1)}
.card-free{border-top:3px solid #999}.card-basic{border-top:3px solid #00aaff}.card-pro{border-top:3px solid #18a058}.card-enterprise{border-top:3px solid #f0a020}
.plan-price{font-size:22px;font-weight:700;color:#18a058}.plan-price span{font-size:12px;color:#999}
.plan-feats span{display:block;font-size:12px;color:#666;line-height:2}
.mt-4{margin-top:16px}.mb-4{margin-bottom:16px}
</style>
