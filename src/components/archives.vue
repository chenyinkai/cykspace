<template>
  <div class="archives">
    <header-bar></header-bar>
    <main>
      <div class="main-inner">
        <div class="content">
          <div class="post-expand">
            <div class="posts-collapse">
              <span class="archive-move-on"></span>
              <span class="archive-page-counter">
                OK! 目前共计 37 篇日志。 继续努力。
              </span>
              <div v-for="(item,i) in msg" :key="i">
                <div class="collection-title">
                  <h3 class="archive-year">{{item.year}}</h3>
                </div>
                <article class="post" v-for="(article,y) in item.articles" :key="y">
                  <div class="post-header">
                    <div class="post-meta">{{article.date}}</div>
                    <div class="post-title">
                      <router-link to="/">{{article.title}}</router-link>
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
export default {
  name: 'archives',
  data() {
    return {
      msg: [
        {
          year: 2018,
          articles: [
            {
              date: '03-24',
              title: 'css和js实现持续的动画效果'
            },
            {
              date: '03-24',
              title: 'css和js实现持续的动画效果'
            },
            {
              date: '03-24',
              title: 'css和js实现持续的动画效果'
            },
            {
              date: '03-24',
              title: 'css和js实现持续的动画效果'
            }
          ]
        },
        {
          year: 2017,
          articles: [
            {
              date: '03-24',
              title: 'css和js实现持续的动画效果'
            },
            {
              date: '03-24',
              title: 'css和js实现持续的动画效果'
            },
            {
              date: '03-24',
              title: 'css和js实现持续的动画效果'
            },
            {
              date: '03-24',
              title: 'css和js实现持续的动画效果'
            }
          ]
        },
        {
          year: 2016,
          articles: [
            {
              date: '03-24',
              title: 'css和js实现持续的动画效果'
            },
            {
              date: '03-24',
              title: 'css和js实现持续的动画效果'
            },
            {
              date: '03-24',
              title: 'css和js实现持续的动画效果'
            },
            {
              date: '03-24',
              title: 'css和js实现持续的动画效果'
            }
          ]
        },
        {
          year: 2015,
          articles: [
            {
              date: '03-24',
              title: 'css和js实现持续的动画效果'
            },
            {
              date: '03-24',
              title: 'css和js实现持续的动画效果'
            },
            {
              date: '03-24',
              title: 'css和js实现持续的动画效果'
            },
            {
              date: '03-24',
              title: 'css和js实现持续的动画效果'
            }
          ]
        },
        {
          year: 2014,
          articles: [
            {
              date: '03-24',
              title: 'css和js实现持续的动画效果'
            },
            {
              date: '03-24',
              title: 'css和js实现持续的动画效果'
            },
            {
              date: '03-24',
              title: 'css和js实现持续的动画效果'
            },
            {
              date: '03-24',
              title: 'css和js实现持续的动画效果'
            }
          ]
        }
      ]
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
  }
  .post-meta {
    position: absolute;
    font-size: 12px;
    left: 20px;
    top: 5px;
  }
  .post-title {
    margin: 20px 0 15px 60px;
    font-size: 16px;
    font-weight: normal;
    line-height: inherit;
    a {
      color: #666;
      border-bottom: none;
    }
  }
}

@media (max-width: 767px) {
  .content {
    .posts-collapse {
      margin: 0 20px;
    }
  }
}
</style>
