import { useParams } from 'react-router-dom';

import { CardLayout } from '@/drawer/components/CardLayout/CardLayout';
import { Category } from '@/drawer/components/Category/Category';

import {
  StyledDescription,
  StyledContainer,
  StyledProviderContainer,
  StyledProviderName,
} from './Provider.style';

const Dummy = Array.from({ length: 12 }).map((_, index) => index);

export const Provider = () => {
  const { providerId } = useParams();

  return (
    <StyledContainer>
      <Category isAll={true} />
      <StyledProviderContainer>
        <div>
          <StyledProviderName>{providerId}</StyledProviderName>
          <StyledDescription>개발자의 서비스를 확인해보세요.</StyledDescription>
        </div>
        <CardLayout data={Dummy} type={'PROVIDER'} />
      </StyledProviderContainer>
    </StyledContainer>
  );
};
