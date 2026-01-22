import { createRouter, createWebHistory } from 'vue-router'
// Nhập các trang bạn đã tạo vào đây
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Profile from '../components/Profile.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/profile', component: Profile }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router