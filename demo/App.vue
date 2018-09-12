<style lang="scss">
  .video-js {
    width: 100%;
    height: 200px;
  }
  .video-js.vjs-fullscreen {
  }

  .video-show {
    visibility: visible;
    opacity: 1;
  }
  .video-hide {
    visibility: hidden;
    opacity: 1;
  }
</style>
<template>
  <div id="app">
		<!--<v-video ref="video" width="600" height="400"
             poster="//vjs.zencdn.net/v/oceans.png"
             class="video-js"
             webkit-playsinline
             playsinline
             x-webkit-airplay="allow"
             x5-video-player-type="h5"
             x5-video-player-fullscreen="false"
             controls :sources="videos" :options="playOpts.options"
             @ready="videoReady"
             @ended="videoEnd"
             @pause="videoPause"
             @fullscreenchange="fullScreenChange"
             @x5videoenterfullscreen="x5videoenterfullscreen"
    ></v-video>
    <br>-->
    <button @click="requestFullScreen">全屏</button>
    <button @click="getVideoEl">获取video元素</button>

    <video :class="[showVideo ? 'video-show': 'video-hide']" ref="video2" src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" width="300" height="150"
           x5-video-player-type="h5"
           x5-video-player-fullscreen="true" controls></video>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
  	return {
  	  showVideo: false,
  	  videos: [
  	    'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
      ],
      playOpts: {
  	    options: {
          controls: true,
          // autoplay: true,
          preload: 'none',
          techOrder: ["html5"]
          // aspectRatio: "16:9"   // 配置了这个，class设置的样式无效
        }
      }
    }
  },
  mounted () {
    this.$refs.video2.addEventListener('x5videoenterfullscreen', () => {
      this.showVideo = true;
    })
    this.$refs.video2.addEventListener('x5videoexitfullscreen', () => {
      this.showVideo = false;
    })
  },
  methods: {
    x5videoenterfullscreen() {
      alert(3213123);
    },
    videoPause() {
      console.log('video pause')
    },
    fullScreenChange () {
      alert(this.video.isFullscreen())
      if (this.video.isFullscreen()) {
        this.video.play();
      } else {
        this.video.pause();
      }
    },
    videoEnd () {
      console.log('video end');
    },
    videoReady () {
      this.video = this.$refs.video.videojsObject;
      // video.play();
    },
    requestFullScreen () {
      this.video && this.video.requestFullscreen()
      this.$refs.video2 && this.$refs.video2.play();
    },
    getVideoEl() {
      console.log(this.video);
    },
  }
}
</script>

<style lang="scss">

</style>
