import React from 'react';

import { LogClick } from '@yourssu/logging-system-react';

import { useGetUserData } from '@/home/hooks/useGetUserData.ts';

interface QuickLinkProps {
  icon: { icon: string; link: string };
  order: string;
  children: React.ReactElement;
}

export const QuickLink = ({ icon, order, children }: QuickLinkProps) => {
  const { data: currentUser } = useGetUserData();
  const userId = currentUser?.email || '';

  const logParams = {
    userId,
    version: 1,
    event: {
      name: 'quickLinkItemClicked',
      screen: 'Home',
      params: {
        link: icon.link,
        order,
      },
    },
  };

  return <LogClick params={logParams}>{children}</LogClick>;
};
