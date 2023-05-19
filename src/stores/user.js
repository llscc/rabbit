// 管理用户数据相关
import {defineStore} from 'pinia'
import { ref } from 'vue'
import {loginAPI} from '@/apis/user'

export const useUserStore = defineStore('user',()=>{
    // 1.定义管理用户数据的state
    const userInfo = ref({})
    // 2. 定义获取数据接口的action函数
    const getUserInfo = async ({account,password})=>{
        const res = await loginAPI({account,password})
        userInfo.value = res.result
    }
    // 3. 以对象的格式返回需要暴露的数据和方法
    return{
        userInfo,
        getUserInfo
    }
})