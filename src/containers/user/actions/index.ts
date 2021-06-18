import axios from 'axios'
import { message } from 'antd'

import { get, post } from '@utils/index'
import userActions from '@components/User/action'
import * as apis from '../constant/apis'

class Actions {
  getCityData = () => {
    return axios.get(apis.CITY)
  }

  saveUserInfo = async (params: any) => {
    try {
      let re = await post(apis.SAVE_USER_INFO , params)
      userActions.getUserInfo()
      console.log(re)
    } catch(e) {
      message.error(e + '')
    }
    console.log(1231)
  }

  getPublishList = async (params: any) => {
    try {
      let res = await get(apis.ARTICLE_LIST , params)
      return res
    } catch(e) {
      message.error(e + '')
    }
  }

  getEnshrineList = async (params: any) => {
    try {
      let res = await get(apis.ENSHRINE_LIST , params)
      return res
    } catch(e) {
      message.error(e + '')
    }
  }

  getMessageList = async (params: any) => {
    try {
      let res = await get(apis.MESSAGE_LIST , params)
      return res
    } catch(e) {
      message.error(e + '')
    }
  }

}

export default new Actions()