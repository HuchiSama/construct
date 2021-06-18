import { createContext, useContext } from 'react'

import userStore from '@components/User/store'
import userActions from '@components/User/action'
import fileActions from '@components/actions/File'
import tagActions from '@components/actions/Tag'

const stores = {
  userStore,
  userActions,

  fileActions,

  tagActions,
}

const storeContext = createContext(stores)
const useStore = () => useContext(storeContext)

const { Provider } = storeContext

export { Provider, stores }
export default useStore
