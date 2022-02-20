// window._ = require('lodash');
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios')
window.toastr = require('toastr')

import store from '@/store'
toastr.options = {
    newestOnTop: true,
    closeButton: false,
    progressBar: true,
    preventDuplicates: false,
    showMethod: 'slideDown',
    timeOut: 4000, //default timeout,
}

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

window.axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    // console.log(error.response)
    if (401 === error.response.status) {
        toastr.error(error.response.data.message + '<br> Anda tidak diizinkan mengakses halaman ini', 'Oopps!')

        store.dispatch('logout')
            .then(() => {
                window.location.href = "/login"
            })

        setTimeout(function () {
            window.location = '/';
        }, 3000);


    } else {
        return Promise.reject(error);
    }
});

if (localStorage.getItem('token')) {
    window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
}

let token = document.head.querySelector('meta[name="csrf-token"]')

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token')
}
