import request from '@/utils/request'

export function login(username, password, captcha, uuid) {
  console.log(password)
  return request({
    url: 'auth/login',
    method: 'post',
    data: {
      username,
      password,
      captcha,
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
    url: 'auth/getCaptcha',
    method: 'get'
  })
}
