<template>
  <section id="about">
    <div class="section-wrap">
      <h3 class="section-title"><span>开始</span>识别</h3>
      <p class="p1">
        欢迎使用实时手语识别界面！开始前请确保您的摄像头已开启且光线条件良好，
        系统将自动检测您的手部动作并转换为文字。
      </p>
      <p class="p2">
        1. 点击「启用摄像头」按钮激活设备摄像头；<br>
        2. 在摄像头前做出手语手势（支持单手/双手手势）；<br>
        3. 识别结果将实时显示在下方文本框中；<br>
        4. 可将识别结果导出为文本或语音播放。
      </p>
      <button class="section-btn">启用摄像头</button>
      <img src="@/assets/images/grass.png" alt="识别指南">
    </div>
  </section>
  <Footer/>
</template>

<script setup>
import Footer from './Footer.vue'
</script>

<style scoped>
</style>