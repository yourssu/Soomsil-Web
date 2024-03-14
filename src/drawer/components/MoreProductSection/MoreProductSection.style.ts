import styled from 'styled-components';

export const StyledMoreProductSection = styled.div`
  width: 18rem;
  height: fit-content;
  display: grid;
  gap: 2rem;
  padding: 0 0.5rem;
  margin-left: 5.25rem;

  /* Soomsil/Drawer/Web/title22 */
  font-family: 'Spoqa Han Sans Neo';
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 1.7875rem */
  color: ${({ theme }) => theme.color.textPrimary};
`;
