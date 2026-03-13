<template>
  <section id="python-feature">
    <div class="section-wrap">
      <h3 class="section-title">Python 深度学习模型</h3>
      <!-- 滑动容器 -->
      <div class="detail-content scroll-container">
        <img src="@/assets/images/p2.jpg" alt="Python">
        <p>后端核心采用 Python 语言，结合深度学习算法，提供强大的模型推理能力，确保识别的准确性与效率。</p>
        <p>模型架构：采用轻量化的 CNN + Transformer 混合架构，兼顾精度和速度。</p>
        <p>推理优化：使用 ONNX Runtime 加速推理，相比原生 Python 推理提升 30%+ 速度。</p>
        <p>算法模块：包含目标检测、特征提取、相似度计算、分类预测等核心模块。</p>
        <p>动态加载：支持模型热更新，无需重启服务即可切换不同版本的模型。</p>
        <p>批量推理：支持批量处理请求，提升高并发场景下的处理效率。</p>
        <p>错误处理：完善的异常捕获和重试机制，保障推理服务稳定性。</p>
        <p>监控指标：实时输出推理耗时、准确率等指标，方便性能调优。</p>
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
/* 样式同上，保持一致 */
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