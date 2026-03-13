import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Hero.vue'
import RecognitionPage from '../components/RecognitionPage.vue'
import ResultPage from '../components/ResultPage.vue' // 新增

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/recognition',
    name: 'RecognitionPage',
    component: RecognitionPage
  },
  {
    path: '/result', // 新增结果页路由
    name: 'ResultPage',
    component: ResultPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router