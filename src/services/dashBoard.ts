/**
 * @author heart
 * @description
 * @Date 2022-05-18
 */

import request from '../utils/request'
import type {
  addressInfo,
  temperatureInterface
} from '../types/services/dashBoard'
import type { AxiosPromise } from 'axios'
import type { BaseResponse } from '../types/baseResponse'

export function getTemperature(
  data: addressInfo
): AxiosPromise<BaseResponse<temperatureInterface>> {
  return request({
    url: '/v1/getLocationTemperature',
    method: 'post',
    data
  })
}
