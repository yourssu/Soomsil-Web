import { typos } from '@yourssu/design-system-react';
import styled from 'styled-components';

import { searchSize } from '../types/searchBox.type';

export const StyledSearchBar = styled.div`
  width: 100vw;
  height: 108px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 40px;
`;

interface StyledInputContainerProps {
  containerSize: searchSize;
}

export const StyledInputContainer = styled.div<StyledInputContainerProps>`
  width: ${(props) => (props.containerSize == 'large' ? '800px' : '669px')};
  height: 60px;
  display: flex;
  align-items: center;
`;

interface StyledInputProps {
  inputSize: searchSize;
}

export const StyledInput = styled.input<StyledInputProps>`
  ${(props) => props.theme.typo.title2};
  width: ${(props) => (props.inputSize == 'large' ? '659px' : '529px')};
  height: 31px;
  border: none;
  &:focus {
    outline: none;
  }
`;
typos;

export const StyledXButton = styled.button`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  overflow: visible;
  box-shadow: none;
  border: none;
  background: inherit;
  border-radius: 0;
  &:focus {
    outline: none;
  }
`;
