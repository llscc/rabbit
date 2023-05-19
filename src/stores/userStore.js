// 管理用户数据相关
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/user'
import { useCartStore } from './cartStore'
import {mergeCartAPI} from '@/apis/cart'

export const useUserStore = defineStore('user', () => {
    const cartStore = useCartStore()
    // 1.定义管理用户数据的state
    const userInfo = ref({})
    // 2. 定义获取数据接口的action函数
    const getUserInfo = async ({ account, password }) => {
        const res = await loginAPI({ account, password })
        userInfo.value = res.result

        // 合并购物车
        await mergeCartAPI(cartStore.cartList.map(item=>{
            return{
            skuId:item.skuId,
            count:item.count,
            selected:item.selected
            }
        }))
        cartStore.updateNewList()
    }

    // 退出时清空用户数据
    const clearUserInfo = () => {
        userInfo.value = {}
        cartStore.clearCart()
    }

    // 3. 以对象的格式返回需要暴露的数据和方法
    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
},
    {
        persist: true,
    })