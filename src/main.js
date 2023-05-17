
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//引入全局样式
import '@/styles/common.scss'

import { useIntersectionObserver } from '@vueuse/core'

//测试接口函数
// import { getCategory } from './apis/testApi'
// getCategory().then(res => {
//     console.log("测试接口函数", res);
// })

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
 
// 定义全局指令
app.directive('img-lazy',{
    mounted(el, binding){
        //el:指令所绑定的元素，可以用来直接操作DOM
        //binding:一个对象,binding.value表示指令的绑定值 图片url
        //console.log("指令所绑定的元素",el,binding.value);
       useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
                //console.log("isIntersecting",isIntersecting);
                if(isIntersecting){
                    //图片进入可视区域
                    el.src=binding.value
                }
            },
          )
    }
})