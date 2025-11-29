<script setup>
import { ElButton,ElCarousel,ElCarouselItem,ElCollapse,ElMenu } from 'element-plus';

import { ref } from 'vue'
import { reactive } from 'vue';
import { useRouter } from 'vue-router'
const home_router = useRouter()
function pushtodownload(){
    home_router.push('/download')
}
</script>
<template>
    <div class="center">
        <img src="/biaoqing.png" class="rounded-img">
        
    </div>
    <div class="center">
        <h2 style="margin-top: 30px;">不欢迎您访问这里</h2>
    </div>
    <div class="center">
        <el-button @click="pushtodownload" style="margin-bottom: 100px;">点我前往下载</el-button>
    </div>
    <div class="center">
        <ElCollapse style="width: 50%; margin-bottom: 50px;" :accordion="true">
            <el-collapse-item title="这是什么东西？？？？" name="1">
                <h1>赤石工具箱啊！</h1>
            </el-collapse-item>
            <el-collapse-item title="赤石工具箱又是什么东西啊！" name="2">
                <p>赤石工具箱<strong>就是赤石工具箱</strong></p>
                <p>他和我的世界中的红石基本没有关系</p>
                <p>（最大的关系就是项目所有者的朋友是玩红石的）</p>
                <p>叫赤石只是因为他会让用户有持答辩的快感(?)</p>
            </el-collapse-item>
            <el-collapse-item title="能有多赤石？" name="3">
                <p>为了更赤石主动放弃了Windows市场和MacOS市场这一块</p>
                <p>还不支持一些glibc比较老的Linux</p>
                <h3>和微信差不多"小而美"：</h3>
                <p>微信安装包：<strong>269MB</strong></p>
                <p>赤石工具箱安装包：<strong>136MB</strong></p>
                <p>BUG贼多，还没有社区支持()</p>
            </el-collapse-item>
        </ElCollapse>
    </div>
    <div class="center">
        <h1>特点</h1>
    </div>
    <div class="center">
        <el-carousel style="width: 60%; margin-bottom: 100px;" :autoplay="true" :loop="true" :interval="3000" type="card">
            <el-carousel-item>
                <div class="carousel-card">
                    <img src="/biaoqing.png" class="carousel-img">
                    <div class="carousel-text">
                        <h2>啥比开发者</h2>
                        <p>他什么都不会</p>
                    </div>

                </div>
            </el-carousel-item>
            <el-carousel-item>
                <div class="carousel-card">
                    <img src="/icon.png" class="carousel-img">
                    <div class="carousel-text">
                        <h2>柠檬小助手</h2>
                        <p>扫盘已经过时了，看看柠檬小助手吧家人们</p>
                    </div>

                </div>
            </el-carousel-item>
            <el-carousel-item>
                <div class="carousel-card">
                    <img src="/jsq.png" class="carousel-img">
                    <div class="carousel-text">
                        <h2>抽象番茄钟</h2>
                        <p>和柠檬的nonebot-plugin-simple-setu一样抽象</p>
                    </div>

                </div>
            </el-carousel-item>
            <el-carousel-item>
                <div class="carousel-card">
                    <img src="/music.png" class="carousel-img">
                    <div class="carousel-text">
                        <h2>神秘歌曲</h2>
                        <p>歌是好歌，只是有的学校不是好学校罢了</p>
                    </div>

                </div>
            </el-carousel-item>
        </el-carousel>
    </div>

</template>
<style scoped src="../style.css">
</style>