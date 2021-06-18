import { ObservableMap } from 'mobx'

export interface UserType {
  roleId?: number;
  roleCode?:	string;
  id?: number;
  userName?:	string;
  nickName?:	string;
  email?: string;
	phone?: string;
  position?:	string;
  address?: string;
  status?:	number;
  avatarUrl?: string;
  createTime?:	string;
  modifyTime?:	string;
  introduction?: string
}

export interface StoreType {
  user: ObservableMap<keyof UserType, UserType>;
  isSuperAdmin: boolean;
  isCompanyUser: boolean;
  isAdmin: boolean;
}

export interface ActionsType {
  store: StoreType;
  getUserInfo(): void;
}