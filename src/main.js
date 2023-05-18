
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//引入全局样式
import '@/styles/common.scss'


//引入懒加载指令插件
import {lazyPlugin} from '@/directives'

// 引入全局组件
import {componentsPlugin} from '@/components'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.use(componentsPlugin)
app.mount('#app')
 
// 定义全局指令
