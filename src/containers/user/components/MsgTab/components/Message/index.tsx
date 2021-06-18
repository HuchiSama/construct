import React, { useState, useEffect, useCallback } from 'react'
// import reducer from './reducer'
import { Pagination, message } from 'antd'

import actions from '@containers/user/actions'
import TabHeader from '@components/TabHeader'
import { pick } from '@utils'
import MessageList from './MessageList'

import { IMsgItems } from './type'
import styles from './style.module.less'

class InitPagination {
  pageNo = 1
  pageSize = 10
  pageCount = 0
  itemCount = 0
}

export default function Message() {
  const [ items, setItems ] = useState<IMsgItems[]>([])
  const [ pagination, setPage ] = useState(new InitPagination())


  useEffect(() => { 
    getMessageList()
  }, [])

  const getMessageList = useCallback((params = {}) => {
    actions.getMessageList({ ...pagination, ...params })
    .then(res => {
      setItems(res.items)
      let pagination = pick(['pageNo', 'pageSize', 'pageCount', 'itemCount'], res, new InitPagination())
      setPage(pagination)
    })
    .catch(e => message.error(e +''))
  }, [pagination])

  const headerText = () => (
    <span className={styles['header-text']}>这里有<label>{items.length} 条未读消息</label></span>
  )

  const operateRender = () => (
    <a>全部标记为已读</a>
  )

  const handlePageChange = useCallback(({ page, pageSize }) => {
    getMessageList({ pageNo: page, pageSize })
  }, [pagination])
  
  return (
    <div className={styles['message-div']}>
      <TabHeader text={headerText()} operate={operateRender()}/>
      <div className={styles['message-content']}>
        <MessageList items={items}/>
        <div className="flex justify-end">
          <Pagination 
            {...pagination} 
            onChange={handlePageChange} 
            total={pagination.itemCount}
            showTotal={() => `总共 ${pagination.itemCount} 条数据`}
            hideOnSinglePage
          />
        </div>
      </div>
    </div>
  )
}
