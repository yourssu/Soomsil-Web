import { useMutation } from '@tanstack/react-query';

import { registerProduct } from '@/drawer/apis/registerProduct';
import { uploadImages } from '@/drawer/apis/uploadImages';

export const usePostRegisterProduct = () => {
  return useMutation({
    mutationFn: async (data: unknown) => {
      const imageList = [...data.thumbnailImage, ...data.introductionImages] as File[];
      const images = await uploadImages(imageList);

      const response = await registerProduct(data, images);
      return response;
    },
  });
};
