import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { SearchSize } from '@/search/types/SearchBox.type';

interface StyledInputContainerProps {
  $containerSize: SearchSize;
}

export const StyledInputContainer = styled.div<StyledInputContainerProps>`
  width: ${(props) => (props.$containerSize == 'large' ? '50rem' : '41.813rem')};
  height: 3.75rem;
  display: flex;
  align-items: center;
`;

interface StyledInputProps {
  $inputSize: SearchSize;
}

export const StyledInput = styled.input<StyledInputProps>`
  ${(props) => props.theme.typo.title2};
  width: ${(props) => (props.$inputSize == 'large' ? '41.188rem' : '33.063rem')};
  height: 1.938rem;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const StyledLink = styled(Link)`
  width: fit-content;
  height: fit-content;
  display: flex;
`;
