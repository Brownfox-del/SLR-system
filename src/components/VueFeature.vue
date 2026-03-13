<template>
  <section id="vue-feature">
    <div class="section-wrap">
      <h3 class="section-title">Vue3 前端框架</h3>
      <!-- 滑动容器 -->
      <div class="detail-content scroll-container">
        <img src="@/assets/images/p1.jpg" alt="Vue3">
        <p>这里是关于 Vue3 前端框架的详细介绍内容。本系统采用 Vue3 Composition API 构建，实现了高效的前后端交互与响应式界面设计。</p>
        <p>Vue3 相比 Vue2 带来了更优秀的性能表现，Composition API 让代码的组织和复用更加灵活，支持 Tree-Shaking 减小打包体积。</p>
        <p>响应式系统基于 Proxy 重构，解决了 Vue2 中 Object.defineProperty 的局限性，能够更好地支持数组和对象的响应式监听。</p>
        <p>配合 Vue Router 4 和 Pinia 状态管理，构建了完整的前端生态体系，满足复杂业务场景的开发需求。</p>
      </div>
      <button class="section-btn" @click="goBackToProject">返回功能列表</button>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

// 核心修改：跳回Hero.vue的Project模块（保留连续滑动）
const goBackToProject = async () => {
  // 1. 跳回Hero根路由并定位到#project锚点
  await router.push({
    name: 'Hero',
    hash: '#project'
  })
  
  // 2. 强制滚动到Project模块顶部
  setTimeout(() => {
    const projectSection = document.getElementById('project')
    if (projectSection) {
      projectSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, 100)
}
</script>

<style scoped>
.detail-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
  margin-bottom: 20px;
  text-align: center;
}
/* 滑动核心样式 */
.scroll-container {
  max-height: 400px; /* 适配列表高度 */
  overflow-y: auto;
  scroll-behavior: smooth;
}
/* 美化滚动条（webkit内核） */
.scroll-container::-webkit-scrollbar {
  width: 6px;
}
.scroll-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}
.scroll-container::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 3px;
}
.scroll-container::-webkit-scrollbar-thumb:hover {
  background: #999;
}
.detail-content img {
  max-width: 100%;
  border-radius: 6px;
  margin-bottom: 15px;
}
.detail-content p {
  line-height: 1.6;
  color: #333;
  margin-bottom: 10px;
}
.section-btn {
  padding: 10px 24px;
  background: #42b983;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin: 0 auto;
  display: block;
}
.section-btn:hover {
  background: #359469;
}
</style>