<template>
    <el-card>
        <el-row :gutter="20" class="header">
            <el-col :span="7">
                <el-input :placeholder="$t('table.placeholder')" clearable v-model="queryForm.query" style="border: 1px solid grey; border-radius: 5px;"></el-input>
            </el-col>
            <el-button type="primary" :icon="Search">{{ $t('table.search') }}</el-button>
            <el-button type="primary">{{ $t('table.adduser') }}</el-button>
        </el-row>

        <el-table :data="tableData" style="width: 100%">
            <el-table-column :width="item.width" :prop="item.prop" :label="$t(`table.${item.label}`)" v-for="(item, index) in options" :key="index">
              <template v-slot="{row}" v-if="item.prop === 'mg_state'">
                <el-switch v-model="row.mg_state" />
              </template>
              <template #default v-if="item.prop === 'action'" >
                <el-button type="primary" size="small">Primary</el-button>
                <el-button type="warning" size="small">Warning</el-button>
                <el-button type="danger" size="small">Danger</el-button>
                
              </template>
            </el-table-column>
        </el-table>
    </el-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue'
// import { getUser } from '../api/users';
import { options } from '../layout/users/options';

const queryForm = ref({
    query: '',
    pagenum: 1,
    pagesize: 2
})


const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
])


// const initGetUsersList = async () => {
//      const res = await getUser(queryForm.value)
//      console.log(res);
     
// }

// initGetUsersList()
</script>

<style scoped>
.header {
    padding-bottom: 16px;
    box-sizing: border-box;
}
</style>