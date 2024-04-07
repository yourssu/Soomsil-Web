import { drawerClient } from './drawerClient';

export const postBookmarked = async (bookmarkKeyNo: number | undefined) => {
  const response = await drawerClient.post('/v2/drawer/bookmark', { bookmarkKeyNo: bookmarkKeyNo });

  return response.data;
};
