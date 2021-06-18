import actions, { Actions } from './actions'
import { actionType, userState } from '../types'

export default (state: userState, action: actionType<keyof Actions>): userState => {
  const { type, data } = action

  switch(type) {
    case "saveEdit":
    //        actions.saveUserInfo(data)
    //  userActions.getUserInfo()
      
      return actions.saveEdit(state, data)
  }

  return actions[type](state, data)
}
