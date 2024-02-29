import { forwardRef, useEffect } from 'react';

import { IcSearchLine, IcXcircleFilled } from '@yourssu/design-system-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useTheme } from 'styled-components';

import Spacing from '@/components/Spacing/Spacing';
import { SEARCH_BOX_RADIAL_GRADIENT, SEARCH_BOX_WIDTH } from '@/search/constant';
import useForm from '@/search/hooks/useForm';
import {
  SearchBoxDefsProps,
  SearchBoxForeignObjectProps,
  SearchBoxSvgContainerProps,
} from '@/search/types/SearchBoxSvg.type';

import { StyledInput, StyledInputContainer, StyledLink } from './SearchBox.style';

const SearchBoxSvgContainer = ({ children }: SearchBoxSvgContainerProps) => {
  return <>{children}</>;
};

const SearchBoxForeignObject = forwardRef<HTMLInputElement, SearchBoxForeignObjectProps>(
  ({ size }, ref) => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query') || '';

    const { value: searchInputText, setValue: setSearchInputText, handleChangeValue } = useForm('');
    const navigate = useNavigate();

    const theme = useTheme();

    useEffect(() => {
      setSearchInputText(query);
    }, []);

    return (
      <foreignObject x="0" y="0" width={SEARCH_BOX_WIDTH[size]} height="60">
        <StyledInputContainer $containerSize={size}>
          <Spacing direction="horizontal" size={24} />
          <StyledInput
            ref={ref}
            $inputSize={size}
            value={searchInputText}
            onChange={handleChangeValue}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                navigate(`/search?query=${searchInputText}`);
              }
            }}
          />
          <Spacing direction="horizontal" size={24} />
          <IcXcircleFilled
            cursor="pointer"
            color={theme.color.buttonDisabled}
            size="1.5rem"
            onClick={() => {
              setSearchInputText('');
            }}
          />
          <Spacing direction="horizontal" size={8} />
          <StyledLink to={`/search?query=${searchInputText}`}>
            <IcSearchLine size={36} color="rgba(138, 42, 197, 1)" />
          </StyledLink>
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
