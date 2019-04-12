<template>
  <div id="app">
    <nav-bar></nav-bar>
    <header-bar></header-bar>
    <router-view/>
    <footer-bar></footer-bar>
    <scroll-bar></scroll-bar>
    <div class="footer-inner">
      <a href="http://www.miitbeian.gov.cn/">浙ICP备18020724号-1</a>
    </div>
    <qrcode></qrcode>
  </div>
</template>

<script>
import headerBar from './components/common/headerBar'
import footerBar from './components/common/footerBar'
import scrollBar from './components/common/scrollBar'
import navBar from './components/common/navBar'
import qrcode from './components/common/qrcode'
export default {
  name: 'App',
  components: {
    headerBar,
    footerBar,
    scrollBar,
    navBar,
    qrcode
  }
}
</script>

<style lang="less" scoped>
.footer-inner {
  font-size: 14px;
  color: #999;
  text-align: center;
  margin: 5px 0;
}
</style>
