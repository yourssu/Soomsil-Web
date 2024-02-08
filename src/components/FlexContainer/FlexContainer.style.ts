import styled from 'styled-components';

export const StyledFlexContainer = styled.div`
  display: flex;
`;

interface StyledFlexGrowItem {
  $proportion: number;
}
export const StyledFlexGrowItem = styled.div<StyledFlexGrowItem>`
  flex-grow: ${(props) => `${props.$proportion}`};
`;
