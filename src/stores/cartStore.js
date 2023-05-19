// 封装购物车模块
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
    // 1.定义state cartlist
    const cartList = ref([])
    // 2.定义actions
    const addCart = (goods) => {
        //添加购物车操作
        // 已添加过的商品数量+1
        // 没添加过：直接push
        // 思路：通过匹配skuid，判断是否添加过
        const item = cartList.value.find(item => item.skuId === goods.skuId)
        if (item) {
            item.count++
        }
        else {
            cartList.value.push(goods)
        }
    }
    return {
        cartList,
        addCart
    }
},
    {
        persist: true,
    })