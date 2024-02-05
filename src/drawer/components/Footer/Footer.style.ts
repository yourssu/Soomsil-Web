import styled from 'styled-components';

export const StyeldFooter = styled.footer`
  display: flex;
  position: absolute;
  bottom: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.color.bgPressed};
`;

export const StyledFooterLogo = styled.text``;

export const StyledFooterText = styled.text`
  margin-left: 30px;
`;
