// 把components下的所有组件都全局化注册
import ImageView from './ImageView/index.vue'
import Sku from './XtxSku/index.vue'
export const componentsPlugin={
    install(app){
        // app.component('组件名',组件)
        app.component('XtxImageView',ImageView)
        app.component('XtxSku',Sku)
    }
}