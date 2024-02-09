import styled from 'styled-components';

import { SpacingProps } from './Spacing';

export const Container = styled.div<SpacingProps>`
  width: 100%;
  height: ${(props) => props.size};
`;
