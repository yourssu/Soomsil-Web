import { homeClient } from '@/home/apis/homeClient';
import { AnnouncementResponse } from '@/home/types/announcement.type';

export const getAnnouncement = async (): Promise<AnnouncementResponse> => {
  const { data } = await homeClient.get('/announcement');
  return data;
};
