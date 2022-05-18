/**
 * @author heart
 * @description 获取经纬度
 * @Date 2022-05-18
 */

export function useGeolocation(): Promise<GeolocationPosition> {
  return new Promise<GeolocationPosition>((resolve, reject) => {
    if ('geolocation' in navigator) {
      /* 地理位置服务可用 */
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position)
          resolve(position)
        },
        (error) => {
          console.log(error)
        },
        {
          timeout: 1000 * 10
        }
      )
    } else {
      /* 地理位置服务不可用 */
      reject(new Error('地理位置服务不可用'))
    }
  })
}
