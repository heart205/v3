import axios from 'axios'
import { msgNotification } from '../utils/notification'
import { messageType } from '../constant/messageType'
import { addLoading, cancelLoading } from './loading'
const request = axios.create({
  baseURL: 'http://localhost:3000/',
  // baseURL: 'http://192.168.0.105:3000/',
  timeout: 15000
})

request.interceptors.request.use(
  (config) => {
    // ... 请求拦截所要做的操作
    addLoading()
    return config
  },
  (error) => {
    console.log('request error :', error)
    cancelLoading()
  }
)

request.interceptors.response.use(
  (response) => {
    console.log(response)
    cancelLoading()
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
    cancelLoading()
    if (error.code === 'ECONNABORTED') {
      msgNotification(messageType.ERROR, '请求超时')
      return Promise.reject(error.message)
    } else if (
      // 接口404
      error.code === 'ERR_BAD_REQUEST' ||
      // 网络请求失败
      error.code === 'ERR_NETWORK'
    ) {
      msgNotification(messageType.ERROR, error.message)
      return Promise.reject(error.message)
    }
  }
)
export default request
