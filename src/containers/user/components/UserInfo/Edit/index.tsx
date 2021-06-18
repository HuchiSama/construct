import React, { FC, useEffect, useState, MutableRefObject } from 'react'
import { Form, Cascader, Input } from 'antd'
import { observer } from 'mobx-react-lite'

import actions from '@containers/user/actions'
import { IRef, UserType } from '../types'
import styles from './style.module.less'
 
const { TextArea } = Input
const FormItem = Form.Item

const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 },
}
const fieldNames = {
  label: 'name',
  value: 'name',
  children: 'child'
}

interface IProp {
  editRef: MutableRefObject<IRef>,
  user: UserType
}

const EditInfo: FC<IProp> = observer((props) => {
  const [city, setCity] = useState()
  const [form] = Form.useForm()
  const { editRef, user } = props

  useEffect(() => {
    actions.getCityData()
    .then(res => setCity(res.data))

    editRef.current.getData = () => {
      let data = form.getFieldsValue()
      data.address = data.address?.join('-')
      return data
    }
  }, [])

  return (
      <Form {...layout} form={form}>
        <div className={styles['edit-info-div']}>
          <div>位置</div>
          <FormItem name="address" initialValue={user.address?.split('-')}>
            <Cascader 
              fieldNames={fieldNames} 
              options={city} 
              displayRender={label => label.join('-')}
            />
          </FormItem>
          <div>个人简介</div>
          <FormItem name="introduction" initialValue={user.introduction}>
            <TextArea placeholder="请用一句话介绍自己吧"/>
          </FormItem>
        </div>
      </Form>
  )
})

export default EditInfo
