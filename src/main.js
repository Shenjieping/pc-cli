// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

// 引入公共样式
import '@/assets/style/global.sass';
// 用于全局覆盖element-ui的样式，建议使用命名空间
import '@/assets/style/element.sass';
// 图片icon 统一放置
import '@/assets/style/icon.sass';

// 使用element-ui
import {
    Button,
    Select
} from 'element-ui';
Vue.use(Button);
Vue.use(Select);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});
