<template>
    <div class="avatar-container">
        <div class="username">
            <span>Cecilia</span>
        </div>
        <el-dropdown>
            <span class="el-dropdown-link">
                <el-avatar :size="50" :src="circleUrl" />
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import router from '../../router';

const circleUrl = ref('https://wx1.sinaimg.cn/thumb300/007CuGLKgy1hvbuj3p31zj31uo35skjn.jpg')



const logout = () => {
        router.push('/login')
}
</script>

<style scoped>
.avatar-container {
    display: flex;
    float: right;
}

.username {
    margin-right: 30px;
    font-weight: 700;
    font-size: 20px;
}
</style>