<template>
  <div class="tags">
    <header-bar></header-bar>
    <main>
      <div class="main-inner">
        <div class="content">
          <div class="posts-expand">
            <div class="post-block">
              <div class="post-body">
                <div class="tag-cloud">
                  <div class="tag-cloud-title">
                    目前共计50个标签
                  </div>
                  <div class="tag-cloud-tags">
                    <router-link to="/">css</router-link>
                    <router-link to="/">hahbkcs</router-link>
                    <router-link to="/">css</router-link>
                    <router-link to="/">css</router-link>
                    <router-link to="/">web</router-link>
                    <router-link to="/">js</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <router-view></router-view>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import headerBar from './common/headerBar'
import footerBar from './common/footerBar'
export default {
  name: 'tags',
  data() {
    return {
      msg: 'tags'
    }
  },
  components: {
    headerBar,
    footerBar
  }
}
</script>

<style lang="less" scoped>
.content {
  min-height: 320px;
  .posts-expand {
    padding-top: 40px;
  }
  .post-block {
    opacity: 0;
    top: -10px;
    position: relative;
    animation: down 0.5s 0.5s linear;
    animation-fill-mode: both;
  }
  .tag-cloud {
    text-align: center;
  }
  .tag-cloud-title {
    line-height: 2;
  }
  .tag-cloud-tags {
    a {
      display: inline-block;
      margin: 10px;
      color: #555;
      text-decoration: none;
      outline: none;
      border-bottom: 1px solid #999;
      word-wrap: break-word;
      &:hover {
        color: #222;
        border-bottom-color: #222;
      }
    }
  }
}
</style>
