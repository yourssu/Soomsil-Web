import { soomsilClient } from '@/apis';

export const postBookmarked = async (bookmarkKeyNo: number) => {
  const response = await soomsilClient.post('/v2/drawer/bookmark', {
    bookmarkKeyNo: bookmarkKeyNo,
  });

  return response.data;
};
