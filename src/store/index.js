/**
* @file index.js
* @author shenjp@founder.com
* @date 2019-05-26 09:04:26
*/
import Vue from 'vue';
import Vuex from 'vuex';
import IO from 'http';
import * as types from './mutation-types';
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {},
    state: {},
    actions: {},
    mutations: {}
});

export default store; // eslint-disable-line
