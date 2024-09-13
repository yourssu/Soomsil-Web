import { useMutation } from '@tanstack/react-query';

import { postImages } from '../apis/postImages';
import { putUpdateProduct } from '../apis/putUpdateProduct';
import { ServiceFormValues } from '../types/form.type';

export const usePutUpdateProduct = (productNo: number) => {
  return useMutation({
    mutationFn: async (data: ServiceFormValues) => {
      const imageList = [data.thumbnailImage, ...data.introductionImages] as File[];
      const images = await postImages(imageList);

      const response = await putUpdateProduct(productNo, data, images);
      return response;
    },
  });
};
