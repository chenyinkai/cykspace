<template>
  <div class="index">
    <header-bar></header-bar>
    <main>
      <div class="main-inner">
        <section class="posts-expand" v-for="(item,i) in articleList" :key="i">
          <div class="article">
            <div class="article-inner">
              <div class="title">
                <router-link to="/">{{item.title}}</router-link>
              </div>
              <div class="post-meta">
                <font-awesome-icon :icon="['fas', 'calendar-times']" />
                <span>发表于{{item.date}}</span>
                |
                <font-awesome-icon :icon="['fas', 'folder']" />
                <span>{{item.tags}}</span>
              </div>
              <div class="post-body" v-html="item.desc"></div>
              <div class="post-button">
                <router-link class="btn" :to="{ name: 'article', params: { id: item.postId }}">阅读全文 »</router-link>
              </div>
              <div class="post-footer">
                <div class="post-eof"></div>
              </div>
            </div>
          </div>
        </section>
        <nav class="pagination">
          <a href="" class="prev">
            <font-awesome-icon :icon="['fas', 'angle-left']" />
          </a>
          <a href="" class="page-number">1</a>
          <a href="" class="page-number current">2</a>
          <span class="space">...</span>
          <a href="" class="page-number">7</a>
          <a href="" class="next">
            <font-awesome-icon :icon="['fas', 'angle-right']" />
          </a>
        </nav>
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
export default {
  name: 'index',
  data() {
    return {
      articleList: []
    }
  },
  mounted() {
    this.$http.get('/v1/articles').then(res => {
      this.articleList = res.data.datalist
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
.main-inner {
  .posts-expand {
    padding-top: 40px;
    animation: down 0.5s 0.5s linear;
    animation-fill-mode: both;
    position: relative;
    opacity: 0;
    top: -10px;
  }
  .title {
    text-align: center;
    word-break: break-word;
    font-weight: 400;
    margin: 20px 0 15px;
    font-size: 20px;
    line-height: 1.5;
    a {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #000;
        visibility: hidden;
        transform: scaleX(0);
        transition-duration: 0.2s;
        transition-timing-function: ease-in-out;
        transition-delay: 0s;
      }
      &:hover::before {
        visibility: visible;
        transform: scaleX(1);
      }
    }
  }
  .post-meta {
    margin: 3px 0 60px 0;
    color: #999;
    font-family: 'Roboto Slab', 'Roboto Slab', 'PingFang SC', 'Microsoft YaHei',
      sans-serif;
    font-size: 12px;
    text-align: center;
  }
  .post-button {
    margin-top: 40px;
    text-align: center;
    .btn {
      display: inline-block;
      padding: 0 20px;
      font-size: 14px;
      color: #fff;
      background: #222;
      border: 2px solid #222;
      text-decoration: none;
      border-radius: 0;
      transition-property: background-color;
      transition-duration: 0.2s;
      transition-timing-function: ease-in-out;
      transition-delay: 0s;
      line-height: 2;
      &:hover {
        border-color: #222;
        color: #222;
        background: #fff;
      }
    }
  }
  .post-footer {
    .post-eof {
      display: block;
      margin: 80px auto 60px;
      width: 8%;
      height: 1px;
      background: #ccc;
      text-align: center;
    }
  }
  .pagination {
    margin: 120px 0 40px;
    text-align: center;
    border-top: 1px solid #eee;
    line-height: 2;
    a {
      color: #555;
    }
  }
  .pagination .prev,
  .pagination .next,
  .pagination .page-number {
    border-bottom: 0;
    border-top: 1px solid #eee;
    transition-property: border-color;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
    &:hover {
      border-top-color: #555;
    }
  }
  .pagination .prev,
  .pagination .next,
  .pagination .page-number,
  .pagination .space {
    display: inline-block;
    position: relative;
    top: -1px;
    margin: 0 10px;
    padding: 0 11px;
  }
  .pagination .space {
    padding: 0;
    margin: 0;
  }
  .pagination .page-number.current {
    color: #fff;
    background: #ccc;
    border-top-color: #ccc;
  }
}
</style>
