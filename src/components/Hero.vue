<template>
  <section id="hero">
    <div class="section-wrap">
      <header>
        <a class="head-logo"><span>手语</span>识别系统</a>
        <nav>
          <a class="nav-items" @click="$router.push('/')">首页</a>
          <a class="nav-items" @click="$router.push({path: '/', hash: '#about'})">关于系统</a>
          <a class="nav-items" @click="$router.push({path: '/', hash: '#project'})">核心功能</a>
          <a class="nav-items" @click="$router.push({path: '/', hash: '#contact'})">联系我们</a>
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
            <button class="hero-cta-btn btn2">了解更多</button>
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
</script>

<style scoped>
</style>