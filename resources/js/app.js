require('./bootstrap');
import store from '@/store'
import router from '@/router/index.js'

// Load Vue-Good-Table
import 'vue-good-table/dist/vue-good-table.css'
import VueGoodTablePlugin from 'vue-good-table'

window.Vue = require('vue').default;

Vue.component('main-layout', require('@/layouts/Main.vue').default);
Vue.component('Header', require('@/layouts/partials/Header.vue').default);
Vue.component('Required', require('@/layouts/partials/Required.vue').default);

Vue.use(VueGoodTablePlugin);

const app = new Vue({
    el: '#app',
    router, store,
});
