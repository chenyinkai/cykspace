<template>
  <div class="footerBar">
    <footer>
      <div class="footer-inner">
        <font-awesome-icon :icon="['fas', 'copyright']" />
        <span>2016 - {{year}}</span>
        |
        <font-awesome-icon :icon="['fas', 'heart']" />
        <span>善良的乌贼</span>
      </div>
    </footer>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
// eslint-disable-next-line
import solid from '@fortawesome/fontawesome-free-solid'
export default {
  name: 'footerBar',
  data() {
    return {
      year: ''
    }
  },
  mounted() {
    this.year = new Date().getFullYear()
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style lang="less" scoped>
.footerBar{
  position: relative;
}
footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  min-width: 350px;
  font-size: 14px;
  color: #999;
  .footer-inner {
    text-align: center;
    margin: 20px 0;
  }
}
</style>
