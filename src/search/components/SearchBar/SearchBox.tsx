import {
  SEARCH_BOX_PATH,
  SEARCH_BOX_RADIAL_GRADIENT,
  SEARCH_BOX_VIEW_BOX,
  SEARCH_BOX_WIDTH,
} from '@/search/constant';
import useForm from '@/search/hooks/useForm';
import { searchSize } from '@/search/types/SearchBox.type';

import { SearchBoxSvg } from './SearchBoxSvg';

interface SearchBoxProps {
  size: searchSize;
}

export const SearchBox = ({ size }: SearchBoxProps) => {
  const {
    value: searchInputText,
    handleChangeValue: handleChangeSearchInputText,
    setValue: setSearchInputText,
  } = useForm('');

  return (
    <label htmlFor="searchBox">
      <svg
        width={SEARCH_BOX_WIDTH[size]}
        height="60"
        viewBox={SEARCH_BOX_VIEW_BOX[size]}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={SEARCH_BOX_PATH['d'][size]}
          stroke={SEARCH_BOX_PATH['stroke'][size]}
          strokeWidth="2"
        />
        <SearchBoxSvg.ForeignObject
          size={size}
          searchInputText={searchInputText}
          setSearchInputText={setSearchInputText}
          handleChangeSearchInputText={handleChangeSearchInputText}
        />
        <defs>
          <radialGradient
            id={SEARCH_BOX_RADIAL_GRADIENT['id'][size]}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform={SEARCH_BOX_RADIAL_GRADIENT['gradientTransform'][size]}
          >
            <stop stopColor="rgba(209, 67, 195, 1)" />
            <stop offset="0.489" stopColor="rgba(58, 149, 233, 1)" />
            <stop offset="1" stopColor="rgba(138, 42, 197, 1)" />
          </radialGradient>
        </defs>
      </svg>
    </label>
  );
};
