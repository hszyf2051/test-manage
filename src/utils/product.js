import requests from './request'

/**
 * 查找所有商品
 * @param {*} params
 * @returns
 */
export const findProject = (params) => {
  return requests({
    url: '/product/findProject',
    method: 'get',
    params,
  })
}

/**
 * 根据输入的字段查询所有商品
 * @param {*} params
 * @returns
 */
export const findProjectByTitle = (params) => {
  return requests({
    url: '/product/findProjectByTitle',
    method: 'get',
    params,
  })
}

/**
 * 根据id查询对应的类别
 * @param {*} params
 * @returns
 */
export const findCategoryById = (params) => {
  return requests({
    url: '/category/findCategoryById',
    method: 'get',
    params,
  })
}
