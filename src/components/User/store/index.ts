import { makeObservable, observable, computed, ObservableMap } from 'mobx'
import { UserType, StoreType } from '../type'

class Store implements StoreType{
  constructor() {
    makeObservable(this)    
  }
  
  /**
   * 当前登录用户
   * roleId
   * 1 站长
   * 2 管理员
   * 3 普通用户
   */

  @observable user = observable.map<keyof UserType, any>({})

  // 站长
  @computed get isSuperAdmin() {
    return this.user.get('roleId') === 1
    // this.user.get
  }

  // 普通用户
  @computed get isCompanyUser() {
    return this.user.get('roleId') === 3
  }

  // 管理员
  @computed get isAdmin() {
    return this.user.get('roleId')=== 2
  }

    // @computed get loginType() {
  //   const loginName = this.user.get('loginName')
  //   if (!loginName) {
  //     return ''
  //   }

  //   return isEmail(loginName) ? 'email' : 'phone'
  // }

  
  @observable publicKey = undefined

}

export default new Store()
