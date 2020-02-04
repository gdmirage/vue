import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/permission/user/add',
    method: 'post',
    data
  })
}

export function downloadUser(params) {
  return request({
    url: 'api/users/download',
    method: 'get',
    params,
    responseType: 'blob'
  })
}

export function del(id) {
  const params = {
    id: id
  }
  return request({
    url: 'api/permission/user/delete',
    method: 'delete',
    params
  })
}

export function edit(data) {
  return request({
    url: 'api/permission/user/edit',
    method: 'put',
    data
  })
}

export function updatePass(user) {
  const data = {
    oldPass: user.oldPass,
    newPass: user.newPass
  }
  return request({
    url: 'api/users/updatePass/',
    method: 'post',
    data
  })
}

export function updateEmail(code, data) {
  return request({
    url: 'api/users/updateEmail/' + code,
    method: 'post',
    data
  })
}
