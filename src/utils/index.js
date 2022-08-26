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
    //={}
    return axios.post(base.addGoods, params)
  },
}

export default api
