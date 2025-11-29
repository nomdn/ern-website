import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './pages/Index.vue'
import router from './index.js'

const app =createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')