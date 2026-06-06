<template>
  <div class="login" :class="{ dark: themeStore.isDark }">
    <AppHeader />
    <main class="login-main">
      <div class="login-card">
        <h1 class="login-title">登录到码创McdmAdmin</h1>

        <n-form ref="formRef" :model="form" :rules="rules" size="large">
          <n-form-item path="username">
            <n-input v-model:value="form.username" placeholder="用户名 / 邮箱 / 手机号" clearable>
              <template #prefix>
                <n-icon><PersonOutline /></n-icon>
              </template>
            </n-input>
          </n-form-item>

          <n-form-item path="password">
            <n-input
              v-model:value="form.password"
              :type="showPwd ? 'text' : 'password'"
              placeholder="请输入密码"
              clearable
              @keyup.enter="handleLogin"
            >
              <template #prefix>
                <n-icon><LockClosedOutline /></n-icon>
              </template>
              <template #suffix>
                <n-icon :component="showPwd ? EyeOutline : EyeOffOutline" class="pwd-toggle" @click="showPwd = !showPwd" />
              </template>
            </n-input>
          </n-form-item>

          <n-form-item path="captcha">
            <div class="captcha-row">
              <n-input
                v-model:value="form.captcha"
                placeholder="请输入图形验证码"
                class="captcha-input"
                clearable
                @keyup.enter="handleLogin"
              >
                <template #prefix>
                  <n-icon><ShieldCheckmarkOutline /></n-icon>
                </template>
              </n-input>
              <img :src="captchaSrc" class="captcha-img" @click="loadCaptcha" title="点击刷新验证码" alt="图形验证码" />
            </div>
          </n-form-item>

          <div class="login-extra">
            <n-checkbox v-model:checked="rememberMe">记住我</n-checkbox>
            <a class="forgot-link" href="javascript:void(0)">忘记密码？</a>
          </div>

          <div class="login-btns">
            <n-button type="primary" block size="large" round :loading="loading" @click="handleLogin">
              登录
            </n-button>
          </div>

          <div class="login-footer">
            还没有账户？<a class="reg-link" @click="goRegister">点击注册</a>
          </div>
        </n-form>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useThemeStore } from '@/stores/theme'
import {
  PersonOutline, LockClosedOutline, EyeOutline, EyeOffOutline, ShieldCheckmarkOutline,
} from '@vicons/ionicons5'
import type { FormInst, FormRules } from 'naive-ui'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

const themeStore = useThemeStore()
const router = useRouter()

const formRef = ref<FormInst | null>(null)
const loading = ref(false)
const showPwd = ref(false)
const rememberMe = ref(false)
const captchaKey = ref('')
const captchaSrc = ref('')

const form = reactive({
  username: '',
  password: '',
  captcha: '',
})

const rules: FormRules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ],
  captcha: [
    { required: true, message: '请输入图形验证码', trigger: 'blur' },
  ],
}

function loadCaptcha() {
  fetch('/api/captcha?' + Date.now())
    .then(resp => {
      captchaKey.value = resp.headers.get('X-Captcha-Key') || ''
      return resp.blob()
    })
    .then(blob => {
      if (captchaSrc.value) URL.revokeObjectURL(captchaSrc.value)
      captchaSrc.value = URL.createObjectURL(blob)
    })
    .catch(() => {})
}

onMounted(() => {
  loadCaptcha()
})

async function handleLogin() {
  try {
    await formRef.value?.validate()
  } catch {
    return
  }

  loading.value = true
  try {
    const resp = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: form.username,
        password: form.password,
        captcha: form.captcha,
        captcha_key: captchaKey.value,
      }),
    })
    const data = await resp.json()
    if (data.code === 0) {
      if (rememberMe.value) {
        localStorage.setItem('user_token', data.data.token)
        localStorage.setItem('user_info', JSON.stringify(data.data.user))
      }
      window.$message?.success('登录成功')
      setTimeout(() => router.push('/'), 1000)
    } else {
      window.$message?.error(data.msg || '登录失败')
      loadCaptcha()
      form.captcha = ''
    }
  } catch {
    window.$message?.error('网络错误，请稍后重试')
  } finally {
    loading.value = false
  }
}

function goRegister() {
  router.push('/register')
}
</script>

<style scoped>
.login {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f8fafc;
  color: #1e293b;
  transition: background 0.3s, color 0.3s;
}
.login.dark {
  background: #0f172a;
  color: #e2e8f0;
}

.login-main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
}

.login-card {
  width: 100%;
  max-width: 440px;
  background: #fff;
  border-radius: 16px;
  padding: 40px 36px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.06);
}
.dark .login-card {
  background: #1e293b;
  box-shadow: 0 4px 24px rgba(0,0,0,0.3);
}

.login-title {
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin: 0 0 32px;
  color: #1e293b;
}
.dark .login-title { color: #e2e8f0; }

.pwd-toggle {
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.2s;
}
.pwd-toggle:hover { opacity: 0.8; }

.captcha-row {
  display: flex;
  gap: 12px;
  width: 100%;
}
.captcha-input {
  flex: 1;
}
.captcha-img {
  height: 40px;
  width: 130px;
  border-radius: 6px;
  cursor: pointer;
  border: 1px solid #e2e8f0;
  flex-shrink: 0;
}
.dark .captcha-img {
  border-color: #334155;
}

.login-extra {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.forgot-link {
  font-size: 14px;
  color: #18A058;
  text-decoration: none;
  cursor: pointer;
}
.forgot-link:hover { text-decoration: underline; }
.dark .forgot-link { color: #4ade80; }

.login-btns {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 8px;
}

.login-footer {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #64748b;
}
.dark .login-footer { color: #94a3b8; }

.reg-link {
  color: #18A058;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
}
.reg-link:hover { text-decoration: underline; }
.dark .reg-link { color: #4ade80; }

@media (max-width: 768.98px) {
  .login-card {
    padding: 28px 20px;
  }
  .captcha-row {
    flex-direction: column;
  }
  .captcha-img {
    width: 100%;
    height: 44px;
  }
}
</style>
