<template>
  <!-- 根容器：隐藏滚动条 + 核心滚动容器（唯一滚动入口，避免多层滚动冲突） -->
  <div class="scroll-hide-container">
    <section id="about" style="height: auto; min-height: 100vh; padding: 50px 20px;">
      <div class="section-wrap" style="height: auto; min-height: 100%; width: 100%; max-width: 1200px; margin: 0 auto; padding: 40px 20px;">
        <h3 class="section-title"><span>开始</span>识别</h3>
        
        <p class="p1" style="margin-bottom: 30px; line-height: 1.8; font-size: 1rem;">
          欢迎使用实时手语识别界面！开始前请确保您的摄像头已开启且光线条件良好，
          系统将自动检测您的手部动作并转换为文字。支持上传本地视频或摄像头实时录制两种方式。
        </p>

        <!-- 功能切换按钮组 -->
        <div class="function-btn-group" style="margin: 30px 0; display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
          <button 
            class="section-btn function-btn" 
            :class="{ active: mode === 'upload' }"
            @click="switchMode('upload')"
            style="padding: 12px 40px; font-size: 1rem; white-space: nowrap;"
          >
            上传视频
          </button>
          <button 
            class="section-btn function-btn" 
            :class="{ active: mode === 'camera' }"
            @click="switchMode('camera')"
            style="padding: 12px 40px; font-size: 1rem; white-space: nowrap;"
          >
            摄像头录制
          </button>
        </div>

        <!-- 核心功能区：移除多余overflow，仅保留根容器滚动 -->
        <div class="recognition-content" style="margin: 20px 0; width: 100%;">
          <!-- 上传视频区域：完全保留原有样式，未做任何修改 -->
          <div v-if="mode === 'upload'" class="upload-section" style="text-align: center; margin-bottom: 40px; width: 100%;">
            <div style="width: 100%; max-width: 500px; margin: 0 auto;">
              <el-upload
                drag
                action=""
                :auto-upload="false"
                :on-change="handleFile"
                class="upload-area"
                style="width: 100%; padding: 25px; height: auto; position: relative;"
              >
                <i class="el-icon-upload" style="font-size: 2rem;"></i>
                <div class="upload-text" style="color: #000 !important; font-size: 1rem; margin-top: 10px; line-height: 1.6;">
                  拖拽视频到这里或点击上传（支持MP4/WEBM格式）
                </div>
              </el-upload>
            </div>

            <div class="video-preview" style="margin: 15px 0; width: 100%; max-width: 500px; margin-left: auto; margin-right: auto;">
              <video v-if="videoUrl" :src="videoUrl" controls style="width: 100%; max-height: 300px; border-radius: 15px;"></video>
            </div>

            <button class="section-btn" @click="uploadVideo" :disabled="!videoFile" style="margin-top: 15px;">
              上传识别
            </button>
          </div>

          <!-- 摄像头录制区域 -->
          <div v-if="mode === 'camera'" class="camera-section" style="text-align: center; margin-bottom: 40px; width: 100%;">
            <video ref="cameraVideo" autoplay style="width: 100%; max-width: 500px; max-height: 300px; border-radius: 15px; margin: 0 auto 20px;"></video>
            
            <div class="camera-btn-group" style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; margin-bottom: 20px;">
              <button class="section-btn" @click="startCamera" style="padding: 10px 30px;">打开摄像头</button>
              <button class="section-btn" @click="startRecording" style="padding: 10px 30px;">开始录制</button>
              <button class="section-btn" @click="stopRecording" style="padding: 10px 30px;">停止录制</button>
            </div>

            <div class="video-preview" style="margin: 15px 0; width: 100%; max-width: 500px; margin-left: auto; margin-right: auto;">
              <video v-if="videoUrl" :src="videoUrl" controls style="width: 100%; max-height: 300px; border-radius: 15px;"></video>
            </div>

            <button class="section-btn" @click="uploadVideo" :disabled="!videoFile" style="margin-top: 15px;">
              上传识别
            </button>
          </div>

          <!-- 进度条和状态提示 -->
          <el-progress v-if="progress > 0" :percentage="progress" class="progress-bar" style="width: 100%; max-width: 500px; margin: 15px auto;"></el-progress>
          <p class="status-text" style="text-align: center; font-size: 1rem; margin: 15px 0; color: rgba(255, 247, 214, 0.9);">
            {{ status }}
          </p>
        </div>

        <!-- 说明文本 -->
        <p class="p2" style="margin-top: 40px; line-height: 1.8; font-size: 1rem; margin-bottom: 40px;">
          1. 选择「上传视频」或「摄像头录制」功能；<br>
          2. 上传/录制视频后，点击「上传识别」即可获取手语转换文本；<br>
          3. 识别完成后将自动跳转到结果页面查看详细内容；<br>
          4. 建议在光线充足、背景简洁的环境下使用，提升识别准确率。
        </p>

        <!-- 装饰图 -->
        <img src="@/assets/images/grass.png" alt="识别指南" style="width: 100%; max-width: 800px; margin: 0 auto; display: block; opacity: 0.5; margin-top: 20px; margin-bottom: 40px;">
      </div>
    </section>
    <Footer style="margin-top: 20px; margin-bottom: 20px; text-align: center; width: 100%;"/>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import Footer from './Footer.vue'

const router = useRouter();
const mode = ref("upload");
const videoFile = ref(null);
const videoUrl = ref("");
const status = ref("等待操作");
const progress = ref(0);

const cameraVideo = ref(null);
let mediaRecorder = null;
let chunks = [];

// 切换功能模式
const switchMode = (newMode) => {
  mode.value = newMode;
  status.value = newMode === 'upload' ? '请选择要上传的视频' : '请先打开摄像头';
  videoFile.value = null;
  videoUrl.value = "";
  progress.value = 0;
};

// 处理文件选择
const handleFile = (file) => {
  videoFile.value = file.raw;
  videoUrl.value = URL.createObjectURL(videoFile.value);
  status.value = "已选择视频，可点击上传识别";
};

// 上传视频并识别
const uploadVideo = async () => {
  if (!videoFile.value) {
    status.value = mode.value === 'upload' ? '请先选择视频文件' : '请先录制视频';
    return;
  }

  status.value = "识别中...";
  progress.value = 0;

  try {
    const formData = new FormData();
    formData.append("file", videoFile.value);

    const res = await axios.post(
      "http://localhost:5000/predict",
      formData,
      {
        onUploadProgress: (e) => {
          if (e.total > 0) {
            progress.value = Math.round((e.loaded * 100) / e.total);
          }
        },
      }
    );

    status.value = "识别完成，正在跳转...";
    router.push({
      name: 'ResultPage',
      query: { 
        result: res.data.result,
        mode: mode.value
      }
    });
  } catch (error) {
    status.value = "识别失败：" + (error.message || "请检查后端服务是否启动");
    progress.value = 0;
    console.error("上传识别失败：", error);
  }
};

// 打开摄像头
const startCamera = async () => {
  try {
    if (cameraVideo.value?.srcObject) {
      cameraVideo.value.srcObject.getTracks().forEach(track => track.stop());
    }

    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    cameraVideo.value.srcObject = stream;

    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.ondataavailable = (e) => {
      chunks.push(e.data);
    };
    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: "video/webm" });
      chunks = [];
      videoFile.value = blob;
      videoUrl.value = URL.createObjectURL(blob);
      status.value = "录制完成，可点击上传识别";
    };

    status.value = "摄像头已打开，可开始录制";
  } catch (error) {
    status.value = "打开摄像头失败（需允许摄像头权限）";
    console.error("摄像头打开失败：", error);
  }
};

// 开始录制
const startRecording = () => {
  if (!mediaRecorder) {
    status.value = "请先打开摄像头";
    return;
  }
  if (mediaRecorder.state === "recording") {
    status.value = "已在录制中";
    return;
  }
  status.value = "录制中...（请做出手语动作）";
  mediaRecorder.start();
};

// 停止录制
const stopRecording = () => {
  if (!mediaRecorder || mediaRecorder.state !== "recording") {
    status.value = "未在录制中";
    return;
  }
  mediaRecorder.stop();
};
</script>

<style scoped>
/* 核心：根容器作为唯一滚动入口，隐藏滚动条 + 保留滚动功能（兼容全浏览器） */
.scroll-hide-container {
  min-height: 100vh; /* 最小高度占满屏幕，内容多则自动扩展 */
  height: auto;      /* 高度自适应内容 */
  overflow-y: auto;  /* 仅根容器开启垂直滚动，避免多层滚动冲突 */
  /* 隐藏滚动条 */
  -ms-overflow-style: none;    /* IE/Edge */
  scrollbar-width: none;       /* Firefox */
}
/* Chrome/Safari 隐藏滚动条 */
.scroll-hide-container::-webkit-scrollbar {
  display: none;
}

/* 功能按钮激活状态 */
.function-btn.active {
  background-color: #FFE4B5;
  box-shadow: 0 0 30px #FFE4B5;
}

/* 上传区域：完全保留原有样式，无任何改动 */
.upload-area {
  border: 1px dashed rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.8);
  --el-upload-dragger-height: auto;
}

/* 进度条样式 */
.progress-bar {
  --el-progress-bar-fill-color: #FFE4B5;
}

/* 响应式适配：优化小屏滚动体验 */
@media (max-width: 768px) {
  .function-btn-group {
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }

  .camera-btn-group {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
  
  .upload-area, .video-preview video {
    max-width: 100%;
  }

  .section-wrap {
    padding: 20px 10px !important;
  }
}
</style>