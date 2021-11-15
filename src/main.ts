import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { store } from './store'
import router from './router'
import i18n from './plugins/i18n/index';
import '@/mock/index'
import '@/assets/css/theme.less';

createApp(App)
.use(i18n)
.use(Antd)
.use(store)
.use(router)
.mount('#app')
