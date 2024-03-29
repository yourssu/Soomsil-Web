import styled from 'styled-components';

interface StyledAccordionBoxProps {
  $isWarned?: boolean;
}

export const StyledAccordionContainer = styled.div<StyledAccordionBoxProps>`
  width: 21.875rem;
  height: fit-content;
  border-radius: 0.75rem;
  background: ${({ theme }) => theme.color.buttonDisabledBG};
  border: 1px solid
    ${({ $isWarned, theme }) =>
      $isWarned ? theme.color.buttonWarned : theme.color.buttonDisabledBG};
  padding-left: 1.12rem;
  padding-top: 0.69rem;
  padding-right: 1.25rem;
  padding-bottom: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.31rem;
`;

export const StyledAccordionHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5.45rem;
`;

export const StyledAccordionHeader = styled.div`
  color: ${({ theme }) => theme.color.textPrimary};
  ${({ theme }) => theme.typo.button3};
`;

export const StyledAccordionContent = styled.div<{ $isOpen: boolean }>`
  width: 17.5rem;
  color: ${({ theme }) => theme.color.textPrimary};
  font-family: 'Spoqa Han Sans Neo';
  font-size: 0.65rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
  margin-left: 0.5rem;
  word-break: keep-all;

  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
`;
