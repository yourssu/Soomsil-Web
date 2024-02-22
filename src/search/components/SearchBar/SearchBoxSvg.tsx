import { forwardRef } from 'react';

import { IcSearchLine, IcXcircleFilled } from '@yourssu/design-system-react';

import Spacing from '@/components/Spacing/Spacing';
import { SEARCH_BOX_RADIAL_GRADIENT, SEARCH_BOX_WIDTH } from '@/search/constant';
import {
  SearchBoxDefsProps,
  SearchBoxForeignObjectProps,
  SearchBoxSvgContainerProps,
} from '@/search/types/SearchBoxSvg.type';

import { StyledInput, StyledInputContainer } from './SearchBox.style';

const SearchBoxSvgContainer = ({ children }: SearchBoxSvgContainerProps) => {
  return <>{children}</>;
};

const SearchBoxForeignObject = forwardRef<HTMLInputElement, SearchBoxForeignObjectProps>(
  ({ size, setSearchInputText }, ref) => {
    return (
      <foreignObject x="0" y="0" width={SEARCH_BOX_WIDTH[size]} height="60">
        <StyledInputContainer containerSize={size}>
          <Spacing direction="horizontal" size={24} />
          <StyledInput inputSize={size} ref={ref} />
          <Spacing direction="horizontal" size={24} />
          <IcXcircleFilled
            cursor="pointer"
            color="rgba(181, 185, 189, 1)"
            size="1.5rem"
            onClick={() => {
              setSearchInputText('SearchInputText', '');
            }}
          />
          <Spacing direction="horizontal" size={8} />
          <IcSearchLine size={36} color="rgba(138, 42, 197, 1)" />
        </StyledInputContainer>
      </foreignObject>
    );
  }
);

const SearchBoxDefs = ({ size }: SearchBoxDefsProps) => {
  return (
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
  );
};

export const SearchBoxSvg = Object.assign(SearchBoxSvgContainer, {
  ForeignObject: SearchBoxForeignObject,
  Defs: SearchBoxDefs,
});
