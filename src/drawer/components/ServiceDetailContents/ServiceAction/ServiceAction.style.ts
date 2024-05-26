import styled from 'styled-components';

export const StyledServiceActionContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

export const StyledIconButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

interface StyledIconLabelTextProps {
  $color: string;
}

export const StyledIconLabelText = styled.span<StyledIconLabelTextProps>`
  /* TODO: 추후 폰트 변경 필요 */
  ${({ theme }) => theme.typo.button4}
  color: ${(props) => props.$color};
`;
