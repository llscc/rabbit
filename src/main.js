
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//引入全局样式
import '@/styles/common.scss'

//测试接口函数
import { getCategory } from './apis/testApi'
getCategory().then(res => {
    console.log("测试接口函数", res);
})
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
 