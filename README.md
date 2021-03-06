# vue-videojs

> 基于[videojs](https://github.com/videojs/video.js)的封装，方便使用，无污染

### 安装

```
npm install video.js vue-videojs -S
```

### 引入vue-video组件

```javascript
import VVideo from 'vue-videojs'
// use global
Vue.use(VVideo);

// or use in component .vue
components: {
  VVideo
}
```

### 使用

```
<style lang="scss">
  .video-js {
    width: 600px;
    height: 400px;
  }
</style>
<template>
  <div id="app">
    <v-video ref="video" width="600" height="400"
         poster="//vjs.zencdn.net/v/oceans.png"
         class="video-js"
         webkit-playsinline
         playsinline
         x-webkit-airplay="allow"
         x5-video-player-type="h5"
         x5-video-player-fullscreen="true"
         x5-video-orientation="portraint"
         controls :sources="videos" :options="playOpts.options" @ready="videoReady" @ended="videoEnd"></v-video>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      videos: [
        'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
      ],
      playOpts: {
        options: {
          controls: true,
          // autoplay: true,
          preload: 'auto',
          techOrder: ["html5"]
          // aspectRatio: "16:9"   // 配置了这个，class设置的样式无效
        }
      }
    }
  },
  methods: {
    videoEnd () {
      console.log('video end');
    },
    videoReady () {
      var video = this.$refs.video.videojsObject;
      // video.play();
    }
  }
}
</script>
```

#### 怎么videojs获取实例对象？

在ready回调里可以通过 ```this.$refs.video.videojsObject;``` 来获取videojs的实例对象

