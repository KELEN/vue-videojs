import Vue from 'vue'
import App from './App.vue'
import VVideo from '../index';

Vue.use(VVideo);

new Vue({
    el: '#app',
    render: h => h(App)
})