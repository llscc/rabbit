// 封装到计时函数
import { computed, ref,onUnmounted } from 'vue'
import dayjs from 'dayjs' // 引入dayjs,用于格式化时间,计算时间差

export const useCountDown = () => { 
    // 响应式数据
    let timer = null
    const time = ref(0)
    // 格式化时间为 xx分xx秒
    const formatTime = computed(()=>dayjs.unix(time.value).format('mm分ss秒'))
    const start = (currentTime)=>{
        time.value = currentTime
        setInterval(()=>{
            time.value--
        },1000)
    }
    // 组件销毁时清除定时器
    onUnmounted(()=>{
        timer&&clearInterval(timer) // &&短路运算符,如果timer存在则执行clearInterval(timer)

    })
    return {
        formatTime,
        start
    }
}