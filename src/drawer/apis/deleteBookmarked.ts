import { drawerClient } from './drawerClient';

export const deleteBookmarked = async (bookmarkKeyNo: number | undefined) => {
  const response = await drawerClient.delete('/v2/drawer/bookmark', {
    data: {
      bookmarkKeyNo: bookmarkKeyNo,
    },
  });

  return response.data;
};
