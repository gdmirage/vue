import request from '@/utils/request'

export function getDepts(params) {
  return request({
    url: 'api/dept',
    method: 'get',
    params
  })
}

export function getDeptTree() {
  return request({
    url: 'api/permission/dept/getDeptTree',
    method: 'get'
  })
}

export function add(data) {
  return request({
    url: 'api/permission/dept/add',
    method: 'post',
    data
  })
}

export function del(id) {
  const params = {
    id: id
  }
  return request({
    url: 'api/permission/dept/delete',
    method: 'delete',
    params
  })
}

export function edit(data) {
  return request({
    url: 'api/permission/dept/edit',
    method: 'put',
    data
  })
}

export function downloadDept(params) {
  return request({
    url: 'api/dept/download',
    method: 'get',
    params,
    responseType: 'blob'
  })
}
