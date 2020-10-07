import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import antd from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css'
const app = createApp(App)

app.use(store).use(router).use(antd).mount('#app')
