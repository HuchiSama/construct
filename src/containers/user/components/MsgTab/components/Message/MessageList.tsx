import React, { useCallback, FC } from 'react'
import { List, Avatar, Button } from 'antd'

import { IProps, IMsgItems } from './type'
import styles from './style.module.less'

export default function MessageList<FC>(props: IProps) {
  const { items } = props

  const renderTitle = useCallback((item: IMsgItems) => {
    const { userName } = item

    return (
      <div className={styles['message-header']}>
        <label className={styles['message-header']}>
          {userName}
        </label>
        <span>{item.noticeTime}</span>
      </div>
    )
  }, [items])

  const renderDescription = useCallback((item: IMsgItems) => {
    const { actionDesc, moduleDesc, title } = item

    return (
      <div className={styles['message-description']}>
        <span className={styles['message-action']}>{actionDesc}</span>
         了你的
        <span>{moduleDesc}</span>
        <span>《{title}》</span>
      </div>
    )
  }, [items])

  const renderExtra = () => (
    <Button type="primary">查看详情</Button>
  )

  return (
    <List
      itemLayout="horizontal"
      dataSource={items}
      renderItem={(item: IMsgItems) => (
        <List.Item
          extra={renderExtra()}
        >
          <List.Item.Meta
            avatar={
              <Avatar 
                className={
                  `${styles['message-avatar']} ${ item.status ? '' : styles['avatar-point'] }`
                } 
                src={item.avatarUrl} 
              />
            }
            title={renderTitle(item)}
            description={renderDescription(item)}
          />
        </List.Item>
      )}
    />
  )
}
