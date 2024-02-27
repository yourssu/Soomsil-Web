import { CategoryWithoutAll } from '@/drawer/components/CategoryWithoutAll/CategoryWithoutAll';
import { Input } from '@/drawer/components/Input/Input';
import { OverviewImage } from '@/drawer/components/OverviewImage/OverviewImage';
import { ThumnailInput } from '@/drawer/components/ThumbnailInput/ThumbnailInput';
import { TextArea } from '@/drawer/components/TextArea/TextArea';
import { WarningBox } from '@/drawer/components/WarningBox/WarningBox';

import { StyledContainer, StyledInputContainer } from './Register.style';

export const Register = () => {
  return (
    <StyledContainer>
      <StyledInputContainer>
        <Input
          maxLength={20}
          title={'서비스 이름'}
          description={'(최대 20자)'}
          required={true}
          isWarned={true}
        />

        <Input
          width={79.625}
          maxLength={20}
          title={'간단한 설명'}
          description={'(최대 20자)'}
          required={true}
          disabled={true}
        />
      </StyledInputContainer>

      <TextArea title="내용" description="(최대 5000자)" required={true} maxLength={5000} />

      <CategoryWithoutAll />

      <StyledInputContainer>
        <Input maxLength={100} title={'웹 페이지 링크'} description={'(최대 100자)'} />

        <Input maxLength={100} title={'Google Play 링크'} description={'(최대 100자)'} />

        <Input maxLength={100} title={'App Store 링크'} description={'(최대 100자)'} />

        <Input maxLength={100} title={'GitHub 링크'} description={'(최대 100자)'} />
      </StyledInputContainer>
      
      <ThumnailInput isWarned={true} />
      
      <OverviewImage />
      
      <WarningBox />
    </StyledContainer>
  );
};
