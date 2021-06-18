import React, { useReducer, useCallback, useEffect, useRef, useContext } from 'react'
import { Button, Upload } from 'antd'
import { EnvironmentOutlined, SyncOutlined } from '@ant-design/icons'
import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'

import useStore from '@stores'
import { roleMap } from '@constants/types'
import EditInfo from './Edit'
import reducer from './reducer'
import { userState, IRef, IEditInfo } from './types'
import * as apis from '../../constant/apis'

import styles from './style.module.less'

const initUserState: userState = {
  user: { },
  edit: false,
  hover: false
}
class RefCurrent implements IRef {
  getData = () => ({ address: '', introduction: '' })
}


const UserInfo = observer(() => {
  const [userState, dispath] = useReducer(reducer, initUserState)
  const { userStore } = useStore()
  const { user, edit, hover } = userState
  const editRef = useRef(new RefCurrent())
  console.log(toJS(userStore.user), 'user')
  useEffect(() => {
    dispath({ type: 'setUser', data: toJS(userStore.user) })
  }, [userStore.user])

  console.log(userState,'userState')

  const editClick = useCallback(() => {
    const type = edit ? 'saveEdit' : 'handleEdit'
    const data: IEditInfo | undefined = edit ? editRef.current?.getData() : undefined
    
    dispath({ type, data })
  }, [edit])

  const hoverAvatar = useCallback((hover: boolean) => {
    dispath({ type: 'hoverAvatar', data: hover })
  }, [])

  const renderInfo = useCallback(() => {
    return (
      <>
        <div className={styles['user-position']}>
          <EnvironmentOutlined />
          {user.address}
        </div>
        <div className={styles['user-description']}>
          <div>{user.introduction}</div>
        </div>
      </>
    )
  }, [user.address, user.introduction])

  const handleUploadChange = useCallback((e) => {
    dispath({ type: 'handleUpload', data: e.file })
  }, [])

  return (
      <div className={styles['user-info-div']}>
        <div>
          <div 
            className={styles['user-avatar']} 
            onMouseEnter={() => hoverAvatar(true)}
            onMouseLeave={() => hoverAvatar(false)}
          >
            <Upload
              accept=".jpg, .png, .jpeg"
              name="file"
              action={apis.AVATAR_UPLOAD}
              listType="picture-card"
              showUploadList={false}
              className={styles['user-avatar']}
              withCredentials
              onChange={handleUploadChange}
            >
              {hover && (
                <div className={styles['avatar-hover']}>
                  <SyncOutlined size={16}/>
                </div>
              )}
              <img src={user.avatarUrl}/>
            </Upload>
          </div>
        </div>
        <div className={styles['user-name-tag']}>
          <h3>{user.nickName}</h3>
          <div>{user.roleId && roleMap[user.roleId]}</div>
        </div>
        <div className={styles['user-email-div']}>
          <div className={styles['user-email']}>{user.email}</div>
        </div>
        {edit ? <EditInfo editRef={editRef} user={user}/> : renderInfo()}
        <div className={styles['user-edit']}>
          <Button type="primary" onClick={editClick}>{edit ? '保存' : '编辑'}</Button>
        </div>
      </div>
  )
})

export default UserInfo
