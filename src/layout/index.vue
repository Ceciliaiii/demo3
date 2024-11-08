<template>
    <div class="layout-container">
        <!-- 顶部导航 -->
        <div class="layout-header">
            <div class="layout-title">
                🦅神鹰黑手后台雏鹰管理系统
            </div>
            <lang style="margin-left: 55%; line-height: 50px;"></lang>
            <Avatar></Avatar>

        </div>
        <div class="layout-nav" style="display: flex;">
            <!-- 左侧菜单 -->
            <div class="layout-slider">
                <div class="layout-collapse">
                    <el-radio-group v-model="isCollapse">
                        <el-radio-button :value="false">展开</el-radio-button>
                        <el-radio-button :value="true">折叠</el-radio-button>
                    </el-radio-group>
                </div>

                <el-row class="tac">
                    <el-col :span="24">
                        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen"
                            @close="handleClose" text-color="black" active-text-color="#409EFF" :collapse="isCollapse">
                            <el-sub-menu index="1">
                                <template #title>
                                    <el-icon>
                                        <location />
                                    </el-icon>
                                    <span>菜单1</span>
                                </template>
                                <RouterLink to="/acl/menu1">
                                    <el-menu-item index="1-1">子菜单1</el-menu-item>
                                </RouterLink>
                                <RouterLink to="/acl/menu2">
                                    <el-menu-item index="1-2">子菜单2</el-menu-item>
                                </RouterLink>
                                <RouterLink to="/acl/menu3">
                                    <el-menu-item index="1-3">子菜单3</el-menu-item>
                                </RouterLink>
                                <RouterLink to="/acl/menu4">
                                    <el-sub-menu index="1-4">
                                        <template #title>子菜单4</template>
                                        <RouterLink to="/acl/menu4/menu4-1">
                                            <el-menu-item index="1-4-1">二级子菜单1</el-menu-item>
                                        </RouterLink>

                                    </el-sub-menu>
                                </RouterLink>

                            </el-sub-menu>
                            <el-menu-item index="2">
                                <el-icon><icon-menu /></el-icon>
                                <span>菜单2</span>
                            </el-menu-item>
                            <el-menu-item index="3">
                                <el-icon>
                                    <document />
                                </el-icon>
                                <span>菜单3</span>
                            </el-menu-item>
                            <el-menu-item index="4">
                                <el-icon>
                                    <setting />
                                </el-icon>
                                <span>菜单4</span>
                            </el-menu-item>
                        </el-menu>
                    </el-col>
                </el-row>
            </div>
            <div class="layout-show" style="display: flex; flex-direction: column; width: 100%;">
                <div class="layout-tabbar">
                    <Breadcrumb></Breadcrumb>

                </div>

                <!-- 内容展示区域 -->
                <div class="layout-main">
                    <RouterView></RouterView>
                </div>
            </div>
        </div>

    </div>

</template>

<script setup lang="ts" name="Layout">
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
import Breadcrumb from '../components/Breadcrumb.vue';
import Avatar from './avatar/index.vue'
import lang from '../i18n/lang.vue';

const isCollapse = ref(true)

const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

</script>

<script lang="ts">
export default {
    name: 'Layout',
}
</script>

<style scoped>
.layout_container {
    width: 100%;
    height: 100vh;
}

/* 
.layout_slider {
    width: 30%;
    height: 100vh;
    transition: all 0.3s;
}

.layout-tabbar {
    color: #000;
    margin-left: 25%;
}

.layout-main {
    position: absolute;
    padding: 20px;
    margin-top: 30px;
    margin-left: 50%;
    border-radius: 10px;
    width: 700px;
    height: 80vh;
    border: 1px solid;
    background-color: pink;
    overflow: auto;
    transition: all 0.3s;
} */

.layout-header {
    background-color: #fff;
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px dashed #3d3d42;

    .layout-title {
        float: left;
        font-weight: 700;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 25px;
    }
}

.layout-slider {
    background-color: #fff;
    width: 300px;
    height: 100vh;
    transition: all 0.3s;

    /* .tel-menu-vertical-demo{
        background-color: #839d54;
    } */
    .layout-collapse {
        text-align: center;
    }
}

.layout-tabbar {
    color: #000000;
    width: 100%;
    height: 40px;
}

.layout-main {
    width: 100%;
    flex: 1;
    border: 1px solid grey;
    border-radius: 10px;
    overflow: auto;
    transition: all 0.3s;
}



</style>