import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js' // 新增：引入路由

// 创建应用并挂载路由
const app = createApp(App)
app.use(router) // 新增：使用路由
app.mount('#app')