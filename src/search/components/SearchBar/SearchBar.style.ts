import styled from 'styled-components';

export const StyledLogo = styled.img`
  width: 6.875rem;
  height: 1.43406rem;
`;

export const StyledSearchBar = styled.div`
  width: 100vw;
  height: 6.75rem;
  background-color: ${(props) => props.theme.color.bgNormal};
  box-sizing: border-box;
  display: flex;
  align-self: start;
  padding: 1.5rem 2.5rem;
  min-width: 1358px;
  justify-content: center;

  border-bottom: 0.063rem solid ${(props) => props.theme.color.borderNormal};

  position: fixed;
  top: 0;

  z-index: 100;
`;

export const StyledSearchBoxWrap = styled.div`
  width: 98.75rem;
  display: flex;
  gap: 1.25rem;
  align-items: center;
`;

export const StyledTotalCount = styled.p`
  ${(props) => props.theme.typo.body2};
  color: ${(props) => props.theme.color.textTertiary};
`;
