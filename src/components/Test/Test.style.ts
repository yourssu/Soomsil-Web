import styled from 'styled-components';

interface StyledTestProps {
  $color: string;
}
export const StyledTest = styled.div<StyledTestProps>`
  width: 300px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
