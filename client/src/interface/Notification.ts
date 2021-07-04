export interface Notification {
  createdAt: string;
  description: string;
  readStatus: boolean;
  title: string;
  type: 'VIEWED_ACCOUNT' | 'SERVICE_REQUEST' | 'SERVICE_ACCEPTED' | 'SERVICE_DECLINED';
  userReceiverId: string;
  userCreatorId: {
    firstName: string;
    lastName: string;
    email: string;
    _id: string;
  };
  userCreatorProfileImg: string;
  _id?: string;
  requestId?: string;
}

export interface NotificationApiData {
  notifications?: Notification[];
  error?: { message: string };
  success?: string;
}
