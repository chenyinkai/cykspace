<template>
  <div class="index">
    <header-bar></header-bar>
    <div class="article">
      <div class="title">css和js实现持续的动画效果</div>
      <div>
        <font-awesome-icon :icon="['fas', 'calendar-times']" />
        <span>发表于2018-04-19</span>
        |
        <font-awesome-icon :icon="['fas', 'folder']" />
        <router-link to="/tags">css</router-link>
      </div>
      <div>在 sf 上看到一个问题, js 是怎么实现持续的动画效果的? 第一时间想到的是定时器, 后来看到有答案提到了 requestAnimationFrame, 由于之前没有对相关方法有所了解, 于是便去查了下, 顺便也复习了下 animation 的使用.</div>
      <div>
        <div>阅读全文 »</div>
      </div>
      <div>
        <div></div>
      </div>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import headerBar from './common/headerBar'
import footerBar from './common/footerBar'
export default {
  name: 'index',
  data() {
    return {
      msg: 'index'
    }
  },
  components: {
    headerBar,
    footerBar
  }
}
</script>

<style lang="less" scoped>

</style>
