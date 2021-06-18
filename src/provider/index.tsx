import React, { createContext, Component, FC } from 'react'
import { observer } from 'mobx-react-lite'
import userStore from '@components/User/store'
import userActions from '@components/User/action'

// export const UserContext = createContext(userStore)
// export const UserActionContext = createContext(userActions)

export const ThemeContext = createContext({ userStore, userActions })

export const provider = (WrappedComponent: FC) => {
  const InjectedComponent = observer((props: any) => {

    const contextValue = {
      userStore, userActions
    }
    console.log(contextValue, 'provider')
    return (
      <ThemeContext.Provider value={contextValue}>
        <WrappedComponent {...props} />
      </ThemeContext.Provider>
    )
  })

  return InjectedComponent
}