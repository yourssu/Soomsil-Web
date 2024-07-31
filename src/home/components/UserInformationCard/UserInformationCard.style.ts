import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;

  width: 25rem;
  height: fit-content;
  padding: 1.375rem 1.5rem;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.color.borderNormal};
  background: ${({ theme }) => theme.color.bgNormal};

  @media (max-width: 90rem) {
    width: 21.25rem;
  }
`;

export const StyledInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.12rem;
`;

export const StyledUserIconContainer = styled.div`
  margin-bottom: 0.52rem;
  position: relative;
`;

export const StyledSettingButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 4.75rem;
  left: 5.06rem;

  width: 1.5625rem;
  height: 1.5625rem;

  border-radius: 50%;
  background: ${({ theme }) => theme.color.bgPressed};
`;

export const StyledUserNickname = styled.span`
  ${({ theme }) => theme.typo.subtitle3};
  color: ${({ theme }) => theme.color.textSecondary};
`;

export const StyledUserMail = styled.span`
  ${({ theme }) => theme.typo.subtitle5};
  color: ${({ theme }) => theme.color.textTertiary};
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
