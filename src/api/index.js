import axios from 'axios'
import NProgress from 'nprogress'

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://www.cykspace.com/v1/' : 'http://127.0.0.1:3000/v1/'

axios.interceptors.request.use(
  function (config) {
    NProgress.start()
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  function (response) {
    NProgress.done()
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 获取所有的文章
export const getArticleAll = (params = {}) => axios.get(`${baseUrl}articles`, {
  params
})

// 获取文章详情
export const getDetail = (postId) => axios.get(`${baseUrl}details?postId=${postId}`)

// 获取所有的标签
export const getTagsAll = () => axios.get(`${baseUrl}tags`)
