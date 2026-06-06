<template>
  <div class="register" :class="{ dark: themeStore.isDark }">
    <AppHeader />
    <main class="reg-main">
      <div class="reg-card">
        <h1 class="reg-title">注册到码创McdmAdmin</h1>

        <n-form ref="formRef" :model="form" :rules="rules" size="large">
          <n-form-item label="注册方式">
            <n-radio-group :value="'email'" disabled>
              <n-radio value="email">通过邮箱注册</n-radio>
              <n-radio value="mobile">通过手机号注册</n-radio>
            </n-radio-group>
          </n-form-item>

          <n-form-item path="username">
            <n-input v-model:value="form.username" placeholder="请输入用户名" clearable>
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
            >
              <template #prefix>
                <n-icon><LockClosedOutline /></n-icon>
              </template>
              <template #suffix>
                <n-icon :component="showPwd ? EyeOutline : EyeOffOutline" class="pwd-toggle" @click="showPwd = !showPwd" />
              </template>
            </n-input>
          </n-form-item>

          <n-form-item path="email">
            <n-input v-model:value="form.email" placeholder="请输入电子邮箱" clearable>
              <template #prefix>
                <n-icon><MailOutline /></n-icon>
              </template>
            </n-input>
          </n-form-item>

          <n-form-item path="captcha">
            <div class="captcha-row">
              <n-input v-model:value="form.captcha" placeholder="请输入图形验证码" class="captcha-input" clearable />
              <img :src="captchaSrc" class="captcha-img" @click="loadCaptcha" title="点击刷新验证码" alt="图形验证码" />
            </div>
          </n-form-item>

          <div class="reg-btns">
            <n-button type="primary" block size="large" round :loading="loading" @click="handleRegister">
              注册
            </n-button>
            <n-button block size="large" round class="btn-login" @click="goLogin">
              回到登录
            </n-button>
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
  PersonOutline, LockClosedOutline, EyeOutline, EyeOffOutline, MailOutline,
} from '@vicons/ionicons5'
import type { FormInst, FormRules } from 'naive-ui'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

const themeStore = useThemeStore()
const router = useRouter()

const formRef = ref<FormInst | null>(null)
const loading = ref(false)
const showPwd = ref(false)
const captchaKey = ref('')
const captchaSrc = ref('')

const form = reactive({
  username: '',
  password: '',
  email: '',
  captcha: '',
})

const rules: FormRules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 32, message: '用户名长度3-32个字符', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码长度不能少于6位', trigger: 'blur' },
  ],
  email: [
    { required: true, message: '请输入电子邮箱', trigger: 'blur' },
    { type: 'email', message: '邮箱格式不正确', trigger: 'blur' },
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

async function handleRegister() {
  try {
    await formRef.value?.validate()
  } catch {
    return
  }

  loading.value = true
  try {
    const resp = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: form.username,
        password: form.password,
        email: form.email,
        captcha: form.captcha,
        captcha_key: captchaKey.value,
      }),
    })
    const data = await resp.json()
    if (data.code === 0) {
      window.$message?.success('注册成功，即将跳转到登录页')
      setTimeout(() => router.push('/'), 1500)
    } else {
      window.$message?.error(data.msg || '注册失败')
      loadCaptcha()
      form.captcha = ''
    }
  } catch {
    window.$message?.error('网络错误，请稍后重试')
  } finally {
    loading.value = false
  }
}

function goLogin() {
  router.push('/login')
}
</script>

<style scoped>
.register {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f8fafc;
  color: #1e293b;
  transition: background 0.3s, color 0.3s;
}
.register.dark {
  background: #0f172a;
  color: #e2e8f0;
}

.reg-main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
}

.reg-card {
  width: 100%;
  max-width: 440px;
  background: #fff;
  border-radius: 16px;
  padding: 40px 36px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.06);
}
.dark .reg-card {
  background: #1e293b;
  box-shadow: 0 4px 24px rgba(0,0,0,0.3);
}

.reg-title {
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin: 0 0 32px;
  color: #1e293b;
}
.dark .reg-title { color: #e2e8f0; }

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

.reg-btns {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 8px;
}

.btn-login {
  --n-color: #fff;
  --n-text-color: #64748b;
  --n-border: 1px solid #e2e8f0;
}
.btn-login:hover {
  --n-color: #f8fafc;
}
.dark .btn-login {
  --n-color: transparent;
  --n-text-color: #94a3b8;
  --n-border: 1px solid #334155;
}
.dark .btn-login:hover {
  --n-color: rgba(255,255,255,0.04);
}

@media (max-width: 768.98px) {
  .reg-card {
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
