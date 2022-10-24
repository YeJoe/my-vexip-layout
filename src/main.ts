// import './style/index.scss'
import 'vexip-ui/css/index.css' 
import 'vexip-ui/themes/dark/index.css' // 不需要暗黑主题时无需引入
import { createApp } from 'vue'
import App from './App.vue'
import { router } from '@/router'
//引入pinia
import pinia from '@/pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')
