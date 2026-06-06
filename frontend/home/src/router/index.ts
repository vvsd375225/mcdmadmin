import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue'),
  },
  {
    path: '/member',
    name: 'MemberCenter',
    component: () => import('@/views/MemberCenter.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _from, next) => {
  const token = localStorage.getItem('m_token')
  // 公开页面
  if (to.path === '/' || to.path === '/login' || to.path === '/register' || to.path === '/member') {
    next()
    return
  }
  // 其他页面需要会员登录
  if (!token) {
    next('/member')
  } else {
    next()
  }
})

export default router
