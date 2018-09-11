import VVideo from './src/components/VVideo.vue';

VVideo.install = function(Vue) {
    Vue.component(VVideo.name, VVideo)
};

export default VVideo;
