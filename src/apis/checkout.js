import request from '@/utils/http';

// 获取结算页数据
export const getCheckoutAPI =  () => {
    return request({
        url: '/member/order/pre',
    })
}