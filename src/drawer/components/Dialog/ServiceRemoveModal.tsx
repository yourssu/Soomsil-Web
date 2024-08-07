import * as Dialog from '@radix-ui/react-dialog';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BoxButton, IcXLine, IconContext } from '@yourssu/design-system-react';
import { useTheme } from 'styled-components';

import { FlexGrowItem } from '@/components/FlexContainer/FlexContainer';
import { deleteProduct } from '@/drawer/apis/deleteProduct';

import {
  StyledDialogContent,
  StyledDialogOverlay,
  StyledDialogTitle,
  StyledIconButton,
} from './ServiceRemoveModal.style';

interface ServiceRemoveModalProps {
  open: boolean;
  productNo: number;
  onOpenChange: (open: boolean) => void;
}

export const ServiceRemoveModal = ({ open, productNo, onOpenChange }: ServiceRemoveModalProps) => {
  const theme = useTheme();
  const queryClient = useQueryClient();

  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myRegistered', 'WEB'] });
      queryClient.invalidateQueries({ queryKey: ['bookmarked', 'WEB'] });
    },
  });

  return (
    <Dialog.Root modal={true} open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <StyledDialogOverlay />
        <StyledDialogContent>
          <StyledDialogTitle>삭제하시겠습니까?</StyledDialogTitle>
          <Dialog.Description>*서비스 삭제 시 복구가 불가능합니다.</Dialog.Description>
          <FlexGrowItem proportion={1} />

          <Dialog.Close asChild>
            <div>
              <BoxButton
                size="medium"
                rounding={4}
                variant="filled"
                width="15.375rem"
                onClick={() => deleteProductMutation.mutate(productNo)}
              >
                확인
              </BoxButton>
            </div>
          </Dialog.Close>

          <Dialog.Close asChild>
            <StyledIconButton>
              <IconContext.Provider
                value={{
                  color: theme.color.buttonNormal,
                  size: '1.125rem',
                }}
              >
                <IcXLine />
              </IconContext.Provider>
            </StyledIconButton>
          </Dialog.Close>
        </StyledDialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
