<template>
  <div class="index">
    <nav-bar></nav-bar>
    <header-bar></header-bar>
    <main>
      <div class="main-inner">
        <div class="tips">
          PS: 由于目前暂时没有评论功能，任何有疑问的地方或者有什么建议的话，都可以通过<a href="https://github.com/chenyinkai/cykspace">这里的Issue</a>进行沟通。
        </div>
        <section class="posts-expand" v-for="(item,i) in articles.datalist" :key="i">
          <div class="article">
            <div class="article-inner">
              <div class="title">
                <router-link :to="{ name: 'article', params: { id: item.postId }}">{{item.title}}</router-link>
              </div>
              <div class="post-meta">
                <font-awesome-icon :icon="['fas', 'calendar-times']" class="time" />
                <span class="time">发表于{{time(item.date)}}</span>
                |
                <font-awesome-icon :icon="['fas', 'folder']" class="tags" />
                <span class="tags">{{item.tags.indexOf(',') ? item.tags.replace(',', ' ') : item.tags}}</span>
                |
                <font-awesome-icon :icon="['fas', 'eye']" class="count" />
                <span class="count">阅读人数 {{item.readNum}}</span>
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
          <a href="javascript:;" class="prev" v-if="pageNow > 1" @click="prev">
            <font-awesome-icon :icon="['fas', 'angle-left']" />
          </a>
          <a href="javascript:;" @click="changePage($event)" class="page-number" :class="{current: articles.pageNum == item}" v-for="(item,i) in navArr" :key="i">{{item}}</a>
          <a href="javascript:;" class="next" v-if="pageNow < articles.total" @click="next">
            <font-awesome-icon :icon="['fas', 'angle-right']" />
          </a>
        </nav>
      </div>
    </main>
    <footer-bar v-show="isFooterBarShow"></footer-bar>
    <scroll-bar></scroll-bar>
  </div>
</template>

<script>
import headerBar from './common/headerBar'
import footerBar from './common/footerBar'
import scrollBar from './common/scrollBar'
import navBar from './common/navBar'
import { getArticleAll } from '../api'
import { formatTime } from '../util/util'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
// eslint-disable-next-line
import solid from '@fortawesome/fontawesome-free-solid'
export default {
  name: 'index',
  data() {
    return {
      articles: [],
      navArr: [],
      pageNow: 1,
      pageSize: 8,
      isFooterBarShow: false
    }
  },
  mounted() {
    document.title = '博客-善良的乌贼'
    if (sessionStorage.getItem('pageNow')) {
      this.pageNow = sessionStorage.getItem('pageNow')
    }
    this.getArticles(this.pageNow, this.pageSize)
  },
  methods: {
    getArticles(pageNum, pageSize) {
      getArticleAll({
        pageNum: pageNum,
        pageSize: pageSize
      }).then(res => {
        this.isFooterBarShow = true
        this.articles = res.data
        this.pageNow = res.data.pageNum
        for (let i = 1; i <= res.data.total; i++) {
          this.navArr.push(i)
          this.navArr = [...new Set(this.navArr)]
        }
      })
    },
    changePage(e) {
      sessionStorage.setItem('pageNow', e.target.innerText)
      this.getArticles(e.target.innerText, this.pageSize)
    },
    prev() {
      this.pageNow--
      sessionStorage.setItem('pageNow', this.pageNow)
      this.getArticles(this.pageNow, this.pageSize)
    },
    next() {
      this.pageNow++
      sessionStorage.setItem('pageNow', this.pageNow)
      this.getArticles(this.pageNow, this.pageSize)
    },
    time(date) {
      return formatTime(date, 'yyyy-mm-dd')
    }
  },
  components: {
    headerBar,
    footerBar,
    scrollBar,
    FontAwesomeIcon,
    navBar
  }
}
</script>

<style lang="less" scoped>
.main-inner {
  .tips{
    color: #ff3f1a;
    margin-top: 20px;
    font-size: 16px;
    a{
      color: #00a7e0;
    }
  }
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
        transition: all .2s ease-in-out;
        transform: scaleX(0);
      }
      &:hover::before {
        visibility: visible;
        transform: scaleX(1);
      }
    }
  }
  .time{
    color: #00a7e0;
  }
  .tags{
    color: #333;
  }
  .count{
    color: #ff3f1a;
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
      color: #fff;
      background: #222;
      border: 2px solid #222;
      text-decoration: none;
      transition: background-color .2s ease-in-out;
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
    transition: border-color .2s ease-in-out;
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
    margin: 0 8px;
    padding: 0 10px;
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
