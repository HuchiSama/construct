
export interface IMsgItems {
  id: number;
  msg: string;
  status: number;
  userId: number;
  userName: string;
  avatarUrl: string;
  roleId: number;
  roleName: string;
  noticeTime: string;
  title: string;
  action: string;
  actionDesc: string;
  module: number;
  moduleDesc: string;
  moduleId: number;
}


export interface IProps {
  items: IMsgItems[]
}