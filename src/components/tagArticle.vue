<template>
  <div class="archives">
    <header-bar></header-bar>
    <main>
      <div class="main-inner">
        <div class="content">
          <div class="post-expand">
            <div class="posts-collapse" v-if="articles.articles">
              <span class="archive-move-on"></span>
              <span class="archive-page-counter">
                OK! 目前在 {{articles.tagName}} 标签下共计 {{articles.articles.length}} 篇日志。 继续努力。
              </span>
              <div class="collection-title">
                  <h3 class="archive-year">{{articles.tagName}}</h3>
                </div>
              <div v-for="(item,i) in articlesReverse" :key="i">
                <article class="post">
                  <div class="post-header">
                    <div class="post-meta">{{time(item.date)}}</div>
                    <div class="post-title">
                      <router-link :to="{ name: 'article', params: { id: item.postId }}">{{item.title}}</router-link>
                    </div>
                  </div>
                </article>
              </div>
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
import { getTagArticle } from '../api'
import { formatTime } from '../util/util'
export default {
  name: 'archives',
  data() {
    return {
      articles: {},
      articlesReverse: []
    }
  },
  mounted() {
    getTagArticle(this.$route.params.id).then(res => {
      this.articles = res.data
      this.articlesReverse = res.data.articles.reverse()
      document.title = `${res.data.tagName}-博客-善良的乌贼`
    })
  },
  methods: {
    time(date) {
      return formatTime(date, 'yyyy-mm-dd')
    }
  },
  components: {
    headerBar,
    footerBar,
    scrollBar
  }
}
</script>

<style lang="less" scoped>
.content {
  min-height: 320px;
  .posts-expand {
    padding-top: 40px;
  }
  .posts-collapse {
    position: relative;
    margin-left: 55px;
    top: -10px;
    opacity: 0;
    animation: down 0.5s 0.5s linear;
    animation-fill-mode: both;
    &::after {
      content: ' ';
      position: absolute;
      top: 20px;
      left: 0;
      margin-left: -2px;
      width: 4px;
      height: 100%;
      background: #f5f5f5;
      z-index: -1;
    }
  }
  .archive-move-on {
    position: absolute;
    top: 11px;
    left: 0;
    margin-left: -6px;
    width: 10px;
    height: 10px;
    opacity: 0.5;
    background: #555;
    border: 1px solid #fff;
    border-radius: 50%;
  }
  .archive-page-counter {
    position: relative;
    top: 3px;
    left: 20px;
    line-height: 2;
  }
  .collection-title {
    position: relative;
    margin: 60px 0;
    line-height: 2;
    &::before {
      content: ' ';
      position: absolute;
      left: 0;
      top: 50%;
      margin-left: -4px;
      margin-top: -4px;
      width: 8px;
      height: 8px;
      background: #bbb;
      border-radius: 50%;
    }
  }
  .archive-year {
    margin-left: 20px;
    font-size: 20px;
    margin-left: 20px;
  }
  .post {
    margin: 30px 0;
  }
  .post-header {
    position: relative;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
    transition-property: border;
    border-bottom: 1px dashed #ccc;
    line-height: 2;
    &::before {
      content: ' ';
      position: absolute;
      left: 0;
      top: 12px;
      width: 6px;
      height: 6px;
      margin-left: -4px;
      background: #bbb;
      border-radius: 50%;
      border: 1px solid #fff;
      transition-duration: 0.2s;
      transition-timing-function: ease-in-out;
      transition-delay: 0s;
      transition-property: background;
    }
    &:hover{
      border-bottom-color: #666;
      &::before{
        background: #666;
      }
    }
  }
  .post-meta {
    position: absolute;
    font-size: 12px;
    left: 20px;
    top: 5px;
  }
  .post-title {
    margin: 20px 0 15px 85px;
    font-size: 16px;
    font-weight: normal;
    line-height: inherit;
    a {
      color: #666;
      border-bottom: none;
    }
  }
}

@media screen and(max-width: 767px) {
  .content {
    .posts-collapse {
      margin: 0 20px;
    }
  }
}
</style>
