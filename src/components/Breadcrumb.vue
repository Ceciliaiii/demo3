<template>
  <div>
    <el-breadcrumb separator=">">
                        <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">
                          <span class="no-redirect"  v-if="index === breadcrumbList.length - 1">{{ $t(`${item.name }`)}}</span>
                          <span class="redirect" v-else @click="handleRedirect(item.path)">{{ $t(`${item.name }`)}}</span>
                        </el-breadcrumb-item>
                        <!-- <el-breadcrumb-item>c
                            <a href="/acl/menu1">菜单1</a>
                        </el-breadcrumb-item>
                        <el-breadcrumb-item>
                            <a href="/acl/menu2">菜单2</a>
                        </el-breadcrumb-item>
                        <el-breadcrumb-item>
                            <a href="/acl/menu3">菜单3</a>
                        </el-breadcrumb-item> -->
                    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue';
import { RouteLocationAsPathGeneric, RouteLocationAsRelativeGeneric, useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

console.log(route.matched);

const breadcrumbList = ref([])


const initBreadcrumbList = () => {
  breadcrumbList.value = route.matched

}

const handleRedirect = (path: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric) => {
  router.push(path)
}

watch(route, () => {
  initBreadcrumbList()
}, { deep: true, immediate: true})

</script>

<style scoped>
.no-redirect{
  color:grey ;
  cursor: text;
}

.redirect {
  color: #000000;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: rgb(155, 100, 109);
  }
}
</style>