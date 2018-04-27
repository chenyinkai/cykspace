<template>
  <div class="about">
    <header-bar></header-bar>
    <main>
      <div class="main-inner">
        <div class="content">
          <div>
            sss
          </div>
        </div>
      </div>
    </main>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import headerBar from './common/headerBar'
import footerBar from './common/footerBar'
export default {
  name: 'about',
  data() {
    return {
      msg: 'about'
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
