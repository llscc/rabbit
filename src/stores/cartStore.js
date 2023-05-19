// 封装购物车模块
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

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

    // 删除购物车
    const delCart = (skuId) => {
        // 思路：1.找到删除项的下标值，splice
        const idx = cartList.value.findIndex(item => item.skuId === skuId)
        cartList.value.splice(idx, 1)
        // 2.通过filter过滤
    }

    // 单选功能
    const singleCheck = (skuId,selected) => {
        // skuid找到要修改的那项，修改selected
        const item = cartList.value.find(item => item.skuId === skuId)
        item.selected = selected
    }

    // 计算属性
    // 1.总数量
    const allCount = computed(() =>cartList.value.reduce((pre, item) => pre + item.count, 0))
    // 2.总价格
    const allPrice = computed(() => cartList.value.reduce((pre, item) => pre + item.count * item.price, 0))
    return {
        cartList,
        addCart,
        delCart,
        allCount,
        allPrice,
        singleCheck
    }
},
    {
        persist: true,
    })