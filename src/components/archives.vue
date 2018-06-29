<template>
  <div class="archives">
    <main>
      <div class="main-inner">
        <div class="content">
          <div class="post-expand">
            <div class="posts-collapse" v-if="articles.length>0">
              <span class="archive-move-on"></span>
              <span class="archive-page-counter">
                OK! 目前共计 {{total}} 篇日志。 继续努力。
              </span>
              <div v-for="(item,i) in articles" :key="i">
                <div class="collection-title">
                  <h3 class="archive-year">{{item.year}}</h3>
                </div>
                <article class="post" v-for="(article,y) in item.list" :key="y">
                  <div class="post-header">
                    <div class="post-meta">{{time(article.date)}}</div>
                    <div class="post-title">
                      <router-link :to="{ name: 'article', params: { id: article.postId }}">{{article.title}}</router-link>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { getArticleAll } from '../api'
import { formatTime } from '../util/util'
export default {
  name: 'archives',
  data() {
    return {
      articles: [],
      total: ''
    }
  },
  mounted() {
    document.title = '归档-博客-善良的乌贼'
    getArticleAll().then(res => {
      this.articles = res.data.datalist
      this.total = res.data.total
    })
  },
  methods: {
    time(date) {
      return formatTime(date, 'mm-dd')
    }
  }
}
</script>

<style lang="less" scoped>
@import '../style/archives-style.less';
</style>
