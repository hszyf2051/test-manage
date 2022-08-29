/**
 * 请求的方法
 */

import base from './base'
import axios from '../utils/request'

const api = {
  /**
   * 添加商品
   * 参数： title cid  category sellPoint price num desc paramsInfo image
   */
  addGoods(params) {
    return axios.post(base.addGoods, params)
  },

  /**
   * 根据id删除商品
   * @param {*} params 
   * @returns 
   */
  deleteGoods(params) {
    return axios.delete(base.deleteGoods,{params})
  },

  /**
   * 根据id编辑商品
   * @param {*} params 
   */
  updateGoods(params) {
    return axios.put(base.updateGoods, params)
  }
}

export default api
