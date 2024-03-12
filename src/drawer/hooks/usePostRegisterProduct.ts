import { useMutation } from '@tanstack/react-query';

import { registerProduct } from '@/drawer/apis/registerProduct';
import { uploadImages } from '@/drawer/apis/uploadImages';

import { RegisterFormValues } from '../types/form.type';

export const usePostRegisterProduct = () => {
  return useMutation({
    mutationFn: async (data: RegisterFormValues) => {
      const imageList = [...data.thumbnailImage, ...data.introductionImages] as File[];
      const images = await uploadImages(imageList);

      const response = await registerProduct(data, images);
      return response;
    },
  });
};
