export interface UserData {
  email: string;
  nickName: string;
  profileImage: {
    id: number;
    largeUrl: string;
    midUrl: string;
    smallUrl: string;
  };
}
