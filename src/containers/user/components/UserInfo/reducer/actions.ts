import { produce } from 'immer'
import { message } from 'antd'

import actions from '../../../actions'
import userActions from '@components/User/action'
import { userState, IActions, UserType, IEditInfo } from '../types'

export class Actions implements IActions {
  setUser = (state: userState, user: UserType) => {
    return produce<userState>(state, draft => {
      draft.user = user
    })
  }
  
  handleEdit = (state: userState, data: any) => {
    return produce<userState>(state, draft => {
      draft.edit = true
    })
  }
  
  saveEdit = (state: userState, data: IEditInfo) => {
     actions.saveUserInfo(data)
     console.log(222222)
      
      return produce<userState>(state, draft => {
        draft.edit = false
      })
  }

  hoverAvatar = (state: userState, data: boolean) => {
    return produce<userState>(state, draft => {
      draft.hover = data
    })
  }

  handleUpload =  (state: userState, file: any) => {
    const done = file.status === 'done'

    if (done) {
      const { success, data } = file.response
      if (success) {
        userActions.merge({} , { avatarUrl: data.url })
      } else {
        message.error('上传失败')
      }
    }
    
    return state
  }
}

export default new Actions()

// export const setUser = (state: userState, user: UserType) => {
//   return produce<userState>(state, draft => {
//     draft.user = user
//   })
// }

// export const handleEdit = (state: userState, data: any) => {
//   return produce<userState>(state, draft => {
//     draft.edit = true
//   })
// }

// export const saveEdit = (state: userState, data: any) => {
//   return produce<userState>(state, draft => {
//     draft.edit = false
//   })
// }
