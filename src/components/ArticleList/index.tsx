import React, { useCallback, useState } from 'react'
import { List, Avatar  } from 'antd'
import { EyeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';

import { numProcess } from '@utils/index'
import { sectionCodeMap, topStatus } from '@constants'
import { msgTabKey } from '@constants/types'
import { IArticleItems, ArticleListProps } from './types'

import styles from './style.module.less'

export default function ArticleList(props: ArticleListProps) {
  const [ hoverId, setHover ] = useState(NaN)
  const { items, tabKey, handleOperate } = props

  const renderTitle = useCallback((item: IArticleItems) => {
    const { sectionDesc, sectionId, status, title, id } = item
    const isAnnouncement = sectionId === sectionCodeMap.announcement //是否是公告

    return (
      <div className={styles['article-header']}>
        <div>
          <label className={styles[isAnnouncement ? 'announcement-label' : 'article-header']}>
            {sectionDesc}
          </label>
          <a>{title}</a>
        </div>
        {topStatus[status] && <label className={styles['article-top']}>置顶</label>}
        {hoverId === id && tabKey && renderOperate()}
      </div>
    )
  }, [items, hoverId])

  const renderOperate = useCallback(() => {
    const isPublish = tabKey === msgTabKey.publish

    return isPublish ? (
      <label className={styles['article-delete']} onClick={handleOperate}>删除</label>
    ) : (
      <label className={styles['enshrine-cancel']} onClick={handleOperate}>取消</label>
    )
  }, [tabKey])

  const renderDescription = useCallback((item: IArticleItems) => {
    const { nickName, createTime, roleName, viewCount, likeCount, commentCount } = item

    return (
      <div className={styles['article-description']}>
        <div className={styles['description-poster']}>
          <span>{nickName}</span>
          <label>{roleName}</label>
          <span>{createTime}</span>
        </div>
        <div className={styles['description-info']}>
          <span><EyeOutlined />{numProcess(viewCount)}</span>
          <span><MessageOutlined />{numProcess(likeCount)}</span>
          <span><StarOutlined />{numProcess(commentCount)}</span>
        </div>
      </div>
    )
  }, [items])

  return (
    <div className={styles['article-content']}>
      <List
        itemLayout="horizontal"
        dataSource={items}
        renderItem={item => (
          <List.Item 
            onMouseEnter={() => setHover(item.id)}
            onMouseLeave={() => setHover(NaN)}
          >
            <List.Item.Meta
              avatar={<Avatar className={styles['article-avatar']} src={item.avatarUrl} />}
              title={renderTitle(item)}
              description={renderDescription(item)}
            />
          </List.Item>
        )}
      />
    </div>
  )
}
