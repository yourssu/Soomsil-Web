import {
  StyledTermContentContainer,
  StyledTermContentTitle,
  StyledTermParagraph,
  StyledTermSectionHeading,
} from './TermContent.style';

export const CommunityTerm = () => {
  return (
    <StyledTermContentContainer>
      <StyledTermContentTitle>[숨쉴때 커뮤니티 이용규칙]</StyledTermContentTitle>

      <StyledTermSectionHeading>이용규칙 안내</StyledTermSectionHeading>
      <StyledTermParagraph>
        숨쉴때 커뮤니티 이용규칙은 숭실대학교 학생이라면 누구든지 즐겁게 참여할 수 있는 커뮤니티를
        만들기 위해 작성되었습니다. 본 이용규칙은 회원이 지켜야 할 사항 및 금지행위, 신고 접수 절차,
        기타 주의사항 등을 안내하고 있습니다. 회원은 서비스 이용 전 모든 내용을 숙지해야 하며,
        유어슈는 회원이 이용규칙을 숙지하지 않아 발생한 문제에 대해서 책임지지 않습니다.
      </StyledTermParagraph>

      <StyledTermSectionHeading>
        즐거운 커뮤니티를 만들기 위해 꼭 지켜 주세요
      </StyledTermSectionHeading>
      <StyledTermParagraph>
        <ul>
          <li>- 숭실대학교 및 타 대학교 비하 금지</li>
          <li>- 특정 학부 및 학과 비하 금지</li>
          <li>- 문제가 될 만한 닉네임 설정 금지</li>
          <li>- 특정 학생 또는 교수, 교직원에 대한 비난 및 비하 금지</li>
        </ul>
      </StyledTermParagraph>

      <StyledTermSectionHeading>적절한 글을 남겨요</StyledTermSectionHeading>
      <StyledTermParagraph>
        즐거운 서비스 이용을 위해 아래와 같은 글과 댓글을 작성하는 것은 금지됩니다. 아래 예시에
        해당한다고 판단되면 이용약관 제11조 제1항에 따라 서비스 이용을 제한할 수 있습니다.
        <ul>
          <li>- 욕설이나 비속어가 포함된 댓글</li>
          <li>
            - 성별, 인종, 종교, 국적, 연령, 지역, 직업, 장애 등을 차별하거나 이에 대한 편견을
            조장하는 댓글
          </li>
          <li>- 금전 요구 및 거래 요청 댓글</li>
          <li>- 서비스 이용에 방해가 될 정도로 반복적인 댓글</li>
          <li>- 타인의 권리를 침해하는 댓글(저작권 침해, 개인정보 침해 등)</li>
          <li>- 허위 사실을 유포하는 댓글</li>
          <li>- 범죄를 목적으로 하거나 범죄를 교사 또는 방조하는 내용의 댓글</li>
          <li>- 성적 수치심 및 불쾌감을 유발하는 등 사회통념에 반하는 댓글</li>
        </ul>
      </StyledTermParagraph>

      <StyledTermSectionHeading>신고 접수 시 이렇게 처리해요</StyledTermSectionHeading>
      <StyledTermParagraph>
        즐거운 서비스 이용을 위해 아래와 같은 글과 댓글을 작성하는 것은 금지됩니다. 아래 예시에
        해당한다고 판단되면 이용약관 제11조 제1항에 따라 서비스 이용을 제한할 수 있습니다.
        <ul>
          <li>
            - 유어슈는 대표 이메일(yourssu.com@gmail.com)을 통해 커뮤니티 이용규칙 위반 신고를
            접수하고 있습니다. 다른 문의 창구로 접수된 신고는 유어슈 숨쉴때 운영진에게 전달되지
            않습니다.
          </li>
          <li>
            - 신고할 때는 신고 사유를 함께 제출해야 합니다. 신고가 접수된 후 처리 현황 안내는 접수된
            이메일을 통해 이루어집니다.
          </li>
          <li>
            - 신고를 받은 회원은 서비스를 통해 이용약관 제11조 제1항의 서비스 이용 제한 조치를
            확인할 수 있습니다.
          </li>
          <li>
            - 서비스 이용 제한에 대해 이의 사항이 있다면 불복 이유와 함께 유어슈 대표 이메일을 통해
            제출하시기를 바랍니다.
          </li>
        </ul>
      </StyledTermParagraph>

      <StyledTermSectionHeading>기타 주의사항</StyledTermSectionHeading>
      <StyledTermParagraph>
        즐거운 서비스 이용을 위해 아래와 같은 글과 댓글을 작성하는 것은 금지됩니다. 아래 예시에
        해당한다고 판단되면 이용약관 제11조 제1항에 따라 서비스 이용을 제한할 수 있습니다.
        <ul>
          <li>
            - 회원이 서비스 내에 작성한 글과 댓글은 해당 회원이 탈퇴한 후에도 보존됩니다. 보존되는
            것을 원하지 않을 경우, 회원은 자신이 작성한 댓글을 탈퇴 전 직접 삭제하고 탈퇴하여야
            합니다.
          </li>
          <li>- 기타 문의 사항은 이메일로 문의 바랍니다. yourssu.com@gmail.com</li>
        </ul>
      </StyledTermParagraph>
    </StyledTermContentContainer>
  );
};
