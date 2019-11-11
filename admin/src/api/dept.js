import request from '@/utils/request'

export function getDepts(params) {
  return request({
    url: 'dept/deptTree',
    method: 'get',
    params
  })
}

export function add(data) {
  console.log(data.name)
  return request({
    url: 'dept/add',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'dept/delete',
    method: 'post',
    data: id
  })
}

export function edit(data) {
  return request({
    url: 'dept/edit',
    method: 'post',
    data
  })
}
