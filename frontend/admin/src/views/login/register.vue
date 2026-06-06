<template>
  <div class="register-root">
    <div class="register-card">
      <h2>注册账号</h2>
      <p class="sub">McdmAdmin 用户注册</p>
      <n-form ref="formRef" :model="form" :rules="rules" label-placement="left" label-width="80">
        <n-form-item label="用户名" path="username"><n-input v-model:value="form.username" placeholder="2-20字符" /></n-form-item>
        <n-form-item label="密码" path="password"><n-input v-model:value="form.password" type="password" show-password placeholder="至少6位" /></n-form-item>
        <n-form-item label="确认密码" path="rePassword"><n-input v-model:value="form.rePassword" type="password" show-password placeholder="再次输入密码" /></n-form-item>
        <n-form-item label="手机号" path="mobile"><n-input v-model:value="form.mobile" placeholder="选填" /></n-form-item>
        <n-form-item label="邮箱" path="email"><n-input v-model:value="form.email" placeholder="选填" /></n-form-item>
        <n-button type="primary" block :loading="loading" @click="handleRegister">注册</n-button>
        <div class="link"><router-link to="/login">已有账号？去登录</router-link></div>
      </n-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { NForm, NFormItem, NInput, NButton, useMessage } from 'naive-ui'
import { registerApi } from '@/api/auth'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const message = useMessage()
const userStore = useUserStore()
const formRef = ref()
const loading = ref(false)
const form = reactive({ username:'', password:'', rePassword:'', mobile:'', email:'' })
const validateRePass = (_:any,v:string)=>v===form.password
const rules = {
  username:[{required:true,message:'请输入用户名'},{min:2,max:20,message:'2-20字符'}],
  password:[{required:true,message:'请输入密码'},{min:6,message:'至少6位'}],
  rePassword:[{required:true,message:'请确认密码'},{validator:validateRePass,message:'两次密码不一致'}],
}

async function handleRegister(){
  try{await formRef.value?.validate()}catch{return}
  loading.value=true
  try{
    const res = await registerApi({username:form.username,password:form.password,mobile:form.mobile,email:form.email})
    localStorage.setItem('token',res.data.token)
    userStore.info = {id:res.data.id,username:res.data.username,nickname:res.data.nickname}
    message.success('注册成功')
    router.push('/')
  }catch(e:any){message.error(e?.response?.data?.msg||'注册失败')}
  loading.value=false
}
</script>

<style scoped>
.register-root{display:flex;align-items:center;justify-content:center;min-height:100vh;background:#f0f2f5;}
.register-card{width:420px;padding:40px;background:#fff;border-radius:8px;box-shadow:0 2px 12px rgba(0,0,0,0.08);}
.register-card h2{text-align:center;margin-bottom:4px;color:#1f2937;}
.sub{text-align:center;color:#9ca3af;margin-bottom:24px;font-size:13px;}
.link{text-align:center;margin-top:16px;font-size:13px;}
.link a{color:#1989fa;text-decoration:none;}
</style>
