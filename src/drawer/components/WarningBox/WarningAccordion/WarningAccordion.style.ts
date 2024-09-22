import styled from 'styled-components';

interface StyledAccordionBoxProps {
  $isWarned?: boolean;
}

export const StyledAccordionContainer = styled.div<StyledAccordionBoxProps>`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.31rem;

  background: ${({ theme }) => theme.color.buttonDisabledBG};
  border: 1px solid
    ${({ $isWarned, theme }) =>
      $isWarned ? theme.color.buttonWarned : theme.color.buttonDisabledBG};
  border-radius: 0.75rem;

  padding-left: 1.12rem;
  padding-top: 0.69rem;
  padding-right: 1.25rem;
  padding-bottom: 0.8rem;
`;

export const StyledAccordionHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledAccordionHeader = styled.div`
  color: ${({ theme }) => theme.color.textPrimary};
  ${({ theme }) => theme.typo.button3};
`;

export const StyledAccordionContent = styled.div<{ $isOpen: boolean }>`
  width: 100%;
  ${({ theme }) => theme.typo.caption2};
  color: ${({ theme }) => theme.color.textPrimary};

  margin-left: 0.5rem;
  word-break: keep-all;

  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
`;
