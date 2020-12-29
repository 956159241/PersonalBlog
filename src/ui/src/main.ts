import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import antd from 'ant-design-vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import 'ant-design-vue/dist/antd.css'
const app = createApp(App)

app.use(store).use(router).use(antd).use(ElementPlus).mount('#app')
