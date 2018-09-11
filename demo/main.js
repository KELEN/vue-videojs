import Vue from 'vue'
import App from './App.vue'
import VVideo from '../index';

import "video.js/dist/video-js.css";

Vue.use(VVideo);

new Vue({
    el: '#app',
    render: h => h(App)
})
