/**
* @file index.js
* @author shenjp@founder.com
* @date 2019-05-26 10:08:04
*/
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: () => import(/* webpackChunkName: "HelloWorld" */ '@/components/HelloWorld')
        }
    ]
});
