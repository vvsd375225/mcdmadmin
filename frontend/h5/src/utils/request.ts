import axios from 'axios'

const request = axios.create({ baseURL: 'https://www.mcdmadmin.cn', timeout: 10000 })
request.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) config.headers.token = token
  return config
})
request.interceptors.response.use(r => r.data, err => Promise.reject(err))
export default request
