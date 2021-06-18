import { arr2map } from '@utils/index'

//板块列表
export const sectionId = {

}

export const sectionMap = [
 
]

export const sectionCodeMap = arr2map(sectionMap, 'code', 'value')

//是否置顶
export const topStatus = {

}

export const msgTabMap = [

]


export const roleMap = {
  [<number>1]: '站长',
  [<number>2]: '管理员',
  [<number>3]: '普通用户'
}

export const msgTabKey = arr2map(msgTabMap, 'code', 'key')