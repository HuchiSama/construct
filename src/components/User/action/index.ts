import { action } from 'mobx'
import { message } from 'antd'

import { request,post,get } from '@utils/index'
import * as apis from '@constants/apis'
import { StoreType, ActionsType } from '../type'
import store from '../store'

class Actions implements ActionsType {
  public store: StoreType

  constructor(store: StoreType) {
    this.store = store

    this.getUserInfo()
  }

  getUserInfo = async () => {
    const params = { 
      url: apis.USER_INFO, 
      method: 'get'
    }

    try {
      let user = await request(params)

      this.merge(this.store.user, user || {})
    } catch(e) {
      message.error(`获取用户信息失败：${e}`)

      if (e.message === '用户未登录') {
        location.href = apis.LOGIN_URL
      }
    }  
  }

  @action
  merge = (target: any, src: any) => {
    if (src) {
      this.store.user = src
      console.log(src, this.store.user, 'merge')
    } else {
      Object.assign(this.store, target || {})
    }
  }

}

export default new Actions(store)
