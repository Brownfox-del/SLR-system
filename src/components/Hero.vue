<template>
  <section id="hero">
    <div class="section-wrap">
      <header>
        <a class="head-logo"><span>手语</span>识别系统</a>
        <nav>
          <!-- 1. 首页按钮：点击刷新页面 -->
          <a class="nav-items" @click="refreshPage">首页</a>
          <!-- 2. 关于系统：滚动到 About 组件位置 -->
          <a class="nav-items" @click="scrollToAnchor('about')">关于系统</a>
          <!-- 3. 核心功能：滚动到 Project 组件位置 -->
          <a class="nav-items" @click="scrollToAnchor('project')">核心功能</a>
          <!-- 4. 联系我们：滚动到 Contact 组件位置 -->
          <a class="nav-items" @click="scrollToAnchor('contact')">联系我们</a>
        </nav>
        <div class="head-cta">
          <button class="header-cta-btn">登录</button>
          <button class="header-cta-btn">注册</button>
        </div>
      </header>
      <div class="hero-content">
        <div class="left">
          <h1 class="main-text">手语<span>识别</span><br>智能<span>交互系统</span></h1>
          <h2 class="sub-text">实时将手语转换为文字，打破听障群体沟通壁垒</h2>
          <div class="hero-cta">
            <button class="hero-cta-btn btn1" @click="$router.push('/recognition')">开始识别</button>
            <button class="hero-cta-btn btn2" @click="$router.push('/instruction')">使用说明</button>
          </div>
        </div>
        <div class="right">
          <img src="@/assets/images/tr1.png" alt="手语识别系统">
        </div>
      </div>
      <div class="social">
        <i class="fa-brands fa-github"></i>
        <i class="fa-brands fa-weixin"></i>
        <i class="fa-brands fa-weibo"></i>
        <i class="fa-brands fa-gitee"></i>
      </div>
    </div>
  </section>
  <!-- 三个组件的 id 与锚点对应 -->
  <About id="about"/>
  <Project id="project"/>
  <Contact id="contact"/>
  <Footer/>
</template>

<script setup>
import About from './About.vue'
import Project from './Project.vue'
import Contact from './Contact.vue'
import Footer from './Footer.vue'

// 1. 首页按钮：刷新页面
const refreshPage = () => {
  window.location.reload()
}

// 2. 通用锚点滚动函数（平滑滚动到指定id的组件）
const scrollToAnchor = (anchorId) => {
  // 获取目标元素
  const targetElement = document.getElementById(anchorId)
  if (targetElement) {
    // 平滑滚动到目标元素顶部（兼容所有浏览器）
    targetElement.scrollIntoView({
      behavior: 'smooth', // 平滑滚动
      block: 'start'      // 对齐到元素顶部
    })
  }
}
</script>

<style scoped>
/* 原有样式完全保留，无需修改 */
/* 可选：添加导航按钮点击后的高亮样式（提升体验） */
.nav-items {
  cursor: pointer; /* 鼠标悬停显示手型 */
  position: relative;
  padding: 0 8px;
}

/* 可选：滚动到对应区域后，导航按钮高亮（需结合滚动监听，可选） */
.nav-items.active {
  color: #FFE4B5;
}

/* 可选：hover 效果 */
.nav-items:hover {
  color: #FFE4B5;
  transition: color 0.3s ease;
}
</style>