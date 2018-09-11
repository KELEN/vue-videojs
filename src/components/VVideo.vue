<style lang="scss" scoped>
  @import "~video.js/dist/video-js.css";
</style>
<template>
  <video ref="video" v-bind="$attrs"><source v-for="(s, idx) in sourcesWithType" :key="idx" :src="s.src" :type="s.type">
  </video>
</template>
<script>
  import videojs from 'video.js'

  export default {
    name: "v-video",
    props: {
      sources: {
        type: Array,
        default: []
      },
      options: {
        type: Object,
        defautl: {}
      }
    },
    data() {
      return {
        sourcesWithType: [],
        style: {}
      };
    },
    methods: {
      // 获取扩展名
      getExtName(val) {
        let match = /.(webm|mp4|ogg)$/.exec(val);
        if (match) {
          return match[1];
        } else {
          // 格式不支持
          return null;
        }
      }
    },
    created() {
      for (let i = 0; i < this.sources.length; i++) {
        let type = this.getExtName(this.sources[i]);
        if (type) {
          this.sourcesWithType.push({
            src: this.sources[i],
            type: `video/${ type }`
          })
        }
      }
    },
    mounted() {
      let me = this;
      this.videojsObject = videojs(this.$refs.video, this.options, function () {
        let { ready, ended } = me.$listeners;
        if (typeof ready == 'function') {
          ready.call(this)
        }
        if (typeof ended == 'function') {
          this.on('ended', ended);
        }
      });
    },
    updated() {
    }
  };
</script>
