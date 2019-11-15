import request from '@/utils/request'

// 获取所有的Role
export function getAll() {
  const data = {}
  return request({
    url: 'role/page',
    method: 'post',
    data
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
  const params = {
    id: id
  }
  return request({
    url: 'role/getById',
    method: 'get',
    params
  })
}

export function getLevel() {
  return request({
    url: 'role/level',
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
    url: 'role/permissions',
    method: 'post',
    data
  })
}

export function editMenu(data) {
  return request({
    url: 'role/menus',
    method: 'post',
    data
  })
}
