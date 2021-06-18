import { UserType } from '@components/User/type'

export interface actionType<T> {
  type: T,
  data: any
}

export interface userState {
  edit: boolean,
  hover: boolean,
  user: UserType
}

export interface IActions {
  setUser(state: userState, user: UserType): userState,
  handleEdit(state: userState, data: any): userState,
  saveEdit(state: userState, data: any): userState,
  handleUpload(state: userState, data: any): userState,
}

export interface IRef {
  getData(): IEditInfo
}

export interface IEditInfo {
  introduction: string | undefined,
  address: string | undefined
}

export { UserType }