/**
 * @author heart
 * @description user信息
 * @Date 2022-05-16
 */
import type { User } from '../../types/store/user'
const state: User = {
  userName: 'heart',
  userId: 1
}

export default {
  namespace: true,
  state
}
