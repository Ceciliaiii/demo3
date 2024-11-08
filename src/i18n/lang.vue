<template>
    <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
            语言切换<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item command="zh" :disabled="currentLanguage === 'zh'">中文</el-dropdown-item>
                <el-dropdown-item command="en" :disabled="currentLanguage === 'en'">English</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const i18n = useI18n()
const currentLanguage = computed(() => {
    return i18n.locale.value
})

</script>

<style scoped>

</style>