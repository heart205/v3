import { notification } from 'ant-design-vue'
import type { messageType } from '../constant/messageType'

export const msgNotification = (
  type: messageType,
  msg: string,
  data: string | null | undefined = null
) => {
  notification[type]({
    message: msg,
    description: data
  })
}
