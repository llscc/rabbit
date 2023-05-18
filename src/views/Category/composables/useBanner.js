import { ref, onMounted } from 'vue'
import { getBannerAPI } from '@/apis/home'
// 封装轮播图相关业务代码
export function useBanner() {
    const bannerList = ref([])
    const getBanner = async () => {
        const res = await getBannerAPI({ distributionSite: "2" })
        bannerList.value = res.result
        //console.log(res)
    }
    onMounted(() => {
        getBanner()
    })
    return {
        bannerList
    }
}