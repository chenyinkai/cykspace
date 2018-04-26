<template>
  <div class="scrollBar">
    <div :class="['back-to-top', isBackTopOn?'back-to-top-on':'back-to-top-down']" @click="goTop">
      <font-awesome-icon :icon="['fas', 'arrow-up']" />
      <span class="scrollpercent">
        <span>{{scrollPercent}}</span>%
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'scrollBar',
  data() {
    return {
      isBackTopOn: false,
      scrollPercent: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.showBacktopIcon)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.showBacktopIcon)
  },
  methods: {
    showBacktopIcon() {
      let scrollDistance =
        document.body.offsetHeight - document.documentElement.clientHeight
      let scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop
      this.scrollPercent = parseInt(Math.ceil(scrollTop / scrollDistance * 100))
      if (scrollTop > 100) {
        this.isBackTopOn = true
      } else {
        this.isBackTopOn = false
      }
    },
    goTop() {
      let timer = setInterval(function() {
        let scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop
        let ispeed = Math.floor(-scrollTop / 8)
        if (scrollTop === 0) {
          clearInterval(timer)
        }
        document.documentElement.scrollTop = document.body.scrollTop =
          scrollTop + ispeed
      }, 1000 / 60)
    }
  }
}
</script>

<style lang="less" scoped>
.back-to-top {
  box-sizing: border-box;
  position: fixed;
  bottom: -50px;
  right: 30px;
  z-index: 1050;
  padding: 6px;
  width: initial;
  background: #222;
  font-size: 12px;
  opacity: 0;
  color: #fff;
  cursor: pointer;
  text-align: center;
}
.back-to-top-on {
  animation: backTop 0.2s linear;
  animation-fill-mode: both;
}
.back-to-top-down {
  animation: backDown 0.2s linear;
  animation-fill-mode: both;
}
@keyframes backTop {
  to {
    bottom: 20px;
    opacity: 1;
  }
}
@keyframes backDown {
  from {
    bottom: 20px;
    opacity: 1;
  }
  to {
    bottom: -50px;
    opacity: 0;
  }
}
</style>
