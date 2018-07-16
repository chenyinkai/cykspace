<template>
    <div id="qrcode">
        <img :src="url" alt="微信公众号" class="qrcode" title="每天推送一篇短文，让我们爱上阅读。">
        <div>每天推送一篇短文<br>欢迎关注</div>
    </div>
</template>

<script>
import qrcode from '../../assets/qrcode.jpg'
export default {
  name: 'qrcode',
  data() {
    return {
      url: qrcode
    }
  }
}
</script>

<style lang="less" scoped>
#qrcode {
  position: fixed;
  left: 10px;
  bottom: 10px;
  text-align: center;
}
.qrcode {
  width: 126px;
  height: 126px;
}
</style>
