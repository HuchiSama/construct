import React, { useEffect, useCallback, useState } from 'react'
import { message, Pagination } from 'antd'
// import reducer from './reducer'
import { msgTabKey } from '@constants/types'
import TabHeader from '@components/TabHeader'
import ArticleList from '@components/ArticleList'
import actions from '@containers/user/actions'
import { pick } from '@utils'

import { IArticleItems } from './type'
import styles from './style.module.less'

class InitPagination {
  pageNo = 1
  pageSize = 10
  pageCount = 0
  itemCount = 0
}

export default function Publish() {
  const [ items, setItems ] = useState<IArticleItems[]>([])
  const [ pagination, setPage ] = useState(new InitPagination())

  useEffect(() => {
    getPublishList()
  }, [])

  const getPublishList = useCallback((params = {}) => {
    actions.getPublishList({ ...pagination, ...params })
    .then(res => {
      setItems(res.items)
      let pagination = pick(['pageNo', 'pageSize', 'pageCount', 'itemCount'], res, new InitPagination())
      setPage(pagination)
    })
    .catch(e => message.error(e +''))
  }, [pagination])

  const handlePageChange = useCallback(({ page, pageSize }) => {
    getPublishList({ pageNo: page, pageSize })
  }, [pagination])
  

  return (
    <div className={styles['publish-div']}>
      <TabHeader text="这里是我发布的帖子" publish/>
      <div className={styles['publish-content']}>
        <ArticleList items={items} tabKey={msgTabKey.publish}/>
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
