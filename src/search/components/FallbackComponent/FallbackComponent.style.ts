import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  width: auto;
  height: 168px;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  flex-shrink: 0;
`;

export const StyledTextButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const StyledTextContainer = styled.div``;

export const StyledButtonContainer = styled.div`
  display: flex;
`;

export const StyledBoldText = styled.text`
  display: block;
  color: ${(props) => props.theme.color.textPrimary};
  ${(props) => props.theme.typo.subtitle2};
`;

export const StyledSubText = styled.text`
  display: block;
  color: ${(props) => props.theme.color.textTertiary};
  ${(props) => props.theme.typo.body3};
`;

export const StyledErrorImg = styled.img`
  width: 8.81375rem;
`;
