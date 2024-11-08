<!-- <template>
    <div class="login-container">
        <h2>欢迎来到后台管理系统</h2>
        <el-form>
            <span>账号：</span>
            <el-input v-model="input" style="width: 240px" placeholder="Please input" />
            <br>
            <span>密码：</span>
            <el-input v-model="input" style="width: 240px" type="password" placeholder="Please input password"
                show-password />
            <el-button type="primary" @click="login">登录</el-button>
        </el-form>

    </div>
</template>

<script setup lang="ts" name="Login">
// import axios from "axios";
import { ref } from 'vue'
import router from "../router";

const input = ref('')
// const username = ref('');
// const password = ref('');


// const login = async () => {
//     try {
//         const response = await axios.post('/api/login', {
//             username: username.value,
//             password: password.value
//         });
//         if (response.data.success) {
//             router.push('/')
//         }
//         else {
//             console.log('Login failed:', response.data.message);
//         }
//     } catch (error) {
//         console.log('Error during login:', error);
//     }

// }


const login = () => {
    router.push('/home')
    
}
</script>

<style scoped>
.login-container {
    width: 100%;
    height: 100vh;
}
</style> -->


<template>
    <div class="login-container">
        <el-form :model="form" ref="formRef" class="login-form" :rules="rules">
            <div class="title-container"></div>
            <h3 class="title">{{ $t('login.title') }}</h3>
            <el-form-item prop="username">
                <el-icon :size="20" class="svg-container">
                    <edit />
                </el-icon>
                <!-- <svg-icon icon="user" class="svg-container"></svg-icon> -->
                <el-input v-model="form.username" />
            </el-form-item>
            <el-form-item prop="password">
                <el-icon :size="20">
                    <edit />
                </el-icon>
                <!-- <svg-icon icon="password" class="svg-container"></svg-icon> -->
                <el-input v-model="form.password" />

            </el-form-item>
            <el-button type="primary" class="login-button" @click="handleLogin(formRef)">{{ $t('login.btnTitle')
                }}</el-button>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { Edit} from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'
import router from '../router';
// import { login } from '../api/login';
import { mockLoginApi } from '../../mock/user'

interface RuleForm {
    username: String,
    password: String
}
const formRef = ref<FormInstance>()

const form = ref<RuleForm>({
    username: 'czx666',
    password: '123456'
})

// const rules = ref({
//     username: [
//         {
//             required: true,
//             message: '请输入有效的用户名',
//             trigger: 'blur'
//         }
//     ],
//     password: [
//         {
//             required: true,
//             message: '请输入有效的密码',
//             trigger: 'blur'
//         }
//     ]
// })

const rules = reactive<FormRules<RuleForm>>({
    username: [
        {
            required: true,
            message: '请输入有效的用户名',
            trigger: 'blur'
        }
    ],
    password: [
        {
            required: true,
            message: '请输入有效的密码',
            trigger: 'blur'
        }
    ]
})



// const handleLogin = () => {
//     formRef.value.validate((valid) => {
//         if(valid) {
//              alert('登录成功！！')
//         }
//         else {
//             alert('登陆失败！！')
//             return false
//         }
//     })
// }


const handleLogin = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(form.value),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // 检查响应状态码
      if (response.status === 200) {
        try {
          const data = await response.json();
          if (data.success) {
            router.push('/');
            alert('登录成功!');
          } else {
            alert('登录失败!!, 请输入有效的用户名和密码');
            console.log(fields);
          }
        } catch (error) {
          console.error('Error parsing JSON response:', error);
        }
      } else {
        console.error('返回响应状态码:', response.status);
      }
    } else {
      alert('登录失败!!, 请输入有效的用户名和密码');
      console.log(fields);
    }
  });
};
mockLoginApi();
</script>

<style scoped></style>