import { ImageResult } from '../types/image.type';

import { drawerClient } from './drawerClient';

const renameImageKeys = (image: ImageResult) => {
  return {
    key: image.imageKey,
    url: image.imageUrl,
  };
};

// TODO: 추후 product 타입 수정 필요
export const registerProduct = async (product: unknown, images: ImageResult[]) => {
  const [thumbnailImage, ...introductionImages] = images;

  const response = await drawerClient.post('/v2/drawer', {
    ...product,
    thumbnailImage: renameImageKeys(thumbnailImage),
    introductionImages: introductionImages.map(renameImageKeys),
  });

  return response.data;
};
