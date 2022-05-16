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
  }
)
export default request
