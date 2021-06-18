import React, { useReducer } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

import { tabHeaderType } from './types'
import styles from './style.module.less'

export default function TabHeader(props: tabHeaderType) {
  const { text, operate, publish } = props

  return (
    <div className={styles['publish-header']}>
      <div>
        <label>Hi</label>
        <span>{text}</span>
      </div>
      {publish && <Button type="primary"><Link to={'./publish'}>发布新帖</Link></Button>}
      {operate && operate}
    </div>
  )
}
