import requests from './request'

/**
 * 查找所有问题
 * @param {*} params 
 * @returns 
 */
export const findQuestion = (params) => {
  return requests({
    url: '/question/findQuestion',
    method: 'get',
    params,
  })
}

/**
 * 根据输入的字段查询所有问题
 * @param {*} params 
 * @returns 
 */
export const findQuestionByContent = (params) => {
  return requests({
    url: '/question/findQuestionByContent',
    method: 'get',
    params,
  })
}