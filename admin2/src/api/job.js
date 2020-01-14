import request from '@/utils/request'

export function getAllJob(deptId) {
  const params = {
    deptId,
    page: 0,
    size: 9999
  }
  return request({
    url: 'api/job',
    method: 'get',
    params
  })
}

export function add(data) {
  return request({
    url: 'api/permission/job/add',
    method: 'post',
    data
  })
}

export function del(id) {
  const params = {
    id: id
  }
  return request({
    url: 'api/permission/job/delete',
    method: 'delete',
    params
  })
}

export function edit(data) {
  return request({
    url: 'api/permission/job/edit',
    method: 'put',
    data
  })
}

export function downloadJob(data) {
  return request({
    url: 'api/permission/job/download',
    method: 'post',
    data,
    responseType: 'blob'
  })
}
