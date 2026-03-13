// 引入Vue Router核心方法
import { createRouter, createWebHistory } from 'vue-router'

// 引入所有需要路由的组件
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Project from '../components/Project.vue'
import Contact from '../components/Contact.vue'
import RecognitionPage from '../components/RecognitionPage.vue'
import ResultPage from '../components/ResultPage.vue'
import InstructionPage from '../components/InstructionPage.vue'

// 引入新创建的五个页面组件
import VueFeature from '../components/VueFeature.vue'
import PythonFeature from '../components/PythonFeature.vue'
import OpenCVFeature from '../components/OpenCVFeature.vue'
import FrameworkFeature from '../components/FrameworkFeature.vue'
import AllFeatures from '../components/AllFeatures.vue'

// 路由规则配置
const routes = [
  { path: '/', name: 'Hero', component: Hero },
  { path: '/about', name: 'About', component: About },
  { path: '/project', name: 'Project', component: Project },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/recognition', name: 'RecognitionPage', component: RecognitionPage },
  { path: '/result', name: 'ResultPage', component: ResultPage },
  { path: '/instruction', name: 'InstructionPage', component: InstructionPage },

  // 新增的五个路由配置
  {
    path: '/project/vue',       // Vue3 详情路径
    name: 'VueFeature',
    component: VueFeature
  },
  {
    path: '/project/python',    // Python 详情路径
    name: 'PythonFeature',
    component: PythonFeature
  },
  {
    path: '/project/opencv',    // OpenCV 详情路径
    name: 'OpenCVFeature',
    component: OpenCVFeature
  },
  {
    path: '/project/framework', // 框架详情路径
    name: 'FrameworkFeature',
    component: FrameworkFeature
  },
  {
    path: '/project/all',       // 查看全部功能路径
    name: 'AllFeatures',
    component: AllFeatures
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes
})

// 导出路由实例
export default router
