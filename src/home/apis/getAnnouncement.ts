import { drawerClient } from '@/apis/soomsilClient';
import { AnnouncementResponse } from '@/home/types/announcement.type';

export const getAnnouncement = async (): Promise<AnnouncementResponse> => {
  const { data } = await drawerClient.get('/announcement');
  return data;
};
