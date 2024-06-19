import React from 'react';

import { LogClick } from '@yourssu/logging-system-react';
import { useRecoilValue } from 'recoil';

import { UserState } from '@/home/recoil/UserState';

interface QuickLinkProps {
  icon: { icon: string; link: string };
  order: string;
  logging: boolean;
  children: React.ReactElement;
}

export const QuickLink = ({ icon, order, logging, children }: QuickLinkProps) => {
  const currentUser = useRecoilValue(UserState);
  const userId = currentUser?.email || '';

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
