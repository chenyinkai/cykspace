<template>
  <div id="app">
    <router-view/>
    <div class="footer-inner">
      <span id="busuanzi_container_site_pv">本站总访问量
        <span id="busuanzi_value_site_pv"></span>次</span>
      |
      <span id="busuanzi_container_site_uv">
        您是第
        <span id="busuanzi_value_site_uv"></span>个来访者
      </span>
      |
      <a href="http://www.miitbeian.gov.cn/">浙ICP备18020724号-1</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
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
