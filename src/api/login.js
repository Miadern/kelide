import request from '@/utils/request'

/**
 * 图片验证码
 * @param {*} clientToken
 * @returns
 */

export const getCode = (clientToken) => {
  return request({
    url: `/api/user-service/user/imageCode/${clientToken}`,
    method: 'GET',
    responseType: 'blob',
  })
}

/**
 * 登录
 * @param {*} loginName 用户名
 * @param {*} password 密码
 * @param {*} code 	验证码
 * @param {*} clientToken 客户端请求验证码的token
 * @returns
 */
export const login = (data) => {
  return request({
    url: `/api/user-service/user/login`,
    method: 'POST',
    data,
  })
}
// export const login = (loginName, password, code, clientToken) => {
//   return request({
//     url: `/api/user-service/user/login`,
//     method: 'POST',
//     data: { loginName, password, code, clientToken, loginType: 0 },
//   })
// }
