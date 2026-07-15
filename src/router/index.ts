import { createRouter, createWebHistory } from 'vue-router'
import pushCode from '@/push.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/push",
      name: "push",
      component: pushCode
    }
  ]
})
export default router
