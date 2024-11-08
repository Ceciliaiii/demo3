import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router';
import 'element-plus/dist/index.css'
import i18n from './i18n';
import '../mock/user'
import SvgIcon from './icons'

const app = createApp(App);

SvgIcon(app)
app.use(ElementPlus)
app.use(router);
app.use(i18n)
app.mount('#app')
