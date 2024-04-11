import {
  StyledTermContentTitle,
  StyledTermParagraph,
  StyledTermSectionHeading,
} from './TermContent.style';

export const InfoCollectionAndUseTerm = () => {
  return (
    <div>
      <StyledTermContentTitle>[숨쉴때 개인정보 수집 및 이용 동의]</StyledTermContentTitle>

      <StyledTermSectionHeading>수집 항목과 목적, 보유 및 이용기간</StyledTermSectionHeading>
      <StyledTermParagraph>
        숨쉴때 서비스는 다음의 목적을 위해 이용자가 동의 받은 범위에 한하여 개인정보를 수집하고
        있습니다.
      </StyledTermParagraph>

      <StyledTermSectionHeading>1. 회원 가입 및 관리</StyledTermSectionHeading>
      <StyledTermParagraph>
        <ul>
          <li>
            - 처리 목적: 회원 가입 확인, 서비스 제공을 위한 본인 식별과 인증, 서비스 운영 사항과
            관련한 고지 및 통지
          </li>
          <li>- 필수 항목: 숭실대학교 이메일</li>
          <li>- 보유 및 이용기간: 수집한 때부터 회원 탈퇴 시까지</li>
        </ul>
      </StyledTermParagraph>

      <StyledTermSectionHeading>2. 자동 수집 항목</StyledTermSectionHeading>
      <StyledTermParagraph>
        <ul>
          <li>- 처리 목적: 숨쉴때 서비스 품질 향상을 위한 통계 분석</li>
          <li>
            - 필수 항목: 서비스 이용 과정에서 자동 생성되는 정보(자동 생성되는 임의의 식별자, 숨쉴때
            앱 진입 시 서비스 방문 이력 및 접속 로그, 접속한 모바일 운영체제)
          </li>
          <li>- 보유 및 이용기간: 수집한 때부터 회원 탈퇴 시까지</li>
        </ul>
      </StyledTermParagraph>

      <StyledTermParagraph>
        * 이용자께서는 상기 동의를 거부할 수 있습니다. 단, 동의하지 않는 경우 회원 가입 및 숨쉴때
        서비스 제공에 제한을 받을 수 있습니다.
      </StyledTermParagraph>
    </div>
  );
};
