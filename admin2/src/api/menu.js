import request from '@/utils/request'

// 获取所有的菜单树
export function getMenusTree() {
  return request({
    url: 'api/permission/menu/menuSelectTree',
    method: 'get'
  })
}

export function buildMenus() {
  return request({
    url: 'api/permission/menu/build',
    method: 'get'
  })
}

export function add(data) {
  return request({
    url: 'api/permission/menu/add',
    method: 'post',
    data
  })
}

export function del(id) {
  const params = {
    id: id
  }
  return request({
    url: 'api/permission/menu/delete',
    method: 'delete',
    params
  })
}

export function edit(data) {
  return request({
    url: 'api/permission/menu/edit',
    method: 'put',
    data
  })
}

export function downloadMenu(params) {
  return request({
    url: 'api/menus/download',
    method: 'get',
    params,
    responseType: 'blob'
  })
}
