import React, { useMemo } from 'react';

import { LogClick } from '@yourssu/logging-system-react';
import { useRecoilValue } from 'recoil';

import { UserState } from '@/home/recoil/UserState';

interface QuickLinkParams {
  icon: { icon: string; link: string };
  order: string;
  logging: boolean;
  children: React.ReactElement;
}

export const useQuickLink = () => {
  const currentUser = useRecoilValue(UserState);
  const userId = currentUser?.email || '';

  const getQuickLink = useMemo(() => {
    return function ({ icon, order, logging, children }: QuickLinkParams) {
      if (logging) {
        const logParams = {
          userId,
          version: 1,
          event: {
            platform: 'web',
            name: 'quickLinkItemClicked',
            screen: 'Home',
            params: {
              link: icon.link,
              order,
            },
          },
        };

        return <LogClick params={logParams}>{children}</LogClick>;
      }
      return children;
    };
  }, [userId]);

  return { getQuickLink };
};
