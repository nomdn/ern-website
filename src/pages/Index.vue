<script setup>
import { ElButton,ElMenu, ElMenuItem } from 'element-plus';
import { el } from 'element-plus/es/locales.mjs';
import { ref } from 'vue'
import { reactive } from 'vue';
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
</ElMenu>

<router-view></router-view>
</template>
<style scoped>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
</style>