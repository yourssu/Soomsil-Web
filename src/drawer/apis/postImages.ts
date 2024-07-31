import { soomsilClient } from '@/apis';

import { ImageListResponse } from '../types/image.type';

export const postImages = async (fileList: File[]) => {
  const formData = new FormData();

  for (let i = 0; i < fileList.length; i++) {
    formData.append('images', fileList[i]);
  }

  const response = await soomsilClient.post<ImageListResponse>('/v3/image/list', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data.images;
};
