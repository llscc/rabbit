<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'
import HomePanel from './components/HomePanel.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct />
  <!-- 测试面板组件 -->
  <HomePanel title="测试标题" subTitle="测试副标题">
    <div class="test">
      测试内容
    </div>
  </HomePanel>
  <HomePanel title="测试标题" subTitle="测试副标题">
    <div class="test">
      测试内容
    </div>
  </HomePanel>
</template>

<style lang="scss" scoped>

</style>