// axios基础封装
import axios from 'axios'

const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

// 请求拦截器
httpInstance.interceptors.request.use(config => {
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
    return Promise.reject(err)
})

export default httpInstance