// 封装购物车模块
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useUserStore } from './userStore'
import { insertCartAPI, findNewCartListAPI, delCartAPI } from '@/apis/cart'

export const useCartStore = defineStore('cart', () => {
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)
    // 1.定义state cartlist
    const cartList = ref([])
    // 获取最新购物车列表action
    const updateNewList = async () => {
        const res = await findNewCartListAPI()
        cartList.value = res.result
    }
    // 2.定义actions
    const addCart = async (goods) => {
        const { skuId, count } = goods
        if (isLogin.value) {
            await insertCartAPI({ skuId, count })
            updateNewList()
        } else {
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

    }

    // 删除购物车
    const delCart = async (skuId) => {
        if (isLogin.value) {
            // 调用接口删除
            await delCartAPI([skuId])
            // 重新获取购物车列表
            updateNewList()
        }
        else {
            // 思路：1.找到删除项的下标值，splice
            const idx = cartList.value.findIndex(item => item.skuId === skuId)
            cartList.value.splice(idx, 1)
            // 2.通过filter过滤
        }

    }

    //清除购物车
    const clearCart = () => {
        cartList.value = []
    }

    // 单选功能
    const singleCheck = (skuId, selected) => {
        // skuid找到要修改的那项，修改selected
        const item = cartList.value.find(item => item.skuId === skuId)
        item.selected = selected
    }

    // 全选功能
    const allCheck = (selected) => {
        cartList.value.forEach(item => item.selected = selected)
    }

    // 计算属性
    // 1.总数量
    const allCount = computed(() => cartList.value.reduce((pre, item) => pre + item.count, 0))
    // 2.总价格
    const allPrice = computed(() => cartList.value.reduce((pre, item) => pre + item.count * item.price, 0))

    // 3.已选择数量
    //const selectedCount = computed(() => cartList.value.reduce((pre, item) => pre + (item.selected ? item.count : 0), 0))
    const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((pre, item) => pre + item.count, 0))
    //4.已选择总价格
    const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((pre, item) => pre + item.count * item.price, 0))
    // 是否全选
    const isAll = computed(() => cartList.value.every(item => item.selected))

    return {
        cartList,
        addCart,
        delCart,
        allCount,
        allPrice,
        singleCheck,
        isAll,
        allCheck,
        selectedCount,
        selectedPrice,
        clearCart
    }
},
    {
        persist: true,
    })