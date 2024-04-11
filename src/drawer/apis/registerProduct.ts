import { drawerClient } from '@/apis/soomsilClient';

import { RegisterFormValues } from '../types/form.type';
import { ImageResult } from '../types/image.type';

const renameImageKeys = (image: ImageResult) => {
  return {
    key: image.imageKey,
    url: image.imageUrl,
  };
};

export const registerProduct = async (product: RegisterFormValues, images: ImageResult[]) => {
  const [thumbnailImage, ...introductionImages] = images;

  const response = await drawerClient.post('/v2/drawer', {
    ...product,
    thumbnailImage: renameImageKeys(thumbnailImage),
    introductionImages: introductionImages.map(renameImageKeys),
  });

  return response.data;
};
