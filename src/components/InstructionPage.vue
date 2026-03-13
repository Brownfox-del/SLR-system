<template>
  <section id="instruction" class="scroll-container">
    <div class="section-wrap">
      <h3 class="section-title"><span>使用</span>说明</h3>
      
      <!-- 文字内容容器（字体调大） -->
      <div class="instruction-content">
        <p class="p1">
          欢迎使用手语识别系统！本系统支持通过上传视频或摄像头实时录制两种方式识别手语动作，
          并将其转换为文字。以下是详细的使用步骤和注意事项，帮助您快速上手。
        </p>
        <p class="p2">
          <strong>一、功能使用步骤</strong><br>
          1. 首页点击「开始识别」进入功能页面；<br>
          2. 选择「上传视频」或「摄像头录制」功能：<br>
          &nbsp;&nbsp;• 上传视频：拖拽/点击选择本地 MP4/WEBM 格式视频文件；<br>
          &nbsp;&nbsp;• 摄像头录制：点击「打开摄像头」后，允许浏览器权限，再点击「开始录制」；<br>
          3. 视频准备完成后，点击「上传识别」按钮；<br>
          4. 系统自动识别手语内容，完成后跳转到结果页面查看识别文本和历史记录。<br><br>
          
          <strong>二、注意事项</strong><br>
          1. 摄像头录制需确保设备摄像头可用，并允许浏览器访问权限；<br>
          2. 建议在光线充足、背景简洁的环境下录制/上传视频，提升识别准确率；<br>
          3. 支持的视频格式：MP4、WEBM，建议视频时长不超过 30 秒；<br>
          4. 识别历史记录保存在本地浏览器中，清空后无法恢复。<br><br>
          
          <strong>三、常见问题</strong><br>
          Q：摄像头无法打开？<br>
          A：请检查设备摄像头是否正常，或浏览器是否获取摄像头权限；<br>
          Q：识别结果不准确？<br>
          A：请确保手部动作清晰、背景无遮挡，或尝试重新录制/上传视频；<br>
          Q：视频上传失败？<br>
          A：请检查视频格式是否为 MP4/WEBM，或视频文件是否损坏；<br>
          Q：历史记录无法保存？<br>
          A：请检查浏览器是否开启本地存储权限，隐私模式下可能无法保存。<br><br>
          
          <strong>四、设备适配说明</strong><br>
          1. PC 端：支持 Chrome、Edge、Firefox 等主流浏览器；<br>
          2. 移动端：支持微信内置浏览器、Safari（iOS）、Chrome（Android）；<br>
          3. 摄像头要求：分辨率不低于 720P，建议使用前置/后置高清摄像头。<br><br>
          
          <strong>五、隐私说明</strong><br>
          1. 所有视频文件仅在本地处理，不会上传至服务器；<br>
          2. 识别结果和历史记录仅保存在本地浏览器，您可随时清空；<br>
          3. 如需删除本地数据，可通过浏览器「清除缓存」功能完成。
        </p>
      </div>

      <!-- 返回体验按钮（整体比例放大） -->
      <div class="back-btn-container">
        <button class="back-experience-btn" @click="goBackToHero">返回体验</button>
      </div>

      <img src="@/assets/images/grass.png" alt="使用说明装饰图" class="decor-img">
    </div>
  </section>
  <Footer/>
</template>

<script setup>
import Footer from './Footer.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 跳转并强制滚动到Hero.vue顶部（保留原有逻辑）
const goBackToHero = async () => {
  await router.push({
    name: 'Hero',
    hash: ''
  })
  
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, 100)
}
</script>

<style scoped>
/* 核心：滚动容器配置（无改动，保留滑动效果） */
.scroll-container {
  width: 100%;
  min-height: 100vh;
  height: auto;
  position: relative;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scroll-container::-webkit-scrollbar {
  display: none;
}

.section-wrap {
  width: 100%;
  min-height: 100vh;
  height: auto;
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  z-index: 10;
}

.instruction-content {
  width: 100%;
  margin-bottom: 60px;
}

/* ========== 核心修改1：调大文字字体 ========== */
/* 标题下方的引导文字（p1） */
.p1 {
  font-size: 1.4rem; /* 原1.2rem → 调大至1.4rem */
  color: #F1F8E9;
  line-height: 1.8;
  margin-bottom: 30px;
}
/* 主要说明文字（p2） */
.p2 {
  font-size: 1.2rem; /* 原1rem → 调大至1.2rem */
  color: #F1F8E9;
  line-height: 1.8;
}

/* ========== 核心修改2：放大按钮整体比例 ========== */
.back-btn-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}
.back-experience-btn {
  padding: 16px 40px; /* 原12px 32px → 放大至16px 40px */
  font-size: 1.15rem; /* 原1rem → 放大至1.15rem */
  color: #000;
  background-color: #FFE4B5;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 140px; /* 原120px → 放大至140px */
}
.back-experience-btn:hover {
  background-color: #f9d080;
  box-shadow: 0 4px 12px rgba(255, 228, 181, 0.5);
  transform: translateY(-2px);
}

/* 标题样式（无改动） */
.section-title {
  font-size: 5rem;
  color: #fff;
  margin-bottom: 50px;
}
.section-title span {
  color: #FFE4B5;
}

.decor-img {
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0.5;
  pointer-events: none;
  margin-top: 20px;
}

/* ========== 响应式适配：同步放大移动端文字和按钮 ========== */
@media (max-width: 768px) {
  .section-wrap {
    padding: 30px 20px;
  }
  .section-title {
    font-size: 3rem;
    margin-bottom: 30px;
  }
  /* 移动端文字放大 */
  .p1 {
    font-size: 1.3rem; /* 原1.1rem → 调大至1.3rem */
  }
  .p2 {
    font-size: 1.15rem; /* 原0.95rem → 调大至1.15rem */
  }
  /* 移动端按钮放大 */
  .back-experience-btn {
    padding: 14px 36px; /* 原10px 28px → 放大至14px 36px */
    font-size: 1.1rem; /* 原0.95rem → 放大至1.1rem */
  }
}
</style>