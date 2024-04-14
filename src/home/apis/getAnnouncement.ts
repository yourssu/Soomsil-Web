import { soomsilClient } from '@/apis';
import { AnnouncementResponse } from '@/home/types/announcement.type';

export const getAnnouncement = async (): Promise<AnnouncementResponse> => {
  const { data } = await soomsilClient.get('/announcement');
  return data;
};
