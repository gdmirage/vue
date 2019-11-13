import request from '@/utils/request'

// 获取所有的菜单树
export function getMenusTree() {
  return request({
    url: 'menu/getMenuTree',
    method: 'get'
  })
}

export function buildMenus() {
  return request({
    url: 'menu/getMenuTree',
    method: 'get'
  })
}

export function add(data) {
  return request({
    url: 'menu/add',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'menu/delete',
    method: 'post',
    data: id
  })
}

export function edit(data) {
  return request({
    url: 'menu/edit',
    method: 'post',
    data
  })
}
