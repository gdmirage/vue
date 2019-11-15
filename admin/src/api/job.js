import request from '@/utils/request'

export function getAllJob(deptId) {
  const data = {
    deptId: deptId
  }
  return request({
    url: 'job/page',
    method: 'post',
    data
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
