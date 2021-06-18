import React from 'react'
import { Tabs } from 'antd'

// import { userState } from './types'
import styles from './style.module.less'

CustomTabs.TabPane = Tabs.TabPane

export default function CustomTabs<FC>(props: React.ComponentProps<any>) {
  return (
    <div className={styles['custom-tab-div']}>
      <Tabs tabPosition="left" {...props}>
        {props.children}
      </Tabs>
    </div>
  )
}
