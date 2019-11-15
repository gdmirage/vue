import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'user/add',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'user/delete',
    method: 'post',
    data: id
  })
}

export function edit(data) {
  return request({
    url: 'user/edit',
    method: 'post',
    data
  })
}

export function updatePass(user) {
  const data = {
    oldPass: user.oldPass,
    newPass: user.newPass
  }
  return request({
    url: 'user/updatePass/',
    method: 'post',
    data
  })
}

export function updateEmail(code, data) {
  return request({
    url: 'user/updateEmail/' + code,
    method: 'post',
    data
  })
}

