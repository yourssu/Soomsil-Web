import styled from 'styled-components';
export const StyledContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 10;
  bottom: -9rem;
  right: -0.4rem;
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.color.bgNormal};
  box-shadow: 0px 1px 3px 0px rgba(107, 114, 128, 0.4);
`;
