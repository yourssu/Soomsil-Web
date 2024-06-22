export interface Announcement {
  id: number;
  title: string;
}

export interface AnnouncementResponse {
  announcementList: Announcement[];
}
