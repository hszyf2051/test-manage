import requests from './request'

export const findQuestion = (params) => {
  return requests({
    url: '/question/findQuestion',
    method: 'get',
    params,
  })
}
