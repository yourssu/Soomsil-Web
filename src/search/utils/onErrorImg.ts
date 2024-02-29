import defaultImg from '@/search/assets/imgError.svg';

export const onErrorImg = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  e.currentTarget.src = defaultImg;
};
