import { Input } from '@/drawer/components/Input/Input';

import { StyledContainer, StyledInputContainer } from './Register.style';

export const Register = () => {
  return (
    <>
      <StyledContainer>
        <StyledInputContainer>
          <Input
            width={79.625}
            maxLength={20}
            title={'서비스 이름 *'}
            description={'(최대 20자)'}
            inputWidth={61.875}
            isWarned={true}
          />

          <Input
            width={79.625}
            maxLength={20}
            title={'간단한 설명 *'}
            description={'(최대 20자)'}
            inputWidth={61.875}
            disabled={true}
          />
        </StyledInputContainer>

        <StyledInputContainer>
          <Input
            width={79.625}
            maxLength={100}
            title={'웹 페이지 링크'}
            description={'(최대 100자)'}
            inputWidth={61.875}
          />

          <Input
            width={79.625}
            maxLength={100}
            title={'Google Play 링크'}
            description={'(최대 100자)'}
            inputWidth={61.875}
          />

          <Input
            width={79.625}
            maxLength={100}
            title={'App Store 링크'}
            description={'(최대 100자)'}
            inputWidth={61.875}
          />

          <Input
            width={79.625}
            maxLength={100}
            title={'GitHub 링크'}
            description={'(최대 100자)'}
            inputWidth={61.875}
          />
        </StyledInputContainer>
      </StyledContainer>
    </>
  );
};
