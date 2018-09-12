<style lang="scss">
  @import '../assets/css/vjs';
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
      },
      bindEvent () {
        if (this.videojsObject) {
          for (let listener in this.$listeners) {
            this.videojsObject.on(listener, this.$listeners[listener]);
          }
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
        me.bindEvent();
      });
    },
    updated() {
    }
  };
</script>
