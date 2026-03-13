<template>
  <section id="all-features">
    <div class="section-wrap">
      <h3 class="section-title">全部核心功能</h3>
      <!-- 滑动容器 -->
      <div class="detail-content scroll-container">
        <p>这里是系统的所有功能概览页面。</p>
        <ul class="feature-list">
          <li>Vue3 前端框架：构建响应式用户界面</li>
          <li>Python 深度学习模型：核心算法逻辑</li>
          <li>OpenCV 视频处理：实时图像分析</li>
          <li>PyTorch / TensorFlow：模型底层支持</li>
          <li>实时识别功能：毫秒级响应</li>
          <li>历史记录查询：数据追溯</li>
          <li>数据可视化：基于ECharts实现实时监控</li>
          <li>接口封装：统一的前后端交互规范</li>
          <li>权限控制：精细化的角色权限管理</li>
          <li>缓存策略：优化前端加载性能</li>
          <li>跨平台兼容：适配PC/平板等多终端</li>
          <li>日志记录：系统操作全程可追溯</li>
          <li>批量处理：提升大数据量处理效率</li>
        </ul>
      </div>
      <button class="section-btn" @click="goBackToProject">返回功能列表</button>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

// 核心修改：跳回Hero.vue并定位到#project锚点（原连续滑动位置）
const goBackToProject = async () => {
  // 1. 跳回Hero.vue的根路由
  await router.push({
    name: 'Hero',
    hash: '#project' // 定位到Hero.vue内的Project模块锚点
  })
  
  // 2. 强制滚动到#project锚点位置（确保精准定位）
  setTimeout(() => {
    const projectSection = document.getElementById('project')
    if (projectSection) {
      projectSection.scrollIntoView({
        behavior: 'smooth', // 平滑滚动，保持体验一致
        block: 'start'      // 定位到模块顶部
      })
    } else {
      // 兜底：锚点不存在时滚动到页面顶部
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
  max-height: 350px; /* 适配列表高度 */
  overflow-y: auto;
  scroll-behavior: smooth;
}
/* 美化滚动条 */
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
/* p标签文字改为纯黑色 */
.detail-content p { 
  line-height: 1.6; 
  color: #000; 
  margin-bottom: 10px; 
}
/* 列表文字改为纯黑色，并保留原有布局样式 */
.feature-list {
  text-align: left; 
  padding-left: 20px; 
  line-height: 2;
  color: #000; 
  margin: 0; 
}
/* 确保列表项继承黑色（兜底） */
.feature-list li {
  color: inherit;
}
</style>