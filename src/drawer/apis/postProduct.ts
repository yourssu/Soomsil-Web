import { soomsilClient } from '@/apis';

import { ServiceFormValues } from '../types/form.type';
import { ImageResult } from '../types/image.type';

const renameImageKeys = (image: ImageResult) => {
  return {
    key: image.imageKey,
    url: image.imageUrl,
  };
};

export const postProduct = async (product: ServiceFormValues, images: ImageResult[]) => {
  const [thumbnailImage, ...introductionImages] = images;

  const response = await soomsilClient.post('/v2/drawer', {
    ...product,
    thumbnailImage: renameImageKeys(thumbnailImage),
    introductionImages: introductionImages.map(renameImageKeys),
  });

  return response.data;
};
