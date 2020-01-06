import request from '@/utils/request'

export function login(loginName, password, code, uuid) {
  return request({
    url: 'api/permission/login/login',
    method: 'post',
    data: {
      loginName,
      password,
      code,
      uuid
    }
  })
}

export function getInfo() {
  return request({
    url: 'auth/info',
    method: 'get'
  })
}

export function getCodeImg() {
  return request({
    url: 'api/permission/login/getCaptcha',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: 'api/permission/login/logout',
    method: 'delete'
  })
}
