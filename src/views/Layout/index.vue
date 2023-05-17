<template>
    <LayoutFixed />
    <LayoutNav />
    <LayoutHeader />
    <RouterView />
    <LayoutFooter />
</template>

<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue';
import { onMounted } from 'vue';
//触发获取导航列表的action
import { useCategoryStore } from '@/stores/category';
 const categoryStore = useCategoryStore();
onMounted(()=>categoryStore.getCategory())
</script>

<style lang="less" scoped></style> 