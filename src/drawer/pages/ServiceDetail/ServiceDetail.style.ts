import styled from 'styled-components';

export const StyledServiceDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  padding-bottom: 10rem;
`;

export const StyledBackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 55vh;
  justify-content: flex-end;
  background-color: #1d2023;

  padding-left: 17vw;
  padding-bottom: 5vh;

  margin-bottom: 5rem;
`;

export const StyledServiceTitleText = styled.h1`
  /* TODO: 추후 폰트 변경 필요 */
  /* Soomsil/Drawer/Web/title64 */
  font-family: 'Spoqa Han Sans Neo';
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  color: ${({ theme }) => theme.color.textBright};
`;

export const StyledServiceDeveloperText = styled.h2`
  /* TODO: 추후 폰트 변경 필요 */
  /* Soomsil/Drawer/Web/subtitle32 */
  font-family: 'Spoqa Han Sans Neo';
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 44.8px */
  color: ${({ theme }) => theme.color.textPointed};
`;

export const StyledServiceInfoContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2.5rem;
`;

export const StyledThumbnailImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
`;

export const StyledCategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledCategoryText = styled.span`
  ${({ theme }) => theme.typo.button2}
  color: ${({ theme }) => theme.color.textBright};
`;

export const StyledCategoryHintText = styled.span`
  ${({ theme }) => theme.typo.button4}
  color: ${({ theme }) => theme.color.textTertiary};
`;

export const StyledLowerSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  padding: 0 1rem;
`;
