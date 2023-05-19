import request from '@/utils/http';

// 获取结算页数据
export const getCheckoutAPI =  () => {
    return request({
        url: '/member/order/pre',
    })
}

//创建订单
export const createOrderAPI = (data) => {
    return request({
        url: '/member/order',
        method: 'POST',
        data
    })
}