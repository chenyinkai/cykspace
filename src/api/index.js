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

export const getArticleAll = (params = {}) => axios.get(`${baseUrl}articles`, {
  params
})
