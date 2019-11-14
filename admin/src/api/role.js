import request from '@/utils/request'

// 获取所有的Role
export function getAll() {
  return request({
    url: 'api/roles/all',
    method: 'get'
  })
}

export function add(data) {
  return request({
    url: 'role/add',
    method: 'post',
    data
  })
}

export function get(id) {
  return request({
    url: 'role/getById',
    method: 'get',
    data: id
  })
}

export function getLevel() {
  return request({
    url: 'api/roles/level',
    method: 'get'
  })
}

export function del(id) {
  return request({
    url: 'role/delete',
    method: 'post',
    data: id
  })
}

export function edit(data) {
  return request({
    url: 'role/edit',
    method: 'post',
    data
  })
}

export function editPermission(data) {
  return request({
    url: 'api/roles/permission',
    method: 'put',
    data
  })
}

export function editMenu(data) {
  return request({
    url: 'api/roles/menu',
    method: 'put',
    data
  })
}
