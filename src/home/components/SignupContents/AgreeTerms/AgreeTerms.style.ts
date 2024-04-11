import styled from 'styled-components';

interface StyledDetailTermTypeProps {
  $isRequired: boolean;
}

interface StyledAgreeTermCheckboxTextProps {
  $forcePointed?: boolean;
}

interface StyledExpandContentWrapperProps {
  $isExpanded: boolean;
}

export const StyledAgreeTermsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const StyledAllAgreeCheckBoxContainer = styled.div`
  width: 100%;
  height: 3em;
  padding: 0 16px;

  border: 1px solid ${(props) => props.theme.color.buttonPoint};
  border-radius: 8px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  cursor: pointer;
`;

export const StyledDetailTermList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledDetailTermItem = styled.div`
  width: 100%;
  height: 3em;
  padding: 0 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
`;

export const StyledAgreeTermCheckboxText = styled.div<StyledAgreeTermCheckboxTextProps>`
  ${({ theme }) => theme.typo.body2};
  font-weight: 500;
  color: ${(props) => (props.$forcePointed ? props.theme.color.textPointed : 'inherit')};

  display: flex;
  align-items: center;
`;

export const StyledDetailTermType = styled.div<StyledDetailTermTypeProps>`
  color: ${(props) => (props.$isRequired ? props.theme.color.textPointed : 'inherit')};
  margin-right: 0.32em;
`;

export const StyledExpandIconWrapper = styled.div`
  cursor: pointer;

  display: inline-flex;
  padding: 0.5em;
  border-radius: 50%;

  &:hover {
    background-color: #ffffff11;
  }
`;

export const StyledExpandContentWrapper = styled.div<StyledExpandContentWrapperProps>`
  padding: 0 48px;

  width: 100%;
  max-height: ${(props) => (props.$isExpanded ? '400px' : 0)};
  overflow: auto;
  transition: max-height 0.3s ease;
`;
