<template>
  <!-- 根容器：隐藏滚动条 + 保留滚动功能 -->
  <div class="scroll-hide-container">
    <section id="about" style="height: auto; min-height: 100vh; padding: 50px 20px; overflow-y: auto;">
      <div class="section-wrap" style="height: auto; min-height: 75vh; width: 100%; max-width: 1200px; margin: 0 auto; padding: 50px 30px; overflow-y: visible;">
        <h3 class="section-title"><span>识别</span>结果</h3>
        
        <p class="p1" style="margin-bottom: 30px; line-height: 1.8;">
          {{ mode === 'upload' ? '上传视频' : '摄像头录制' }}识别完成，以下是手语转换的文本结果，
          您可查看历史识别记录，所有记录将保存在本地。
        </p>

        <div class="result-section" style="margin: 25px 0; text-align: center;">
          <h4 class="result-title" style="font-size: 1.4rem; color: #FFE4B5; margin-bottom: 15px;">本次识别结果</h4>
          <p class="result-text" style="font-size: 1.1rem; color: #F1F8E9; padding: 18px; background-color: rgba(255, 255, 255, 0.1); border-radius: 15px; max-width: 500px; margin: 0 auto; line-height: 1.7;">
            {{ result }}
          </p>
        </div>

        <div class="history-section" style="margin: 30px 0; max-width: 500px; margin-left: auto; margin-right: auto;">
          <h4 class="history-title" style="font-size: 1.2rem; color: #FFE4B5; margin-bottom: 15px; text-align: center;">识别历史</h4>
          <ul class="history-list" style="list-style: none; padding: 0; background-color: rgba(255, 255, 255, 0.1); border-radius: 15px; padding: 18px; max-height: 250px; overflow-y: auto;">
            <li v-for="(item, index) in history" :key="index" style="font-size: 1rem; color: #F1F8E9; padding: 8px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
              {{ item }}
            </li>
          </ul>
          <button class="section-btn clear-btn" @click="clearHistory" style="margin: 15px auto; display: block; padding: 10px 30px;">
            清空历史记录
          </button>
        </div>

        <button class="section-btn back-btn" @click="goBack" style="margin: 20px auto; display: block; padding: 10px 40px;">
          返回识别页面
        </button>

        <img src="@/assets/images/grass.png" alt="结果页面装饰" style="position: relative; width: 100%; max-width: 800px; margin: 0 auto; display: block; opacity: 0.5; margin-top: 50px;">
      </div>
    </section>
    <Footer style="margin-top: 20px; margin-bottom: 20px; text-align: center; width: 100%;"/>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import Footer from './Footer.vue'

const router = useRouter();
const route = useRoute();

const result = ref(route.query.result || "暂无识别结果");
const mode = ref(route.query.mode || "upload");
const history = ref(JSON.parse(localStorage.getItem('signRecogHistory') || '[]'));

onMounted(() => {
  if (result.value && !history.value.includes(result.value)) {
    history.value.unshift(result.value);
    localStorage.setItem('signRecogHistory', JSON.stringify(history.value));
  }
});

const goBack = () => {
  router.push('/recognition');
};

const clearHistory = () => {
  history.value = [];
  localStorage.removeItem('signRecogHistory');
};
</script>

<style scoped>
/* 隐藏滚动条 + 保留滚动功能，和识别页统一 */
.scroll-hide-container {
  min-height: 100vh;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scroll-hide-container::-webkit-scrollbar {
  display: none;
}

/* 响应式适配 */
@media (max-width: 768px) {
  .result-text, .history-list {
    max-width: 100%;
  }
  .section-wrap {
    padding: 30px 15px !important;
  }
}
</style>