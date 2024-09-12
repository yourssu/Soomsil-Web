import { useMutation } from '@tanstack/react-query';

import { postImages } from '../apis/postImages';
import { postProduct } from '../apis/postProduct';
import { ServiceFormValues } from '../types/form.type';

export const usePostProduct = () => {
  return useMutation({
    mutationFn: async (data: ServiceFormValues) => {
      const imageList = [...data.thumbnailImage, ...data.introductionImages] as File[];
      const images = await postImages(imageList);

      const response = await postProduct(data, images);
      return response;
    },
  });
};
