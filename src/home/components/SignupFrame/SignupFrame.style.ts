import styled from 'styled-components';

export const StyledSignupFrame = styled.div`
  width: 100%;
  flex: 1; // vertical centering

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 22px;
`;

export const StyledSignupFrameLogo = styled.img`
  width: 180px;
`;

export const StyledSignupFrameContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  width: 480px;
  padding: 22px 24px;

  border: 1px solid ${(props) => props.theme.color.borderNormal};
  border-radius: 16px;
`;
