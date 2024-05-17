import { useState } from 'react';

import { BoxButton, CheckBox } from '@yourssu/design-system-react';
import { useNavigate } from 'react-router-dom';

import Logo from '@/assets/soomsil_v2_logo.svg';
import { postWithdraw } from '@/home/apis/postWithdraw';
import { WithdrawSuccess } from '@/home/components/WithdrawSuccess/WithdrawSuccess';

import {
  StyledWrapper,
  StyledWithdrawContainer,
  StyledTitleText,
  StyledSubTitleText,
  StyledText,
  StyledButtonText,
  StyledLeft,
  StyledListItem,
} from './Withdraw.style';

export const Withdraw = () => {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);
  const [draw, setDraw] = useState(false);

  const handleGoToHome = () => {
    navigate('/');
  };

  const handleCheckAgree = () => {
    setAgreed((prevAgreed) => !prevAgreed);
  };

  const handleWithdrawAgree = async () => {
    try {
      const { success, error } = await postWithdraw();
      if (success) {
        setDraw((prevDraw) => !prevDraw);
      } else if (error) {
        alert(`탈퇴 처리에 실패했습니다: ${error.message}`);
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(`탈퇴 처리 중 오류가 발생했습니다: ${error.message}`);
      } else {
        alert(`알 수 없는 오류가 발생했습니다`);
      }
    }
  };

  return (
    <StyledWrapper>
      <img onClick={handleGoToHome} src={Logo} alt="Logo-image" width={180} height={38} />
      <StyledWithdrawContainer>
        {draw ? (
          <WithdrawSuccess onConfirm={handleGoToHome} />
        ) : (
          <>
            <StyledTitleText>계정 탈퇴</StyledTitleText>
            <StyledSubTitleText>계정 탈퇴 전 꼭 확인하세요.</StyledSubTitleText>
            <StyledText>
              <StyledListItem>탈퇴하는 즉시 데이터가 제거되며, 복구가 불가능합니다.</StyledListItem>
              <StyledListItem>
                닉네임, 이메일 등 사용자를 특정할 수 있는 모든 계정 정보가 지워집니다.
              </StyledListItem>
              <StyledListItem>
                등록된 글이나 댓글의 삭제를 원한다면 탈퇴 이전에 삭제하시기 바랍니다.
              </StyledListItem>
            </StyledText>
            <StyledLeft>
              <CheckBox size="medium" isSelected={agreed} onClick={handleCheckAgree} type="button">
                <StyledButtonText>안내사항을 확인하였으며, 이에 동의합니다.</StyledButtonText>
              </CheckBox>
            </StyledLeft>
            <BoxButton
              style={{ width: '100%' }}
              rounding={8}
              size="large"
              variant="filled"
              onClick={handleWithdrawAgree}
              disabled={!agreed}
            >
              탈퇴하기
            </BoxButton>
          </>
        )}
      </StyledWithdrawContainer>
    </StyledWrapper>
  );
};
