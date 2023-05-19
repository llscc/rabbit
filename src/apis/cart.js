// 封装购物车
import request from "@/utils/http";

// 加入购物车
export const insertCartAPI = ({ skuId, count }) => {
    return request({
        url: `/member/cart`,
        method: 'post',
        data: {
            skuId,
            count
        }
    })
}

// 获取购物车列表
export const findNewCartListAPI = () => {
    return request({
        url: `/member/cart`
    })
}