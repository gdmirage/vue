import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'basis/dict/add',
    method: 'post',
    data
  })
}

export function del(id) {
  const params = {
    id: id
  }
  return request({
    url: 'basis/dict/delete',
    method: 'delete',
    params
  })
}

export function edit(data) {
  return request({
    url: 'basis/dict/edit',
    method: 'put',
    data
  })
}

export function downloadDict(params) {
  return request({
    url: 'api/dict/download',
    method: 'get',
    params,
    responseType: 'blob'
  })
}
