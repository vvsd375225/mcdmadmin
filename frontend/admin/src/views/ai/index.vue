<template>
  <div class="terminal-root">
    <div class="scanlines" />

    <!-- 未登录会员 -->
    <div v-if="!memberToken" class="activate-page">
      <div class="terminal-card">
        <div class="terminal-header"><span class="dot red"/><span class="dot yellow"/><span class="dot green"/><span class="header-title">会员中心 · MEMBER_LOGIN</span></div>
        <div class="terminal-body" style="padding:30px">
          <div class="auth-tabs">
            <button :class="['auth-tab-btn', memberAuthTab==='login'?'active':'']" @click="memberAuthTab='login'">登 录</button>
            <button :class="['auth-tab-btn', memberAuthTab==='register'?'active':'']" @click="memberAuthTab='register'">注 册</button>
          </div>
          <div style="max-width:360px;margin:20px auto">
            <!-- 登录 -->
            <form v-if="memberAuthTab==='login'" @submit.prevent="doMemberLogin" class="auth-form-v2">
              <div class="input-group-v2">
                <span class="input-icon-v2">👤</span>
                <input v-model="mloginForm.username" placeholder="用户名 / 手机号 / 邮箱" />
              </div>
              <div class="input-group-v2">
                <span class="input-icon-v2">🔒</span>
                <input v-model="mloginForm.password" type="password" placeholder="密码" />
              </div>
              <div style="display:flex;gap:8px;align-items:center">
                <input v-model="mloginForm.captcha" placeholder="验证码" style="flex:1;padding:11px 12px;border:1px solid #333;border-radius:6px;background:#1a1d24;color:#e0e0e0;font-size:14px;outline:none" />
                <img :src="memberCaptcha" @click="refreshMemberCaptcha" style="height:38px;cursor:pointer;border-radius:4px" title="点击刷新" />
              </div>
              <button type="submit" class="auth-btn-v2" :disabled="memberAuthLoading">{{ memberAuthLoading?'登录中...':'登 录' }}</button>
              <p v-if="memberAuthMsg" class="msg-line" :class="memberAuthMsgType">{{ memberAuthMsg }}</p>
            </form>
            <!-- 注册 -->
            <form v-if="memberAuthTab==='register'" @submit.prevent="doMemberRegister" class="auth-form-v2">
              <div class="input-group-v2">
                <span class="input-icon-v2">👤</span>
                <input v-model="mregForm.username" placeholder="用户名 (2-20字符)" />
              </div>
              <div class="input-group-v2">
                <span class="input-icon-v2">🔒</span>
                <input v-model="mregForm.password" type="password" placeholder="密码 (至少6位)" />
              </div>
              <div class="input-group-v2">
                <span class="input-icon-v2">🔒</span>
                <input v-model="mregForm.rePass" type="password" placeholder="确认密码" />
              </div>
              <div class="input-group-v2">
                <span class="input-icon-v2">📱</span>
                <input v-model="mregForm.mobile" placeholder="手机号 (选填)" />
              </div>
              <div class="input-group-v2">
                <span class="input-icon-v2">📧</span>
                <input v-model="mregForm.email" placeholder="邮箱 (选填)" />
              </div>
              <div style="display:flex;gap:8px;align-items:center">
                <input v-model="mregForm.captcha" placeholder="验证码" style="flex:1;padding:11px 12px;border:1px solid #333;border-radius:6px;background:#1a1d24;color:#e0e0e0;font-size:14px;outline:none" />
                <img :src="memberCaptcha" @click="refreshMemberCaptcha" style="height:38px;cursor:pointer;border-radius:4px" title="点击刷新" />
              </div>
              <button type="submit" class="auth-btn-v2" :disabled="memberAuthLoading">{{ memberAuthLoading?'注册中...':'注册并激活' }}</button>
              <p v-if="memberAuthMsg" class="msg-line" :class="memberAuthMsgType">{{ memberAuthMsg }}</p>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- ==================== 激活页 ==================== -->
    <div v-else-if="!activated" class="activate-page">
      <div class="terminal-card">
        <div class="terminal-header">
          <span class="dot red" /><span class="dot yellow" /><span class="dot green" />
          <span class="header-title">系统激活 · LICENSE_ACTIVATION</span>
        </div>
        <div class="terminal-body">
          <pre class="ascii-logo">
   ███████╗██╗    ██╗██╗███████╗████████╗
   ██╔════╝██║    ██║██║██╔════╝╚══██╔══╝
   ███████╗██║ █╗ ██║██║█████╗     ██║
   ╚════██║██║███╗██║██║██╔══╝     ██║
   ███████║╚███╔███╔╝██║██║        ██║
   ╚══════╝ ╚══╝╚══╝ ╚═╝╚═╝        ╚═╝
          </pre>
          <p class="brand-line">「 码创软件开发工作室 」AI 智能开发平台</p>
          <div style="text-align:center;margin:16px 0">
            <button class="start-chat-btn" @click="checkMemberThen(()=>startTrial())">
              ⚡ 开始 AI 对话
            </button>
            <p style="color:#555;font-size:11px;margin-top:6px">登录即可免费体验 · 无需许可证</p>
          </div>
          <div class="divider">──────────────────────────────────────</div>

          <div class="prompt-line">
            <span class="prompt">激活码:~$ </span>
            <input
              v-model="licenseKey"
              class="terminal-input"
              placeholder="输入License密钥..."
              :disabled="activating"
              @keydown.enter="handleActivate"
            />
            <span class="cursor-blink">█</span>
          </div>

          <div v-if="activateMsg" class="msg-line" :class="activateMsgType">
            {{ activateMsg }}
          </div>

          <div class="trial-row">
            <button class="trial-btn" :disabled="activating" @click="checkMemberThen(()=>startTrial())">
              ▸ 免费体验
            </button>
            <span class="trial-desc">无需 License，每日 {{ trialDailyLimit }} token 免费额度</span>
          </div>

          <div class="divider">──────────────────────────────────────</div>

          <div class="info-block">
            <p class="label">[ 会员等级 ]</p>
            <table class="tier-table">
              <tr v-for="(t, k) in tiers" :key="k">
                <td class="col-tier"><span :class="'tier-badge tier-' + k">{{ t.name }}</span></td>
                <td class="col-limit">{{ formatTokens(t.limit) }} tokens/月</td>
                <td class="col-price" v-if="t.price > 0">¥{{ t.price }}/月</td>
                <td class="col-price" v-else>免费</td>
                <td class="col-desc">{{ t.description || (k === 'free' ? '试用体验' : k === 'basic' ? '个人开发者' : k === 'pro' ? '专业团队' : '企业级') }}</td>
                <td class="col-action">
                  <button v-if="t.price>0" class="tier-buy-btn" @click="checkMemberThen(()=>{ showTierModal=true; confirmBuy(k,t) })">购买</button>
                  <span v-else class="tier-free-tag">当前</span>
                </td>
              </tr>
            </table>
          </div>

          <div class="divider">──────────────────────────────────────</div>

          <div class="info-block">
            <p class="label">[ 获取 License ]</p>
            <div class="activation-actions">
              <button class="buy-license-btn" @click="checkMemberThen(()=>showTierModal=true)">▸ 购买套餐</button>
              <button class="remote-config-btn" @click="showMasterKey = true">▸ 远程配置</button>
            </div>
            <p class="dim mt-sm">购买后 License 自动激活，无需手动输入密钥</p>
            <p class="dim">或联系客服：<span class="key">微信</span> machuangRJKF · <span class="key">邮箱</span> 2286369875@qq.com</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ==================== 聊天页 ==================== -->
    <div v-else class="chat-page">
      <!-- 顶部状态栏 -->
      <div class="status-bar">
        <div class="status-left">
          <span class="status-dot" />
          <span class="status-text">McdmAdmin AI v2.0</span>
          <span class="status-sep">|</span>
          <span class="status-text" :class="{ 'trial-badge': isTrial }">{{ isTrial ? '免费体验 · 每日' + trialDailyLimit + 'token' : '等级：' + (activationInfo.tier_name || '免费版') }}</span>
        </div>
        <div class="status-center">
          <span class="brand-tag">码创软件开发工作室</span>
          <template v-if="memberInfo">
            <span class="status-sep">|</span>
            <span class="member-tag" :style="isBanned?'color:#ff4444':''">👤 {{ memberInfo.username }} ID:{{ memberInfo.id }}</span>
            <span v-if="isBanned" class="status-sep">|</span>
            <span v-if="isBanned" class="member-tag" style="color:#ff4444">⚠已封禁</span>
            <span class="status-sep">|</span>
            <span class="member-tag">💰 ¥{{ (memberInfo.balance||0).toFixed(2) }}</span>
            <n-select v-model:value="activeTier" :options="tierOptions" size="tiny" style="width:110px;margin-left:4px" @update:value="switchTier" v-if="!isBanned" />
            <span class="status-sep">|</span>
            <button class="status-action-btn login-btn" @click="memberLogout">退出会员</button>
          </template>
          <button v-else class="status-action-btn login-btn" @click="goMemberLogin">会员登录</button>
        </div>
        <div class="status-right">
          <span class="status-text">用量：</span>
          <span class="quota-bar-wrap">
            <span class="quota-bar" :style="{ width: quota.pct + '%' }" :class="quotaWarnClass" />
          </span>
          <span class="status-text">{{ formatTokens(quota.used) }}/{{ formatTokens(quota.limit) }}</span>
          <span class="status-sep">|</span>
          <span class="status-text" :class="quotaWarnClass">{{ quota.pct }}%</span>
          <button class="status-action-btn buy-upgrade" @click="checkMemberThen(()=>openTierModal())">购买套餐</button>
          <button class="status-action-btn remote-cfg" @click="showMasterKey = true">远程配置</button>
        </div>
      </div>

      <!-- 聊天区 -->
      <div class="chat-area" ref="chatRef">
        <div v-if="messages.length === 0" class="welcome">
          <pre class="welcome-art">
  ███████╗██╗    ██╗██╗███████╗████████╗
  ██╔════╝██║    ██║██║██╔════╝╚══██╔══╝
  ███████╗██║ █╗ ██║██║█████╗     ██║
  ╚════██║██║███╗██║██║██╔══╝     ██║
  ███████║╚███╔███╔╝██║██║        ██║
  ╚══════╝ ╚══╝╚══╝ ╚═╝╚═╝        ╚═╝
          </pre>
          <p class="dim">▌ 码创AI开发引擎 v2.0 | ThinkPHP 6 · Vue3 · NaiveUI</p>
          <p class="dim">▌ 开发模式：AI 生成代码自动落盘 aisc/</p>
          <p class="dim">▌ 插件模式：生成完整模块 → 一键安装到系统（含数据库自动导入）</p>
          <div class="quick-tags">
            <span v-for="q in quickPrompts" :key="q.label" class="quick-tag" @click="askQuick(q.text)">{{ q.label }}</span>
          </div>

          <!-- 使用指南 -->
          <div class="guide-toggle" @click="showGuide = !showGuide">
            {{ showGuide ? '▾' : '▸' }} 使用指南
          </div>
          <div v-if="showGuide" class="guide-panel">
            <div class="guide-section">
              <div class="guide-title">▌ 第一步：获取 License</div>
              <p>联系<strong>「码创软件开发工作室」</strong>购买 License，支付完成后系统自动填入密钥、分配模型、开通额度。全程无需用户手动配置任何技术参数。</p>
              <p>当前为测试阶段，联系客服免费获取激活码：</p>
              <p><span class="key">邮箱：</span>2286369875@qq.com · <span class="key">微信：</span>machuangRJKF</p>
            </div>
            <div class="guide-section">
              <div class="guide-title">▌ 第二步：激活</div>
              <p>在激活页面输入 License 密钥，系统<strong>自动完成所有配置</strong>——AI 服务对接、模型选择、会员额度分配全部后台自动处理，无需任何手动操作。</p>
            </div>
            <div class="guide-section">
              <div class="guide-title">▌ 三种模式</div>
              <table class="guide-table">
                <tr><td class="g-col1">💬 问答</td><td>自由对话，AI 解答技术问题、提供开发建议，不会自动保存文件</td></tr>
                <tr><td class="g-col1">⚡ 开发</td><td>AI 自动生成完整代码（控制器+Vue页面+API+路由），自动保存到系统</td></tr>
                <tr><td class="g-col1">📦 插件</td><td>AI 生成完整插件模块（含数据库建表SQL），支持一键安装到系统</td></tr>
              </table>
            </div>
            <div class="guide-section">
              <div class="guide-title">▌ 一键安装（插件模式）</div>
              <p>① 选择「插件」模式，用自然语言描述你想要的插件功能</p>
              <p>② AI 自动生成所有文件并保存到系统</p>
              <p>③ 消息下方点击「▸ 一键安装到系统」，数据库自动建表、模块注册，即刻生效</p>
            </div>
            <div class="guide-section">
              <div class="guide-title">▌ Token 用量说明</div>
              <table class="guide-table">
                <tr><td class="g-col1">免费版</td><td>10万/月</td><td>试用体验</td></tr>
                <tr><td class="g-col1">基础版</td><td>100万/月</td><td>个人开发者</td></tr>
                <tr><td class="g-col1">专业版</td><td>500万/月</td><td>专业团队</td></tr>
                <tr><td class="g-col1">企业版</td><td>5000万/月</td><td>企业级不限</td></tr>
              </table>
              <p class="mt-sm"><strong>用量提醒：</strong>顶部状态栏实时显示当月用量。用量达到 <span class="warn-text">70% 黄色预警</span>，达到 <span class="danger-text">90% 红色警告</span>。<strong>额度用尽后 AI 自动停止响应</strong>，如需继续使用请联系「码创软件开发工作室」续费或升级会员等级。</p>
            </div>
            <div class="guide-section">
              <div class="guide-title">▌ 快捷键</div>
              <p><code>Enter</code> 发送 · <code>Shift+Enter</code> 换行 · <code>Ctrl+L</code> 清空对话</p>
            </div>
          </div>
        </div>

        <!-- 消息列表 -->
        <div v-for="(msg, i) in messages" :key="i" class="msg-row" :class="msg.role">
          <div class="msg-meta">
            <span class="msg-prompt">{{ msg.role === 'user' ? '我' : 'AI助手' }}</span>
            <span class="msg-time">{{ msg.time || '' }}</span>
          </div>
          <div class="msg-body">
            <div v-html="renderMarkdown(msg.content)" />

            <!-- 已保存文件摘要 -->
            <div v-if="msg.savedFiles && msg.savedFiles.length" class="saved-summary">
              <div class="saved-header">▌ 已自动保存 {{ msg.savedFiles.length }} 个文件到 aisc/</div>
              <div v-for="(f, fi) in msg.savedFiles" :key="fi" class="saved-file">
                <span class="saved-icon">✓</span>
                <span class="saved-path">aisc/{{ f.path }}</span>
                <button class="preview-btn" @click="previewFile(f)">预览</button>
              </div>
              <!-- 一键安装：插件模式且包含模块时显示 -->
              <div v-if="msg.installableModule" class="install-bar">
                <div class="install-info">
                  ⚡ 检测到插件模块：<strong>{{ msg.installableModule }}</strong>
                </div>
                <button
                  class="install-btn"
                  :disabled="installing === msg.installableModule"
                  @click="oneClickInstall(msg.installableModule, i)"
                >
                  {{ installing === msg.installableModule ? '▸ 安装中...' : '▸ 一键安装到系统' }}
                </button>
                <span v-if="installedModule === msg.installableModule" class="installed-ok">✓ 安装成功</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 加载中 -->
        <div v-if="sending" class="msg-row assistant">
          <div class="msg-meta"><span class="msg-prompt">AI助手</span></div>
          <div class="msg-body">
            <span class="loading-text">
              {{ mode === 'develop' ? '▸ 正在生成代码并自动保存...' : mode === 'plugin' ? '▸ 正在构建插件模块...' : '▸ 思考中...' }}
            </span>
            <span class="cursor-blink">█</span>
          </div>
        </div>
      </div>

      <!-- 底部输入区 -->
      <div class="input-bar">
        <div class="mode-row">
          <span class="mode-label">模式：</span>
          <button :class="['mode-btn', { active: mode === 'chat' }]" @click="mode = 'chat'">问答</button>
          <button :class="['mode-btn', { active: mode === 'develop' }]" @click="mode = 'develop'">开发</button>
          <button :class="['mode-btn', { active: mode === 'plugin' }]" @click="mode = 'plugin'">插件</button>
          <span class="mode-desc">{{ modeDesc }}</span>
          <div class="mode-right">
            <button class="action-btn" :disabled="messages.length === 0" @click="clearChat">清空</button>
          </div>
        </div>
        <div class="input-row">
          <span class="prompt">$</span>
          <input
            ref="inputRef"
            v-model="input"
            class="cmd-input"
            :placeholder="inputPlaceholder"
            :disabled="sending"
            @keydown="handleKeydown"
          />
          <button class="send-btn" :disabled="!input.trim() || sending || isBanned" @click="bannedSend">{{ isBanned ? '已封禁' : '执行' }}</button>
        </div>
      </div>
    </div>

    <!-- ==================== 文件预览弹窗 ==================== -->
    <n-modal v-model:show="previewShow" title="文件预览" preset="card" style="width: 700px;">
      <template #header>
        <span style="color: #00ff41; font-family: monospace;">▌ {{ previewPath }}</span>
      </template>
      <pre class="preview-content">{{ previewContent }}</pre>
      <template #footer>
        <n-space justify="end">
          <n-button @click="previewShow = false">关闭</n-button>
          <n-button type="primary" @click="copyCode(previewContent)">复制</n-button>
        </n-space>
      </template>
    </n-modal>

    <!-- ==================== 主密钥弹窗 ==================== -->
    <n-modal v-model:show="showMasterKey" title="▌ 主密钥配置" preset="card" style="width: 460px;">
      <template #header>
        <span style="color: #00ff41; font-family: monospace;">▌ 主密钥配置（仅管理员）</span>
      </template>
      <n-form label-placement="left" label-width="70">
        <n-form-item label="接口地址">
          <n-input v-model:value="masterForm.api_url" placeholder="由码创软件开发工作室提供的接口地址" />
        </n-form-item>
        <n-form-item label="API密钥">
          <n-input v-model:value="masterForm.api_key" type="password" placeholder="sk-..." />
        </n-form-item>
      </n-form>
      <template #footer>
        <n-space justify="end">
          <n-button @click="showMasterKey = false">取消</n-button>
          <n-button type="primary" :loading="savingMaster" @click="handleSaveMaster">保存</n-button>
        </n-space>
      </template>
    </n-modal>
  </div>

  <!-- 套餐购买弹窗 -->
  <n-modal v-model:show="showTierModal" title="AI 套餐购买" preset="card" style="width:600px">
    <n-grid :cols="2" :x-gap="12" :y-gap="12" v-if="!buyConfirm">
      <n-grid-item v-for="(t,k) in tiers" :key="k">
        <n-card size="small" :class="'tier-card'+(k===currentTier?' tier-current':'')">
          <template #header><strong style="color:#8b5cf6">{{ t.name }}</strong></template>
          <div style="text-align:center">
            <div style="font-size:22px;font-weight:700;color:#18a058">{{ t.price>0?'¥'+t.price:'免费' }}<span style="font-size:12px;color:#999">{{ t.price>0?'/月':'' }}</span></div>
            <div style="color:#666;margin:4px 0">{{ formatTokens(t.limit) }} tokens/月</div>
          </div>
          <template #footer>
            <n-button v-if="k===currentTier" type="info" block size="small" disabled>当前使用</n-button>
            <n-button v-else-if="subList.some((s:any)=>s.level_name===t.name)" type="success" block size="small" disabled>已购买</n-button>
            <n-button v-else type="warning" block size="small" @click="confirmBuy(k,t)">购买 ¥{{ t.price||0 }}</n-button>
          </template>
        </n-card>
      </n-grid-item>
    </n-grid>
    <div v-else-if="!buySuccess" style="padding:16px">
      <n-descriptions bordered :column="1" size="small">
        <n-descriptions-item label="套餐">{{ buyTarget?.name }}</n-descriptions-item>
        <n-descriptions-item label="价格">¥{{ buyTarget?.price||0 }}/月</n-descriptions-item>
        <n-descriptions-item label="额度">{{ formatTokens(buyTarget?.limit||0) }} tokens/月</n-descriptions-item>
      </n-descriptions>
      <n-divider />
      <n-form label-width="80" size="small">
        <n-form-item label="支付方式">
          <n-radio-group v-model:value="buyPayChannel">
            <n-radio value="balance">💰 余额支付</n-radio>
            <n-radio value="alipay">📱 支付宝</n-radio>
            <n-radio value="wechat">💬 微信</n-radio>
          </n-radio-group>
        </n-form-item>
      </n-form>
      <n-space justify="end" class="mt-4">
        <n-button size="small" @click="buyConfirm=false;showTierModal=true">返回</n-button>
        <n-button type="primary" size="small" :loading="buyingTier!==''" @click="buyTierNow(buyTargetKey, buyTarget)">确认支付 ¥{{ buyTarget?.price||0 }}</n-button>
      </n-space>
    </div>
    <div v-else style="text-align:center;padding:20px">
      <n-result status="success" title="购买成功！" :description="'已激活 '+buySuccessName" />
      <p style="font-size:20px;color:#18a058;margin:16px 0">{{ countdown }} 秒后自动进入AI聊天</p>
      <n-button type="primary" @click="reloadPage">立即进入</n-button>
    </div>
  </n-modal>

  <!-- 封禁提示弹窗 -->
  <n-modal v-model:show="showBanModal" title="账号已被封禁" preset="card" style="width:420px" :mask-closable="false">
    <n-result status="error" title="你已违规，请联系管理员" :description="'封禁原因：'+(banInfo||'违规')">
      <template #footer>
        <n-button type="primary" @click="showBanModal=false">知道了</n-button>
        <n-button @click="()=>{ localStorage.removeItem('token'); window.location.href='https://www.mcdmadmin.cn/member' }">返回会员中心</n-button>
      </template>
    </n-result>
  </n-modal>
</template>

<script setup lang="ts">
import { ref, computed, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { useMessage } from 'naive-ui'
import { aiChatApi, aiConfigApi, aiActivateApi, aiSetupMasterKeyApi, aiSaveFileApi } from '@/api/ai'
import { installFromAiscApi } from '@/api/module'

const message = useMessage()

// 会员模式：URL带m_token时，临时替换localStorage token，离开时恢复
const memberToken = ref(localStorage.getItem('m_token') || '')
if (memberToken.value) { localStorage.setItem('token', memberToken.value) }
const memberInfo = ref<any>(null)
const activeTier = ref('')
const tierOptions = ref<any[]>([])
const subList = ref<any[]>([])
if (memberToken) {
  localStorage.setItem('token', memberToken)
  fetch('/admin/member_api/profile', { headers: { Authorization: 'Bearer ' + memberToken.value } })
    .then(r => r.json()).then(d => {
      const u = d.data?.user || null; memberInfo.value = u
      if(u) { activeTier.value = u.level_name || '免费版'; isBanned.value = !!u.is_banned; banInfo.value = u.ban_reason || '' }
    }).catch(() => {})
  fetch('/admin/member_api/subscriptions', { headers: { Authorization: 'Bearer ' + memberToken.value } })
    .then(r => r.json()).then(d => {
      subList.value = (d.data?.list || []).filter((s:any) => s.status === 'active')
      tierOptions.value = subList.value.map((s:any) => ({ label: s.level_name, value: s.level_name }))
    }).catch(() => {})
}
function switchTier(name: string) {
  const sub = subList.value.find((s:any) => s.level_name === name)
  if (sub) {
    fetch('/admin/member_api/switch-tier', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + memberToken.value }, body: JSON.stringify({ subscription_id: sub.id }) })
      .then(r => r.json()).then(d => { if (d.code === 0) { memberInfo.value.level_name = name; activeTier.value = name; loadConfig() } }).catch(() => {})
  }
}

// ─── 激活 ────────────────────────────────
const activated = ref(false)
const isTrial = ref(false)
const trialDailyLimit = ref(10)
const activating = ref(false)
const licenseKey = ref('')
const activateMsg = ref('')
const activateMsgType = ref<'success' | 'error'>('error')
const activationInfo = ref<any>({})
const tiers = ref<Record<string, { name: string; limit: number }>>({})

// ─── 配额 ────────────────────────────────
const quota = ref({ pct: 0, used: 0, limit: 100000, remaining: 100000 })

// ─── 聊天 ────────────────────────────────
const input = ref('')
const sending = ref(false)
const showGuide = ref(false)
const mode = ref('chat')
const messages = ref<{ role: string; content: string; time?: string; savedFiles?: { path: string; content: string }[] }[]>([])
const chatRef = ref<any>()
const inputRef = ref<any>()

// ─── 预览 ────────────────────────────────
const previewShow = ref(false)
const previewPath = ref('')
const previewContent = ref('')

// ─── 一键安装 ────────────────────────────
const installing = ref('')
const installedModule = ref('')

// ─── 主密钥 ──────────────────────────────
const hasMaster = ref<boolean | null>(null)
const showMasterKey = ref(false)
const savingMaster = ref(false)
const masterForm = ref({ api_url: '', api_key: '' })

// ─── 计算属性 ────────────────────────────
const quotaWarnClass = computed(() => quota.value.pct > 90 ? 'danger' : quota.value.pct > 70 ? 'warn' : '')

const modeDesc = computed(() => {
  if (mode.value === 'develop') return '// AI 自动生成完整代码并保存到 aisc/'
  if (mode.value === 'plugin') return '// AI 自动构建插件模块并保存全部文件'
  return '// 自由问答，不会自动保存文件'
})

const quickPrompts = computed(() => {
  if (mode.value === 'develop') return [
    { label: '生成CRUD', text: '为 orders 表（id, order_no, user_id, amount, status, create_time）生成完整CRUD后台管理' },
    { label: '生成API', text: '创建用户余额查询、充值记录的API接口，路径 /api/v1/balance' },
    { label: '生成看板', text: '生成带 ECharts 图表的统计看板，包含用户增长趋势和订单统计' },
  ]
  if (mode.value === 'plugin') return [
    { label: '支付模块', text: '设计支付模块插件（modules/payment），支持支付宝和微信支付，包含安装SQL和配置页' },
    { label: 'CMS模块', text: '创建CMS内容管理模块，文章分类+列表+富文本编辑+前台展示' },
    { label: '积分商城', text: '创建积分商城模块，商品列表+兑换记录+积分管理+前台页面' },
  ]
  return [
    { label: '能力介绍', text: '你好，请介绍一下你能帮我做什么' },
    { label: '框架架构', text: 'McdmAdmin 的路由注册和数据库操作方式是怎样的？' },
    { label: '开发流程', text: '给框架添加一个新功能页面需要哪些步骤？' },
  ]
})

const inputPlaceholder = computed(() => {
  if (mode.value === 'develop') return '描述功能需求，AI 自动生成代码并保存到 aisc/ ...'
  if (mode.value === 'plugin') return '描述插件需求，AI 自动构建模块并保存全部文件...'
  return '输入内容，Enter 执行，Shift+Enter 换行'
})

// ─── 格式化 ──────────────────────────────
function formatTokens(n: number) {
  if (n >= 100000000) return (n / 100000000).toFixed(1) + '亿'
  if (n >= 10000) return (n / 10000).toFixed(1) + '万'
  return n.toLocaleString()
}

// 解析 ```lang:path  格式的代码块
function parseCodeBlocks(text: string) {
  const blocks: { lang: string; path: string; content: string }[] = []
  const re = /```(\w+)(?::([^\n]+))?\s*\n([\s\S]*?)```/g
  let m: RegExpExecArray | null
  while ((m = re.exec(text)) !== null) {
    blocks.push({ lang: m[1] || '', path: (m[2] || '').trim(), content: m[3] })
  }
  return blocks
}

function renderMarkdown(text: string) {
  return text
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/```(\w+)(?::([^\n]+))?\s*\n([\s\S]*?)```/g,
      (_: string, lang: string, _path: string, code: string) =>
        `<pre class="code-block"><span class="code-lang">// ${lang || 'code'}${_path ? ' → aisc/' + _path : ''}</span>\n${code}</pre>`)
    .replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>')
}

// ─── 加载配置 ────────────────────────────
async function loadConfig() {
  try {
    const res = await aiConfigApi()
    const d = res.data
    activated.value = d.activated || false
    isTrial.value = d.is_trial ?? false
    activationInfo.value = {
      tier: d.tier, tier_name: d.tier_name, expiry: d.expiry,
      expiry_at: d.expiry_at, domain: d.domain, brand: d.brand,
    }
    quota.value = {
      pct: d.quota?.pct || 0, used: d.quota?.used || 0,
      limit: d.quota?.limit || trialDailyLimit.value, remaining: d.quota?.remaining || trialDailyLimit.value,
    }
    tiers.value = d.tiers || {}
    hasMaster.value = d.has_master ?? false
  } catch {}
}

// ─── 激活 ────────────────────────────────
async function handleActivate() {
  const key = licenseKey.value.trim()
  if (!key) { activateMsg.value = '请输入 License 密钥'; activateMsgType.value = 'error'; return }
  activating.value = true
  activateMsg.value = ''
  try {
    await aiActivateApi(key)
    activateMsg.value = '✓ 激活成功 — 欢迎使用 McdmAdmin AI 开发平台'
    activateMsgType.value = 'success'
    setTimeout(() => loadConfig(), 800)
  } catch (e: any) {
    activateMsg.value = e?.response?.data?.msg || '✗ 激活失败，请检查密钥是否正确'
    activateMsgType.value = 'error'
  } finally { activating.value = false }
}

const memberAuthTab = ref('login')
const memberAuthLoading = ref(false)
const memberAuthMsg = ref('')
const memberAuthMsgType = ref<'success'|'error'>('error')
const memberCaptcha = ref('/admin/captcha?'+Date.now())
function refreshMemberCaptcha(){ memberCaptcha.value='/admin/captcha?'+Date.now() }
const mloginForm = reactive({ username: '', password: '', captcha: '' })
const mregForm = reactive({ username: '', password: '', rePass: '', mobile: '', email: '', captcha: '' })

function _validEmail(e:string){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) }
function _validMobile(m:string){ return /^1[3-9]\d{9}$/.test(m) }
function _showErr(m:string){ memberAuthMsg.value=m; memberAuthMsgType.value='error' }

async function doMemberLogin() {
  if(!mloginForm.username.trim()){ _showErr('请输入用户名'); return }
  if(!mloginForm.password){ _showErr('请输入密码'); return }
  if(!mloginForm.captcha||!mloginForm.captcha.trim()){ _showErr('请输入验证码'); return }
  memberAuthLoading.value=true; memberAuthMsg.value=''
  try {
    const r = await fetch('/admin/member_api/login', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(mloginForm) }).then(r=>r.json())
    if(r.code!==0){ _showErr(r.msg||'登录失败'); memberAuthLoading.value=false; return }
    localStorage.setItem('token', r.data.token)
    memberAuthMsg.value='登录成功，加载中...'; memberAuthMsgType.value='success'
    localStorage.setItem('m_token', r.data.token)
    setTimeout(()=>{ window.location.reload() }, 500)
  } catch(e:any){ _showErr('网络错误') }
  memberAuthLoading.value=false
}

async function doMemberRegister() {
  const u=mregForm.username.trim()
  if(!u){ _showErr('请输入用户名'); return }
  if(u.length<2||u.length>20){ _showErr('用户名2-20个字符'); return }
  if(!/^[a-zA-Z0-9_一-龥]+$/.test(u)){ _showErr('用户名只允许字母数字下划线和中文'); return }
  if(!mregForm.password){ _showErr('请输入密码'); return }
  if(mregForm.password.length<6){ _showErr('密码至少6位'); return }
  if(mregForm.password!==mregForm.rePass){ _showErr('两次密码不一致'); return }
  if(mregForm.mobile&&!/^1[3-9]\d{9}$/.test(mregForm.mobile)){ _showErr('手机号格式不正确'); return }
  if(mregForm.email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mregForm.email)){ _showErr('邮箱格式不正确'); return }
  if(!mregForm.captcha||!mregForm.captcha.trim()){ _showErr('请输入验证码'); return }
  memberAuthLoading.value=true; memberAuthMsg.value=''
  try {
    const r = await fetch('/admin/member_api/register', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(mregForm) }).then(r=>r.json())
    if(r.code!==0){ _showErr(r.msg||'注册失败'); memberAuthLoading.value=false; return }
    localStorage.setItem('token', r.data.token)
    memberAuthMsg.value='注册成功，正在激活免费体验...'; memberAuthMsgType.value='success'
    localStorage.setItem('m_token', r.data.token)
    setTimeout(()=>{ window.location.reload() }, 800)
  } catch(e:any){ _showErr('网络错误') }
  memberAuthLoading.value=false
}

function goMemberLogin(){ window.location.href='https://www.mcdmadmin.cn/member' }
function memberLogout(){ localStorage.removeItem('m_token'); window.location.reload() }
const showBanModal = ref(false)
function bannedSend() { if(isBanned.value) { showBanModal.value = true; return }; send() }
const showTierModal = ref(false)
function openTierModal() {
  showTierModal.value = true
  // 刷新订阅数据确保"已购买"状态正确
  if(memberToken.value) {
    fetch('/admin/member_api/subscriptions', { headers: { Authorization: 'Bearer ' + memberToken.value } })
      .then(r => r.json()).then(d => {
        subList.value = (d.data?.list || []).filter((s:any) => s.status === 'active')
        tierOptions.value = subList.value.map((s:any) => ({ label: s.level_name, value: s.level_name }))
      }).catch(() => {})
  }
}
const buyConfirm = ref(false)
const buyTarget = ref<any>(null)
const buyTargetKey = ref('')
const buyPayChannel = ref('balance')
const buySuccess = ref(false)
const buySuccessName = ref('')
const buyingTier = ref('')
const countdown = ref(3)
let countdownTimer: any = null

function confirmBuy(key: string, tier: any) { buyTargetKey.value=key; buyTarget.value=tier; buyPayChannel.value='balance'; buyConfirm.value=true }
async function buyTierNow(key: string, tier: any) {
  buyingTier.value = key
  try {
    const mid = memberInfo.value?.id || 0
    const r = await fetch('/admin/ai/order', { method:'POST', headers:{'Content-Type':'application/json','Authorization':'Bearer '+memberToken}, body:JSON.stringify({tier:key,channel:buyPayChannel.value,member_id:mid}) }).then(r=>r.json())
    if(r.code!==0) { message.error(r.msg||'购买失败'); buyingTier.value=''; return }
    if(buyPayChannel.value==='balance') {
      buySuccess.value = true; buySuccessName.value = tier.name; countdown.value = 3
      countdownTimer = setInterval(()=>{ countdown.value--; if(countdown.value<=0){ clearInterval(countdownTimer); reloadPage() } }, 1000)
    } else {
      const d = r.data||r
      const params = new URLSearchParams({ order_no:d.order_no, amount:String(tier.price||0), subject:'McdmAdmin AI '+tier.name, channel:buyPayChannel.value, site:window.location.hostname, return_url:window.location.origin+'/#/ai?m_token='+memberToken, product_type:'ai_tier', product_id:key })
      window.location.href = 'https://www.mcdmadmin.cn/api/pay?'+params.toString()
    }
  } catch(e) { message.error('购买失败') }
  buyingTier.value = ''
}
function reloadPage() { clearInterval(countdownTimer); window.location.reload() }

function checkMemberThen(fn: Function) {
  if (!memberToken.value) { memberAuthTab.value = 'login'; return }
  fn()
}
function startTrial() {
  isTrial.value = true
  activated.value = true
  quota.value = { pct: 0, used: 0, limit: trialDailyLimit.value, remaining: trialDailyLimit.value }
  // 保存试用激活到后端，刷新后不会回到激活页
  fetch('/admin/ai/trial', { method:'POST', headers:{'Authorization':'Bearer '+memberToken.value} }).catch(()=>{})
}

// ─── 聊天 + 自动保存 ─────────────────────
function scrollBottom() {
  nextTick(() => { if (chatRef.value) chatRef.value.scrollTop = 99999 })
}

function askQuick(text: string) { input.value = text; send() }

async function copyCode(text: string) {
  try { await navigator.clipboard.writeText(text); message.success('已复制') }
  catch { message.warning('复制失败') }
}

function previewFile(f: { path: string; content: string }) {
  previewPath.value = 'aisc/' + f.path
  previewContent.value = f.content
  previewShow.value = true
}

// 从保存路径中检测模块名（如 modules/payment/manifest.json → payment）
function detectModule(savedFiles: { path: string }[]) {
  for (const f of savedFiles) {
    const m = f.path.match(/^modules\/([^/]+)\//)
    if (m) return m[1]
  }
  return null
}

// 一键安装
async function oneClickInstall(moduleName: string, msgIndex: number) {
  installing.value = moduleName
  try {
    await installFromAiscApi(moduleName)
    installedModule.value = moduleName
    message.success(`插件「${moduleName}」已安装到系统`)
    // 刷新配额
    await loadConfig()
  } catch (e: any) {
    message.error(e?.response?.data?.msg || '安装失败')
  } finally {
    installing.value = ''
  }
}

// 自动保存所有带路径的代码块
async function autoSaveBlocks(text: string) {
  const blocks = parseCodeBlocks(text)
  const saved: { path: string; content: string }[] = []
  for (const b of blocks) {
    if (!b.path) continue
    try {
      await aiSaveFileApi(b.path, b.content)
      saved.push({ path: b.path, content: b.content })
    } catch (e: any) {
      console.error('保存失败:', b.path, e)
    }
  }
  return saved
}

async function send() {
  const text = input.value.trim()
  if (!text || sending.value) return
  const now = new Date().toLocaleTimeString()
  messages.value.push({ role: 'user', content: text, time: now })
  input.value = ''
  scrollBottom()
  sending.value = true
  try {
    const res = await aiChatApi(messages.value, mode.value)
    const reply = res.data.reply || ''
    const now2 = new Date().toLocaleTimeString()

    // 开发/插件模式：自动解析并保存代码
    let savedFiles: { path: string; content: string }[] = []
    if (mode.value === 'develop' || mode.value === 'plugin') {
      savedFiles = await autoSaveBlocks(reply)
    }

    messages.value.push({ role: 'assistant', content: reply, time: now2, savedFiles, installableModule: detectModule(savedFiles) })
    if (res.data.quota) quota.value = res.data.quota

    if (savedFiles.length) {
      message.success(`已自动保存 ${savedFiles.length} 个文件到 aisc/`)
    }
  } catch (e: any) {
    messages.value.push({ role: 'assistant', content: '[!] ' + (e?.response?.data?.msg || '请求失败'), time: new Date().toLocaleTimeString() })
  } finally { sending.value = false; scrollBottom() }
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); bannedSend() }
  if (e.key === 'l' && e.ctrlKey) { e.preventDefault(); clearChat() }
}

function clearChat() { messages.value = [] }

// ─── 主密钥 ──────────────────────────────
async function handleSaveMaster() {
  savingMaster.value = true
  try {
    await aiSetupMasterKeyApi({ api_url: masterForm.value.api_url, api_key: masterForm.value.api_key })
    message.success('主密钥已部署，用户激活后将自动调用')
    showMasterKey.value = false
    await loadConfig()
  } catch (e: any) { message.error(e?.response?.data?.msg || '部署失败') }
  finally { savingMaster.value = false }
}

const isBanned = ref(false)
const banInfo = ref('')
let banCheckTimer: any = null
onBeforeUnmount(()=>{ if(banCheckTimer) clearInterval(banCheckTimer) })
onMounted(()=>{
  loadConfig()
  if(memberToken.value) {
    banCheckTimer = setInterval(async () => {
      try {
        const r = await fetch('/admin/member_api/status', { headers: { Authorization: 'Bearer ' + memberToken.value } }).then(r=>r.json())
        if(r.code!==0 && (r.msg||'').includes('违规')) { isBanned.value = true; banInfo.value = r.data?.ban_reason || r.msg }
        else { isBanned.value = false; banInfo.value = '' }
      } catch(e) {}
    }, 30000)
  }
})
</script>

<style scoped>
/* ========== 基础 ========== */
.terminal-root {
  height: calc(100vh - 200px);
  background: #0a0a0a;
  color: #00ff41;
  font-family: 'Courier New', 'Consolas', 'Microsoft YaHei', monospace;
  position: relative;
  overflow: hidden;
}
.scanlines {
  position: absolute; inset: 0; pointer-events: none; z-index: 10;
  background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,.15) 2px, rgba(0,0,0,.15) 4px);
}

/* ========== 激活页 ========== */
.activate-page { height: 100%; overflow-y: auto; padding: 20px; display: flex; justify-content: center; align-items: flex-start; }
.terminal-card { width: 100%; max-width: 560px; border: 1px solid #1a3a1a; border-radius: 6px; background: #0d0d0d; overflow: hidden; }
.terminal-header { display: flex; align-items: center; gap: 6px; padding: 8px 12px; background: #111; border-bottom: 1px solid #1a3a1a; }
.dot { width: 10px; height: 10px; border-radius: 50%; }
.dot.red { background: #ff5f56; } .dot.yellow { background: #ffbd2e; } .dot.green { background: #27c93f; }
.header-title { font-size: 11px; color: #666; margin-left: 8px; }
.terminal-body { padding: 20px 24px; }
.ascii-logo { color: #00ff41; font-size: 11px; line-height: 1.3; margin: 0 0 8px; }
.brand-line { color: #00cc33; font-size: 14px; text-align: center; }
.divider { color: #1a3a1a; font-size: 12px; margin: 12px 0; text-align: center; }
.prompt-line { display: flex; align-items: center; gap: 4px; margin: 8px 0; }
.prompt { color: #00ff41; white-space: nowrap; }
.terminal-input { flex: 1; background: transparent; border: none; color: #fff; font: inherit; font-size: 14px; outline: none; caret-color: #00ff41; }
.terminal-input::placeholder { color: #333; }
.cursor-blink { animation: blink 1s infinite; }
@keyframes blink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }
.msg-line { padding: 8px 0; font-size: 13px; }
.msg-line.success { color: #00ff41; }
.msg-line.error { color: #ff4444; }
.info-block { font-size: 12px; line-height: 1.8; }
.label { color: #00ff41; font-weight: bold; }
.key { color: #00cc33; }
.dim { color: #555; }
.mt { margin-top: 8px; }

/* 免费体验按钮 */
.trial-row { display: flex; align-items: center; gap: 10px; margin: 8px 0; }
.trial-btn {
  background: #0d2818; border: 1px solid #ffaa00; color: #ffaa00;
  font: inherit; font-size: 13px; padding: 6px 20px; border-radius: 4px;
  cursor: pointer; transition: all .2s;
}
.trial-btn:hover:not(:disabled) { background: #ffaa00; color: #000; }
.trial-btn:disabled { opacity: 0.3; }
.trial-desc { color: #555; font-size: 11px; }
.trial-badge { color: #ffaa00 !important; }
.tier-table { width: 100%; border-collapse: collapse; margin: 4px 0; }
.tier-table td { padding: 4px 6px; font-size: 12px; }
.col-tier { width: 70px; } .col-limit { width: 105px; color: #aaa; } .col-price { width: 75px; color: #ffaa00; font-weight: bold; }
.col-desc { color: #555; } .col-action { width: 55px; text-align: right; }
.tier-buy-btn {
  background: #1a3a0d; border: 1px solid #ffaa00; color: #ffaa00;
  font: inherit; font-size: 11px; padding: 2px 10px; border-radius: 3px;
  cursor: pointer; transition: all .2s;
}
.tier-buy-btn:hover { background: #ffaa00; color: #000; }
.tier-free-tag { color: #333; font-size: 11px; }
.tier-badge { padding: 2px 6px; border-radius: 3px; font-size: 11px; }
.tier-free { color: #888; border: 1px solid #333; }
.tier-basic { color: #00ccff; border: 1px solid #006688; }
.tier-pro { color: #00ff41; border: 1px solid #008833; }
.tier-enterprise { color: #ffaa00; border: 1px solid #886600; }

/* ========== 聊天页 ========== */
.chat-page { height: 100%; display: flex; flex-direction: column; }

/* 状态栏 */
.status-bar { display: flex; align-items: center; justify-content: space-between; padding: 4px 12px; background: #0d0d0d; border-bottom: 1px solid #1a3a1a; font-size: 11px; flex-shrink: 0; gap: 8px; }
.status-left, .status-center, .status-right { display: flex; align-items: center; gap: 6px; }
.status-dot { width: 6px; height: 6px; border-radius: 50%; background: #00ff41; box-shadow: 0 0 4px #00ff41; }
.status-text { color: #888; }
.status-sep { color: #333; }
.brand-tag { color: #00cc33; font-weight: bold; }
.member-tag { color: #00ccff; font-size:12px; }
.quota-bar-wrap { width: 80px; height: 8px; background: #1a1a1a; border-radius: 4px; display: inline-block; overflow: hidden; border: 1px solid #333; }
.quota-bar { height: 100%; background: #00ff41; transition: width .5s; }
.quota-bar.warn { background: #ffaa00; }
.quota-bar.danger { background: #ff4444; }
.master-btn { background: none; border: 1px solid #333; color: #666; cursor: pointer; font-size: 11px; padding: 1px 6px; border-radius: 3px; font-family: inherit; }
.master-btn:hover { color: #00ff41; border-color: #00ff41; }

/* 状态栏操作按钮 */
.status-action-btn {
  background: none; border: 1px solid #333; cursor: pointer;
  font-size: 11px; padding: 1px 8px; border-radius: 3px; font-family: inherit;
  transition: all .2s;
}
.status-action-btn.buy-upgrade { color: #ffaa00; border-color: #886600; }
.status-action-btn.buy-upgrade:hover { background: #ffaa00; color: #000; border-color: #ffaa00; }
.status-action-btn.login-btn { color: #4a9eff; border-color: #2a5a9e; font-size: 11px; padding: 2px 10px; }
.status-action-btn.login-btn:hover { background: #4a9eff; color: #000; border-color: #4a9eff; }
.status-action-btn.remote-cfg { color: #666; }
.status-action-btn.remote-cfg:hover { color: #00ff41; border-color: #00ff41; }

/* 激活页操作按钮 */
.activation-actions { display: flex; gap: 10px; margin: 6px 0 10px; }
.buy-license-btn {
  background: #1a3a0d; border: 1px solid #ffaa00; color: #ffaa00;
  font: inherit; font-size: 13px; padding: 6px 20px; border-radius: 4px;
  cursor: pointer; transition: all .2s;
}
.buy-license-btn:hover { background: #ffaa00; color: #000; }
.remote-config-btn {
  background: none; border: 1px solid #333; color: #888;
  font: inherit; font-size: 13px; padding: 6px 20px; border-radius: 4px;
  cursor: pointer; transition: all .2s;
}
.remote-config-btn:hover { color: #00ff41; border-color: #00ff41; }
.mt-sm { margin-top: 6px; }

/* 聊天区 */
.chat-area { flex: 1; overflow-y: auto; padding: 16px; }
.chat-area::-webkit-scrollbar { width: 4px; }
.chat-area::-webkit-scrollbar-thumb { background: #1a3a1a; }
.welcome { text-align: center; padding: 20px 0; }
.welcome-art { color: #00ff41; font-size: 10px; line-height: 1.2; margin: 0; }
.quick-tags { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-top: 16px; }
.quick-tag { padding: 4px 12px; border: 1px solid #1a3a1a; border-radius: 3px; color: #00cc33; font-size: 12px; cursor: pointer; transition: all .2s; }
.quick-tag:hover { background: #0d2818; border-color: #00ff41; }

/* 使用指南 */
.guide-toggle { color: #555; font-size: 12px; cursor: pointer; margin-top: 20px; text-align: center; transition: color .2s; }
.guide-toggle:hover { color: #00ff41; }
.guide-panel { margin-top: 14px; padding: 16px 20px; border: 1px solid #1a3a1a; border-radius: 6px; background: #0a100a; text-align: left; }
.guide-section { margin-bottom: 14px; }
.guide-section:last-child { margin-bottom: 0; }
.guide-title { color: #00ff41; font-size: 13px; margin-bottom: 6px; }
.guide-section p { color: #888; font-size: 12px; line-height: 1.8; margin: 2px 0; }
.guide-section strong { color: #00cc33; }
.guide-section code { background: #0d2818; color: #00ff41; padding: 1px 6px; border-radius: 3px; font-size: 11px; }
.guide-table { width: 100%; border-collapse: collapse; }
.guide-table td { padding: 3px 0; color: #888; font-size: 12px; line-height: 1.8; }
.g-col1 { width: 70px; color: #00ff41 !important; }
.warn-text { color: #ffaa00; }
.danger-text { color: #ff4444; }
.mt-sm { margin-top: 6px; }

/* 消息 */
.msg-row { margin-bottom: 14px; }
.msg-row.user .msg-meta { color: #0088cc; }
.msg-row.assistant .msg-meta { color: #00ff41; }
.msg-meta { font-size: 11px; margin-bottom: 2px; display: flex; gap: 8px; }
.msg-time { color: #444; }
.msg-body { font-size: 13px; line-height: 1.7; color: #ccc; }
.loading-text { color: #00ff41; }

/* 代码块 */
:deep(.code-block) { background: #0d1117; border: 1px solid #1a3a1a; border-radius: 4px; padding: 12px; margin: 8px 0; color: #00cc33; font-size: 12px; overflow-x: auto; white-space: pre; font-family: 'Courier New', monospace; }
:deep(.code-lang) { color: #555; font-size: 11px; }
:deep(.inline-code) { background: #0d2818; color: #00ff41; padding: 1px 5px; border-radius: 3px; font-size: 12px; }
:deep(strong) { color: #fff; }

/* 已保存文件摘要 */
.saved-summary { margin-top: 10px; border: 1px solid #00ff41; border-radius: 4px; background: #0d1a0d; overflow: hidden; }
.saved-header { padding: 6px 10px; background: #0d2818; color: #00ff41; font-size: 12px; border-bottom: 1px solid #1a3a1a; }
.saved-file { display: flex; align-items: center; gap: 8px; padding: 5px 10px; font-size: 12px; border-bottom: 1px solid #111; }
.saved-file:last-child { border-bottom: none; }
.saved-icon { color: #00ff41; }
.saved-path { color: #00cc33; flex: 1; }
.preview-btn { background: none; border: 1px solid #1a3a1a; color: #888; font: inherit; font-size: 11px; padding: 2px 8px; border-radius: 3px; cursor: pointer; }
.preview-btn:hover { color: #00ff41; border-color: #00ff41; }

/* 一键安装 */
.install-bar { display: flex; align-items: center; gap: 12px; padding: 8px 12px; background: #0d1a0d; border-top: 1px solid #1a3a1a; }
.install-info { color: #ffaa00; font-size: 12px; flex: 1; }
.install-info strong { color: #ffcc00; }
.install-btn { background: #1a3a0d; border: 1px solid #00ff41; color: #00ff41; font: inherit; font-size: 12px; padding: 4px 16px; border-radius: 3px; cursor: pointer; transition: all .2s; }
.install-btn:hover:not(:disabled) { background: #00ff41; color: #000; }
.install-btn:disabled { opacity: 0.5; }
.installed-ok { color: #00ff41; font-size: 12px; }

/* 预览弹窗 */
.preview-content { background: #0d1117; color: #00cc33; padding: 16px; border-radius: 4px; font-size: 12px; max-height: 500px; overflow: auto; white-space: pre; font-family: 'Courier New', monospace; border: 1px solid #1a3a1a; }

/* 输入栏 */
.input-bar { flex-shrink: 0; border-top: 1px solid #1a3a1a; background: #0d0d0d; padding: 8px 12px; }
.mode-row { display: flex; align-items: center; gap: 6px; margin-bottom: 6px; }
.mode-label { color: #555; font-size: 11px; }
.mode-btn { background: none; border: 1px solid #333; color: #666; font: inherit; font-size: 11px; padding: 2px 10px; border-radius: 3px; cursor: pointer; }
.mode-btn:hover { color: #00ff41; border-color: #555; }
.mode-btn.active { color: #00ff41; border-color: #00ff41; background: #0d2818; }
.mode-desc { color: #444; font-size: 10px; margin-left: 8px; }
.mode-right { margin-left: auto; }
.action-btn { background: none; border: 1px solid #333; color: #666; font: inherit; font-size: 11px; padding: 2px 8px; border-radius: 3px; cursor: pointer; }
.action-btn:hover:not(:disabled) { color: #ff4444; border-color: #ff4444; }
.action-btn:disabled { opacity: 0.3; }
.input-row { display: flex; align-items: center; gap: 8px; }
.cmd-input { flex: 1; background: transparent; border: none; color: #fff; font: inherit; font-size: 13px; outline: none; caret-color: #00ff41; }
.cmd-input::placeholder { color: #333; }
.send-btn { background: #0d2818; border: 1px solid #00ff41; color: #00ff41; font: inherit; font-size: 12px; padding: 4px 16px; border-radius: 3px; cursor: pointer; }
.send-btn:hover:not(:disabled) { background: #00ff41; color: #000; }
.send-btn:disabled { opacity: 0.3; }
.member-login-tabs :deep(.n-tabs-nav) { background: transparent !important; }
.member-login-tabs :deep(.n-tabs-tab) { color: #8899aa !important; font-size: 15px; padding: 8px 20px; }
.member-login-tabs :deep(.n-tabs-tab.n-tabs-tab--active) { color: #00ff41 !important; font-weight: bold; }
.member-login-tabs :deep(.n-tabs-bar) { background: #00ff41 !important; }

/* 新登录注册样式 */
.auth-tabs { display: flex; gap: 0; margin-bottom: 0; }
.auth-tab-btn { flex: 1; padding: 10px 0; border: none; background: transparent; color: #8899aa; font-size: 15px; cursor: pointer; border-bottom: 2px solid #333; transition: all .2s; }
.auth-tab-btn.active { color: #00ff41; border-bottom-color: #00ff41; font-weight: bold; }
.auth-form-v2 { display: flex; flex-direction: column; gap: 12px; }
.input-group-v2 { display: flex; align-items: center; background: #1a1d24; border: 1px solid #333; border-radius: 6px; overflow: hidden; transition: border-color .2s; }
.input-group-v2:focus-within { border-color: #00ff41; }
.input-icon-v2 { padding: 0 12px; font-size: 15px; opacity: 0.6; }
.input-group-v2 input { flex: 1; border: none; background: transparent; padding: 11px 12px 11px 0; font-size: 14px; color: #e0e0e0; outline: none; font-family: inherit; }
.input-group-v2 input::placeholder { color: #555; }
.auth-btn-v2 { width: 100%; padding: 10px; border: none; border-radius: 6px; background: #00ff41; color: #000; font-size: 15px; font-weight: 600; cursor: pointer; transition: all .2s; }
.auth-btn-v2:hover { background: #00cc33; }
.auth-btn-v2:disabled { opacity: 0.4; cursor: not-allowed; }
.start-chat-btn { display: inline-block; padding: 12px 36px; background: linear-gradient(135deg, #00ff41, #00cc33); color: #000; border: none; border-radius: 6px; font-size: 16px; font-weight: 700; cursor: pointer; transition: all .2s; box-shadow: 0 0 20px rgba(0,255,65,0.3); }
.start-chat-btn:hover { transform: scale(1.05); box-shadow: 0 0 30px rgba(0,255,65,0.5); }

/* 手机端 AI 聊天适配 */
@media (max-width: 768px) {
  .chat-area { padding: 8px !important; }
  .cmd-input { font-size: 16px !important; }
  .send-btn { padding: 6px 14px !important; font-size: 13px !important; }
  .status-bar { flex-wrap: wrap; gap: 4px; font-size: 11px; }
  .quick-tags { gap: 4px; }
  .quick-tag { font-size: 10px; padding: 3px 8px; }
}
@media (max-width: 480px) {
  .status-left, .status-center, .status-right { font-size: 10px; }
  .status-text { font-size: 10px !important; }
  .brand-tag { font-size: 11px !important; }
  .member-tag { font-size: 10px !important; }
}
/* 购买弹窗卡片文字颜色修复 */
.tier-card :deep(.n-card-header) { color: #8b5cf6 !important; }
.tier-card :deep(.n-card-header__main) { color: #8b5cf6 !important; font-weight: bold; font-size: 16px; }
.tier-current { border-color: #18a058 !important; }
</style>
