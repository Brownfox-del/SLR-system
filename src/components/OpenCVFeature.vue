<template>
  <section id="opencv-feature">
    <div class="section-wrap">
      <h3 class="section-title">OpenCV 视频处理</h3>
      <!-- 滑动容器 -->
      <div class="detail-content scroll-container">
        <img src="@/assets/images/p3.jpeg" alt="OpenCV">
        <p>利用 OpenCV 技术实现实时视频流处理，包括图像预处理、帧提取等操作，为模型输入提供数据支持。</p>
        <p>支持多种视频源输入：本地文件、网络流、摄像头实时采集等。</p>
        <p>图像预处理流程：灰度化、降噪、边缘检测、尺寸归一化、色域转换。</p>
        <p>帧提取策略：可配置帧率，支持关键帧提取和均匀采样两种模式。</p>
        <p>硬件加速：结合 OpenCV 的 GPU 加速模块，提升视频处理速度。</p>
        <p>异常处理：自动检测视频流中断、帧丢失等问题，保障系统稳定性。</p>
        <p>输出格式：支持原始帧、处理后帧、特征图等多种数据格式输出。</p>
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