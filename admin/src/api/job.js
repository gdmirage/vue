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
    url: 'job/add',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'job/delete',
    data: id,
    method: 'post'
  })
}

export function edit(data) {
  return request({
    url: 'job/edit',
    method: 'post',
    data
  })
}
