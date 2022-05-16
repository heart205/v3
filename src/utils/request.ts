import axios from 'axios'
import { msgNotification } from '../utils/notification'
import { messageType } from '../constant/messageType'
const request = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 5000
})

request.interceptors.request.use(
  (config) => {
    // ... 请求拦截所要做的操作
    return config
  },
  (error) => {
    console.log('request error :', error)
  }
)

request.interceptors.response.use(
  (response) => {
    console.log(response)
    if (
      (response.data && response.data.code == 201) ||
      response.data.code == 200
    ) {
      return response
    }
    msgNotification(
      messageType.ERROR,
      response.data.message,
      response.data.data
    )
    return Promise.reject(response)
  },
  (error) => {
    console.log('response error :', error)
    if (error.code === 'ECONNABORTED') {
      msgNotification(messageType.ERROR, '请求超时')
      return Promise.reject(error.message)
    } else if (error.code === 'ERR_BAD_REQUEST') {
      // 接口404
      msgNotification(messageType.ERROR, error.message)
      return Promise.reject(error.message)
    }
  }
)
export default request
