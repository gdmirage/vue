import request from '@/utils/request'

export function get(dictName) {
  const params = {
    dictName
  }
  return request({
    url: 'basis/dictDetail/getByDictName',
    method: 'get',
    params
  })
}

export function getDictMap(dictName) {
  const params = {
    dictName,
    page: 0,
    size: 9999
  }
  return request({
    url: 'api/dictDetail/map',
    method: 'get',
    params
  })
}

export function add(data) {
  return request({
    url: 'basis/dictDetail/add',
    method: 'post',
    data
  })
}

export function del(id) {
  const params = {
    id: id
  }
  return request({
    url: 'basis/dictDetail/delete',
    method: 'delete',
    params
  })
}

export function edit(data) {
  return request({
    url: 'basis/dictDetail/edit',
    method: 'put',
    data
  })
}
