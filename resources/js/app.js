require('./bootstrap');

window.Vue = require('vue').default;

Vue.component('main-layout', require('@/layouts/Main.vue').default);

const app = new Vue({
    el: '#app',
});
