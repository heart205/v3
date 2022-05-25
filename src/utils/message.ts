import { message } from 'ant-design-vue'
import type { messageType } from '../constant/messageType'

export default <T>(type: messageType, msg: string) => {
  message[type](msg)
}

export const msgSuccess = (msg: string) => {
  message.success(msg)
}

export const msgError = (msg: string) => {
  message.error(msg)
}
