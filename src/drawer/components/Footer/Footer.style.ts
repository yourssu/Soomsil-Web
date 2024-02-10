import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  position: absolute;
  bottom: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: ${({ theme }) => theme.color.bgPressed};
`;

export const StyledFooterLogo = styled.text``;

export const StyledFooterText = styled.text`
  margin-left: 1.25rem;
`;
