import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data,
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token },
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post',
  })
}

/**
 * 获取用户基本信息
 * @param {*} id 用户id
 * @returns
 */
export function getUserInfo(id) {
  return request({
    url: `/api/user-service/user/${id}`,
    method: 'get',
  })
}
