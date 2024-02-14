import { useEffect } from 'react';

import SearchIconSVG from '../../assets/SearchIconSVG';
import useForm from '../../hooks/useForm';
import { searchSize } from '../../types/searchBox.type';
import Spacing from '../Spacing';
import XButton from '../XButton';

import { StyledInput, StyledInputContainer } from './SearchBar.style';

interface SearchBoxProps {
  size: searchSize;
}

const SearchBox = ({ size }: SearchBoxProps) => {
  const { value, handleValue, initiateValue } = useForm('');

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <label htmlFor="searchBox">
      <svg
        width={size == 'large' ? '800' : '669'}
        height="60"
        viewBox={size == 'large' ? '0 0 800 60' : '0 0 669 60'}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={
            size == 'large'
              ? 'M1.5 18.7449C1.5 8.94465 9.44465 1 19.2449 1H769.5C785.516 1 798.5 13.9837 798.5 30C798.5 46.0163 785.516 59 769.5 59H2.09636C1.76701 59 1.5 58.733 1.5 58.4036V18.7449Z'
              : 'M1 15.695C1 7.57918 7.57918 1 15.695 1H639C655.016 1 668 13.9837 668 30C668 46.0163 655.016 59 639 59H1.33667C1.15073 59 1 58.8493 1 58.6633V15.695Z'
          }
          stroke={
            size == 'large' ? 'url(#paint0_radial_748_4753)' : 'url(#paint0_radial_1093_21396)'
          }
          strokeWidth="2"
        />
        <foreignObject x="0" y="0" width={size == 'large' ? '800' : '669'} height="60">
          <StyledInputContainer containerSize={size}>
            <Spacing direction="horizontal" size={24} />
            <StyledInput inputSize={size} value={value} onChange={handleValue} />
            <Spacing direction="horizontal" size={24} />
            <XButton initiateValue={initiateValue} />
            <Spacing direction="horizontal" size={8} />
            <SearchIconSVG />
          </StyledInputContainer>
        </foreignObject>
        <defs>
          <radialGradient
            id={size == 'large' ? 'paint0_radial_748_4753' : 'paint0_radial_1093_21396'}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform={
              size == 'large'
                ? 'translate(378.598 30) rotate(-180) scale(378.098 168.318)'
                : 'translate(316.58 30) rotate(-180) scale(316.58 168.318)'
            }
          >
            <stop stopColor="#D143C3" />
            <stop offset="0.489" stopColor="#3A95E9" />
            <stop offset="1" stopColor="#8A2AC5" />
          </radialGradient>
        </defs>
      </svg>
    </label>
  );
};
export default SearchBox;
