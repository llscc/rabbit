// 定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'
export const lazyPlugin = {
    install(app) {
        //懒加载指令逻辑
        app.directive('img-lazy', {
            mounted(el, binding) {
                //el:指令所绑定的元素，可以用来直接操作DOM
                //binding:一个对象,binding.value表示指令的绑定值 图片url
                //console.log("指令所绑定的元素",el,binding.value);
                const{stop} = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        //console.log("isIntersecting",isIntersecting);
                        if (isIntersecting) {
                            //图片进入可视区域
                            el.src = binding.value
                            stop()
                        }
                    },
                )
            }
        })
    }
}