<script setup>
import { ElButton,ElMenu, ElMenuItem } from 'element-plus';
import { el } from 'element-plus/es/locales.mjs';
import { ref } from 'vue'
import { reactive } from 'vue';
import Giscus from '@giscus/vue';
import 'element-plus/dist/index.css'
</script>
<template>

<ElMenu mode="horizontal" :unique-opened="true" :collapse-transition="true" :close-on-click-outside="true" :default-active="$route.path" router :ellipsis="false">
    <ElMenuItem>
    <img
        style="width:210px;height: 55px;"
        src="/ern.webp"
        alt="Element logo"
      />
    </ElMenuItem>
    <ElMenuItem index="/">主页</ElMenuItem>
    <ElMenuItem index="/download">下载</ElMenuItem>
    <ElMenuItem index="/stalk">视奸我</ElMenuItem>
</ElMenu>

<router-view></router-view>
    <div style="width: 50%;    
                display: flex;
                justify-content: center;
                align-items: center;
                margin: auto;">
    <giscus
        repo="nomdn/ern-website"
        repoId="R_kgDOQfL_MA"
        category="General"
        categoryId="DIC_kwDOQfL_MM4CzLue"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="zh-CN"
        crossorigin="anonymous"
    ></giscus>
    </div>
</template>
<style scoped>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
</style>