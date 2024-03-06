import styled from 'styled-components';

import { StyledFlexContainer } from '@/components/FlexContainer/FlexContainer.style';

export const StyledSearchWrap = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;

  display: flex;
  flex-direction: column;
  min-width: 1358px;
`;

export const StyledResultWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

export const StyledResultContentWrap = styled.div`
  width: 100vw;
  padding: 1.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledResultListItemsWrap = styled.div`
  width: 49.9375rem;
`;

export const StyledResultContent = styled.div`
  width: 79.9375rem;
`;

export const StyledFlexGapContainer = styled(StyledFlexContainer)`
  gap: 5rem;
`;

export const StyledTotalCount = styled.p`
  ${(props) => props.theme.typo.body2};
  color: ${(props) => props.theme.color.textTertiary};
`;
