import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Hero.vue' // 首页（原Hero）
import About from '../components/About.vue' // About页
import Project from '../components/Project.vue' // 项目页
import Contact from '../components/Contact.vue' // 联系页
import Footer from '../components/Footer.vue' // 页脚（全局）
import RecognitionPage from '../components/RecognitionPage.vue' // 新增的识别页面

// 路由规则
const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
      About,
      Project,
      Contact,
      Footer
    }
  },
  {
    path: '/recognition',
    name: 'RecognitionPage',
    component: RecognitionPage
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router