import styled from 'styled-components';
export const Container = styled.div`
  padding: 1rem;
  display: inline-block;
  position: absolute;
  z-index: 10;
  bottom: -9rem;
  right: -0.4rem;
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.baseColor.white000};
  box-shadow: 0px 1px 3px 0px rgba(107, 114, 128, 0.4);
`;
