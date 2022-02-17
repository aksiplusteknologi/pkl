require('./bootstrap');
import store from '@/store'
import router from '@/router/index.js'

window.Vue = require('vue').default;

Vue.component('main-layout', require('@/layouts/Main.vue').default);

const app = new Vue({
    el: '#app',
    router, store,
});
