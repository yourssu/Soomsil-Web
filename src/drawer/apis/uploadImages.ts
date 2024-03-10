import { drawerClient } from './drawerClient';

interface ImageListResponse {
  images: {
    imageKey: string;
    imageUrl: string;
  }[];
}

export const uploadImages = async (fileList: FileList) => {
  const formData = new FormData();

  for (let i = 0; i < fileList.length; i++) {
    formData.append('images', fileList[i]);
  }

  const response = await drawerClient.post<ImageListResponse>('/v3/image/list', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data.images;
};
