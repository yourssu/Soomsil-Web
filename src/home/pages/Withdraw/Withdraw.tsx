import Logo from '@/assets/soomsil_v2_logo.svg';
import {
  StyledWrapper,
  StyledWithdrawContainer,
  StyledTitleText,
  StyledSubTitleTextThree,
  StyledSubTitleTextFive,
  StyledButtonText,
  StyledLeft,
  StyledListItem,
} from './Withdraw.style';
import { BoxButton, CheckBox } from '@yourssu/design-system-react';
import { useState } from 'react';
import { Withdrawn } from '@/home/components/WithdrawContents/Withdrawn/Withdrawn';

export const Withdraw = () => {
  const [agreed, setAgreed] = useState(false);
  const [draw, setDraw] = useState(false);

  const handleCheckAgree = () => {
    setAgreed(!agreed);
  };

  const handleWithdrawAgree = () => {
    setDraw(true);
  };

  return (
    <StyledWrapper>
      <img src={Logo} alt={'Logo-image'} width={180} height={38} />
      <StyledWithdrawContainer>
        {draw ? (
          <Withdrawn />
        ) : (
          <>
            <StyledTitleText>계정 탈퇴</StyledTitleText>
            <StyledSubTitleTextThree>계정 탈퇴 전 꼭 확인하세요.</StyledSubTitleTextThree>
            <StyledSubTitleTextFive>
              <StyledListItem>탈퇴하는 즉시 데이터가 제거되며, 복구가 불가능합니다.</StyledListItem>
              <StyledListItem>
                닉네임, 이메일 등 사용자를 특정할 수 있는 모든 계정 정보가 지워집니다.
              </StyledListItem>
              <StyledListItem>
                등록된 글이나 댓글의 삭제를 원한다면 탈퇴 이전에 삭제하시기 바랍니다.
              </StyledListItem>
            </StyledSubTitleTextFive>
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
