<template>
  <div class="articles">
    <header-bar></header-bar>
    <main>
      <div class="main-inner">
        <div class="content">
          <div class="post-expand">
            <div class="comment-body markdown-body" v-html="detail.detail">
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer-bar></footer-bar>
    <scroll-bar></scroll-bar>
  </div>
</template>

<script>
import headerBar from './common/headerBar'
import footerBar from './common/footerBar'
import scrollBar from './common/scrollBar'
import {getDetail} from '../api'
export default {
  name: 'articles',
  data() {
    return {
      detail: {}
    }
  },
  mounted() {
    getDetail(this.$route.params.id).then(res => {
      this.detail = res.data
    })
  },
  components: {
    headerBar,
    footerBar,
    scrollBar
  }
}
</script>

<style lang="less" scoped>
.comment-body {
  width: 100%;
  padding: 15px;
  overflow: visible;
  font-size: 14px;
  color: #24292e;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}
.markdown-body blockquote {
  margin-left: 0;
}
a {
  color: #0366d6;
  text-decoration: none;
}
</style>
