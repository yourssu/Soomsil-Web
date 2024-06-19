import React from 'react';

import BlogIcon from '@/assets/home/blog.svg';
import BrunchIcon from '@/assets/home/brunch.svg';
import InstagramIcon from '@/assets/home/instagram.svg';
import PpussungIcon from '@/assets/home/ppussung.svg';
import { QuickLink } from '@/home/components/QuickLink/QuickLink.tsx';

import { StyledIcon, StyledIconContainer, StyledLine } from './SocialNetworkService.style';

const ICON_LIST = [
  { icon: PpussungIcon, link: 'https://yourssu.com' },
  {
    icon: BlogIcon,
    link: 'https://www.notion.so/yourssu/YOURSSU-Blog-8e064a720d1942d68aa42093b7d2f5b6',
  },
  { icon: BrunchIcon, link: 'https://brunch.co.kr/@yourssu-design' },
  { icon: InstagramIcon, link: 'https://www.instagram.com/yourssu_official/' },
];

export const SocialNetworkService = () => {
  return (
    <>
      <StyledIconContainer>
        {ICON_LIST.map((icon, index) => (
          <React.Fragment key={icon.icon}>
            <QuickLink icon={icon} order={String(index + 1)} logging={index == 2}>
              <StyledIcon to={icon.link} $image={icon.icon} />
            </QuickLink>
            {ICON_LIST.length !== index + 1 && <StyledLine />}
          </React.Fragment>
        ))}
      </StyledIconContainer>
    </>
  );
};
