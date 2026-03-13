<template>
  <section id="framework-feature">
    <div class="section-wrap">
      <h3 class="section-title">PyTorch / TensorFlow</h3>
      <!-- 滑动容器 -->
      <div class="detail-content scroll-container">
        <img src="@/assets/images/p4.jpg" alt="Framework">
        <p>支持主流深度学习框架 PyTorch 与 TensorFlow，方便模型的训练、迁移与部署。</p>
        <p>PyTorch 以动态计算图为核心，调试友好，更适合科研和快速迭代的模型开发。</p>
        <p>TensorFlow 提供静态计算图和完整的生产级部署工具链，适合大规模工业应用。</p>
        <p>本系统实现了双框架兼容层，可无缝切换不同框架训练的模型，降低迁移成本。</p>
        <p>支持 ONNX 模型格式转换，进一步提升模型跨框架部署的灵活性。</p>
        <p>针对推理阶段做了性能优化，结合框架原生的推理引擎，提升模型运行效率。</p>
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
  max-height: 400px;
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