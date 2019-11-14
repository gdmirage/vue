import request from '@/utils/request'

// 获取所有的权限树
export function getPermissionTree() {
  return request({
    url: 'permission/permissionTree',
    method: 'post'
  })
}

export function add(data) {
  return request({
    url: 'permission/add',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'permission/delete',
    method: 'post',
    data: id
  })
}

export function edit(data) {
  return request({
    url: 'permission/edit',
    method: 'post',
    data
  })
}
