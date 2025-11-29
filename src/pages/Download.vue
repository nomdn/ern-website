<script setup>
import { ElButton,ElCarousel,ElCarouselItem,ElCollapse,ElMenu } from 'element-plus';
function pushtodownloadpage(){
    window.open("https://github.com/nomdn/EatRedstoneNT/releases/latest")
    
}
</script>
<template>
    <div class="center">
        <h1>在这下载</h1>
        
    </div>
    <div class="center">
        <el-button @click="pushtodownloadpage" style="margin-bottom: 100px;">点我前往下载</el-button>
    </div>
</template>
<style scoped src="../style.css">
</style>