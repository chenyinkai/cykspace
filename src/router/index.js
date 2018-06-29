// 加载优化 -- 按需加载，cdn
// import Vue from 'vue'
import Router from 'vue-router'
// import about from '@/components/about'
// import archives from '@/components/archives'
// import index from '@/components/index'
// import article from '@/components/article'
// import tags from '@/components/tags'
// import tagArticle from '@/components/tagArticle'
const about = r => require.ensure([], () => r(require('@/components/about')))
const archives = r => require.ensure([], () => r(require('@/components/archives')))
const index = r => require.ensure([], () => r(require('@/components/index')))
const article = r => require.ensure([], () => r(require('@/components/article')))
const tags = r => require.ensure([], () => r(require('@/components/tags')))
const tagArticle = r => require.ensure([], () => r(require('@/components/tagArticle')))

// Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/article/:id',
      name: 'article',
      component: article
    },
    {
      path: '/archives',
      name: 'archives',
      component: archives
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/tags',
      name: 'tags',
      component: tags
    },
    {
      path: '/tags/:id',
      name: 'tagArticle',
      component: tagArticle
    }
  ]
})
