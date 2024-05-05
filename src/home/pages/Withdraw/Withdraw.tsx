import { useEffect, useState } from 'react';

import { BoxButton, CheckBox } from '@yourssu/design-system-react';
import { useNavigate } from 'react-router-dom';

import Logo from '@/assets/soomsil_v2_logo.svg';

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
  const [agreed, setAgreed] = useState(false);
  const [draw, setDraw] = useState(false);

  const handleCheckAgree = () => {
    setAgreed((prevAgreed) => !prevAgreed);
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

const Withdrawn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return <p>계정 탈퇴가 완료되었습니다.</p>;
};
