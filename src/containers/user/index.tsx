import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { withRouter } from "react-router-dom"

import UserInfo from './components/UserInfo'
import MsgTab from './components/MsgTab'

import styles from './style.module.less'

const User = observer((props) => {
  const [ tabKey, setTab ] = useState('1')

  useEffect(() => {
    console.log(props)
  }, [])

  return (
    <div className={styles['page-content-box']}>
      <MsgTab tabKey={tabKey}/>
      <UserInfo />
    </div>  
  )
})

export default withRouter(User)
