import styled from 'styled-components';

export const StyledContainer = styled.div`
  @media (max-width: 30rem) {
    gap: 1.25rem;
    padding: 1.5rem 0rem;
  }

  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3.37rem 0rem;
`;

export const StyledInputContainer = styled.div`
  @media (max-width: 30rem) {
    gap: 0.75rem;
  }

  display: flex;
  flex-direction: column;
  gap: 1.56rem;
`;

export const StyledRightContainer = styled.div`
  @media (max-width: 30rem) {
    margin-right: 0rem;
  }

  display: flex;
  justify-content: flex-end;
  margin-right: 1.2rem;
`;

interface StyledImportTextProps {
  $isWarned: boolean;
}
export const StyledImportText = styled.p<StyledImportTextProps>`
  @media (max-width: 30rem) {
    /* Soomsil/Drawer/Web/body10 */
    font-size: 'Spoqa Han Sans Neo';
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3;
  }

  ${({ theme }) => theme.typo.subtitle3};
  color: ${({ theme, $isWarned }) =>
    $isWarned ? theme.color.textWarned : theme.color.textPrimary};

  text-align: right;
  white-space: pre-wrap;

  &:hover {
    cursor: pointer;
  }
`;
