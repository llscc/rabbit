<script setup>
    defineProps({
        goods:{
            type:Object,
            defalut:()=>{}
        }
    })
</script>

<template>
    <RouterLink to="/" class="goods-item">
        <img v-img-lazy="goods.picture" alt="" />
        <p class="name ellipsis">{{ goods.name }}</p>
        <p class="desc ellipsis">{{ goods.desc }}</p>
        <p class="price">&yen;{{ goods.price }}</p>
    </RouterLink>
</template>

<style lang="scss">
.goods-item {
      display: block;
      width: 220px;
      padding: 20px 30px;
      text-align: center;
      transition: all .5s;

      &:hover {
        transform: translate3d(0, -3px, 0); // 3d硬件加速,提高性能，分别是x轴偏移量,y轴偏移量,z轴偏移量
        box-shadow: 0 3px 8px rgb(0 0 0 / 20%); // 分别是x轴偏移量,y轴偏移量,模糊半径,阴影扩散半径,阴影颜色
      }

      img {
        width: 160px;
        height: 160px;
      }

      p {
        padding-top: 10px;
      }

      .name {
        font-size: 16px;
      }

      .desc {
        color: #999;
        height: 29px;
      }

      .price {
        color: $priceColor;
        font-size: 20px;
      }
    }
</style>