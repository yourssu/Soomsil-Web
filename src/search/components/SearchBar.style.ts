import { typos } from '@yourssu/design-system-react';
import styled from 'styled-components';

import { searchSize } from '../types/searchBox.type';

export const StyledSearchBar = styled.div`
  width: 100vw;
  height: 6.75rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 2.5rem;
`;

interface StyledInputContainerProps {
  containerSize: searchSize;
}

export const StyledInputContainer = styled.div<StyledInputContainerProps>`
  width: ${(props) => (props.containerSize == 'large' ? '50rem' : '41.813rem')};
  height: 3.75rem;
  display: flex;
  align-items: center;
`;

interface StyledInputProps {
  inputSize: searchSize;
}

export const StyledInput = styled.input<StyledInputProps>`
  ${(props) => props.theme.typo.title2};
  width: ${(props) => (props.inputSize == 'large' ? '41.188rem' : '33.063rem')};
  height: 1.938rem;
  border: none;
  &:focus {
    outline: none;
  }
`;
typos;

export const StyledXButton = styled.button`
  width: 1.25rem;
  height: 1.25rem;
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
