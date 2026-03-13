<template>
  <section id="project">
    <div class="section-wrap">
      <h3 class="section-title"><span>核心</span>功能</h3>
      <div class="project-grid">
        <!-- 添加 @click 事件 -->
        <div class="card crd-1" @click="goTo('/project/vue')">
          <img src="@/assets/images/p1.jpg">
          <h4 class="card-title">Vue3 前端框架</h4>
        </div>
        <div class="card crd-2" @click="goTo('/project/python')">
          <img src="@/assets/images/p2.jpg">
          <h4 class="card-title">Python 深度学习模型</h4>
        </div>
        <div class="card crd-3" @click="goTo('/project/opencv')">
          <img src="@/assets/images/p3.jpeg">
          <h4 class="card-title">OpenCV 视频处理</h4>
        </div>
        <div class="card crd-4" @click="goTo('/project/framework')">
          <img src="@/assets/images/p4.jpg">
          <h4 class="card-title">PyTorch / TensorFlow</h4>
        </div>
      </div>
      <!-- 添加 @click 事件 -->
      <button class="section-btn" @click="goTo('/project/all')">查看全部功能</button>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'

// 获取路由实例
const router = useRouter()

// 定义跳转方法
const goTo = (path) => {
  router.push(path)
}
</script>

<style scoped>
/* 卡片悬停效果，提示用户可点击 */
.card {
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.15);
}

/* 确保按钮样式存在（如果全局样式中未定义） */
.section-btn {
  margin-top: 20px;
  padding: 10px 30px;
  background-color: #42b983; /* 示例颜色，可修改为项目主题色 */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.section-btn:hover {
  background-color: #3aa876;
}
</style>
