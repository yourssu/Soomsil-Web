import * as Dialog from '@radix-ui/react-dialog';
import { BoxButton, IcXLine } from '@yourssu/design-system-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

import {
  StyledDialogDescription,
  StyledContainer,
  StyledDialogTitle,
  StyledIconButton,
} from './ServiceRemoveDialog.style';

export const ServiceRemoveDialog = () => {
  const theme = useTheme();

  const navigate = useNavigate();

  const handleClick = () => {
    // TODO: 삭제 이벤트 연결
    navigate('/myDrawer?tab=MYDRAWER');
  };

  return (
    <StyledContainer>
      <StyledDialogTitle>삭제하시겠습니까?</StyledDialogTitle>
      <StyledDialogDescription>*서비스 삭제 시 복구가 불가능합니다.</StyledDialogDescription>
      <Dialog.Close asChild>
        <div>
          <BoxButton
            size="medium"
            rounding={4}
            variant="filled"
            width="15.375rem"
            onClick={handleClick}
          >
            확인
          </BoxButton>
        </div>
      </Dialog.Close>
      <Dialog.Close asChild>
        <StyledIconButton>
          <IcXLine color={theme.color.buttonNormal} size={'1.125rem'} />
        </StyledIconButton>
      </Dialog.Close>
    </StyledContainer>
  );
};
