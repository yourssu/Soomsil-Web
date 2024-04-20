import { soomsilClient } from '@/apis';

export const deleteBookmarked = async (bookmarkKeyNo: number) => {
  const response = await soomsilClient.delete('/v2/drawer/bookmark', {
    data: {
      bookmarkKeyNo: bookmarkKeyNo,
    },
  });

  return response.data;
};
