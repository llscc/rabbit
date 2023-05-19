// axios基础封装
import axios from 'axios'
import 'element-plus/es/components/message/style/css'
import {ElMessage} from 'element-plus'
import {useUserStore} from '@/stores/user'

const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

// 请求拦截器
httpInstance.interceptors.request.use(config => {
    // 1.从pinia中获取token
    const userStore = useUserStore()
    // 2.按照后端要求拼接token
    const token = userStore.userInfo.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}` // 注意Bearer后面有个空格,否则会报错
    }
    // console.log(config);
    return config
}, err => {
    return Promise.reject(err)
})

// 响应拦截器
httpInstance.interceptors.response.use(res => {
    // console.log(res);
    return res.data
}, err => {
    // 错误提示
    ElMessage({
        type:'warning',
        message:err.response.data.message
    })
    return Promise.reject(err)
})

export default httpInstance