<script setup>
// 无需导入组件，路由自动渲染
import { RouterView } from 'vue-router'
</script>

<template>
  <main>
    <!-- 路由视图：自动渲染当前路由对应的组件 -->
    <RouterView />
  </main>
</template>

<style>
/* 引入Font Awesome图标库 */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
/* 引入全局样式文件 */
@import "@/assets/styles/styles.css";
@import "@/assets/styles/animation.css";
@import "@/assets/styles/responsive-css.css";
</style>