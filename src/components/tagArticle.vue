<template>
  <div class="archives">
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
                    <div class="post-meta">{{time(item[0].date)}}</div>
                    <div class="post-title">
                      <router-link :to="{ name: 'article', params: { id: item[0].postId }}">{{item[0].title}}</router-link>
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
  }
}
</script>

<style lang="less" scoped>
@import '../style/archives-style.less';

.content .post-title {
    margin-left: 85px;
}
</style>
