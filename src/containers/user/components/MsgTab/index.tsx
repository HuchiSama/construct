import React, { useReducer } from 'react'

import CustomTabs from '@components/CustomTabs'
import Publish from './components/Publish'
import Enshrine from './components/Enshrine'
import Message from './components/Message'

import styles from './style.module.less'

const { TabPane } = CustomTabs

export default function User(props: any) {
  return (
    <div className={styles['user-panel-div']}>
      <CustomTabs tabPosition="left" defaultActiveKey={props.tabKey || '1'}>
        <TabPane tab="我的发布" key={1}>
          <Publish />
        </TabPane>
        <TabPane tab="我的收藏" key={2}>
          <Enshrine />
        </TabPane>
        <TabPane tab="我的消息" key={3}>
          <Message />
        </TabPane>
      </CustomTabs>
    </div>
  );
}
