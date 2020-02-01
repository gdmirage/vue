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
    url: 'api/permission/role/add',
    method: 'post',
    data
  })
}

export function get(id) {
  return request({
    url: 'api/permission/role/getById/' + id,
    method: 'get'
  })
}

export function getLevel() {
  return request({
    url: 'api/roles/level',
    method: 'get'
  })
}

export function del(id) {
  const params = {
    id: id
  }
  return request({
    url: 'api/permission/role/delete',
    method: 'delete',
    params
  })
}

export function edit(data) {
  return request({
    url: 'api/permission/role/edit',
    method: 'put',
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
    url: 'api/permission/role/editMenus',
    method: 'post',
    data
  })
}

export function downloadRole(params) {
  return request({
    url: 'api/roles/download',
    method: 'get',
    params,
    responseType: 'blob'
  })
}
