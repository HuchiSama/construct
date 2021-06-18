export interface IArticleItems {
  id: number;
  userId: number;
  nickName: string;
  avatarUrl: string;
  roleId: number;
  roleName: string;
  title: string;	
  topTime:string;
  createTime:	string;	
  status:	number;
  statusDesc:	string;
  sectionId: number;
  sectionDesc: string;
  viewCount: number;
  likeCount: number;	
  commentCount: number
}

export interface ArticleListProps {
  items: IArticleItems[],
  tabKey?: number,
  handleOperate?: () => undefined
}