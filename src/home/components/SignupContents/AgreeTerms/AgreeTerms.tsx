import React, { useEffect, useMemo, useState } from 'react';

import {
  BoxButton,
  CheckBox,
  IcArrowDownLine,
  IcArrowRightLine,
} from '@yourssu/design-system-react';

import {
  StyledSignupContentContainer,
  StyledSignupContentTitle,
  StyledSignupButtonText,
} from '../SignupContents.style';

import {
  StyledAgreeTermCheckboxText,
  StyledAllAgreeCheckBoxContainer,
  StyledDetailTermItem,
  StyledDetailTermList,
  StyledDetailTermType,
  StyledExpandContentWrapper,
  StyledExpandIconWrapper,
} from './AgreeTerms.style';
import { AgreeTermData, AgreeTermNameType } from './AgreeTerms.type';
import { CommunityTerm } from './TermContent/CommunityTerm';
import { InfoCollectionAndUseTerm } from './TermContent/InfoCollectionAndUseTerm';
import { PrivacyPolicyTerm } from './TermContent/PrivacyPolicyTerm';
import { ServiceTerm } from './TermContent/ServiceTerm';

interface DetailTermItemProps {
  term: string;
  detailTermContent: React.ReactNode;
  agreed?: boolean;
  onCheckBoxClicked?: React.MouseEventHandler<HTMLElement>;
  isRequired?: boolean;
}

interface AgreeTermsProps {
  onConfirm: () => void;
}

const agreeTermDatas: Record<AgreeTermNameType, AgreeTermData> = {
  '서비스 이용약관': {
    required: true,
    detailTermContent: <ServiceTerm />,
  },
  '커뮤니티 이용규칙': {
    required: false,
    detailTermContent: <CommunityTerm />,
  },
  '개인정보 수집 및 이용 동의': {
    required: true,
    detailTermContent: <InfoCollectionAndUseTerm />,
  },
  '개인정보 처리방침': {
    required: true,
    detailTermContent: <PrivacyPolicyTerm />,
  },
};

const DetailTermItem = ({
  term,
  detailTermContent,
  agreed = false,
  onCheckBoxClicked = () => {},
  isRequired = false,
}: DetailTermItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded((prev) => !prev);
  };

  return (
    <div>
      <StyledDetailTermItem onClick={onCheckBoxClicked}>
        <StyledAgreeTermCheckboxText>
          <CheckBox size="large" isSelected={agreed} />
          <StyledDetailTermType $isRequired={isRequired}>
            {isRequired ? '[필수]' : '[준비중]'}
          </StyledDetailTermType>
          {term}
        </StyledAgreeTermCheckboxText>
        <StyledExpandIconWrapper onClick={toggleExpanded}>
          {isExpanded ? <IcArrowDownLine /> : <IcArrowRightLine />}
        </StyledExpandIconWrapper>
      </StyledDetailTermItem>
      <StyledExpandContentWrapper $isExpanded={isExpanded}>
        {detailTermContent}
      </StyledExpandContentWrapper>
    </div>
  );
};

export const AgreeTerms = ({ onConfirm }: AgreeTermsProps) => {
  const [allAgreed, setAllAgreed] = useState(false);
  const [agreedStates, setAgreedStates] = useState<Record<AgreeTermNameType, boolean>>({
    '서비스 이용약관': false,
    '커뮤니티 이용규칙': false,
    '개인정보 수집 및 이용 동의': false,
    '개인정보 처리방침': false,
  });

  const allowConfirm = useMemo(() => {
    const requiredAgreeTermNames = Object.keys(agreeTermDatas).filter(
      (termName) => agreeTermDatas[termName as AgreeTermNameType].required
    );
    const requiredTermAgreements = requiredAgreeTermNames.map(
      (termName) => agreedStates[termName as AgreeTermNameType]
    );
    return requiredTermAgreements.every((agreed) => agreed);
  }, [agreedStates]);

  const toggleAllAgreeStates = () => {
    let prevAllAgreed: boolean;

    setAllAgreed((prev) => {
      prevAllAgreed = prev;
      return !prev;
    });

    setAgreedStates((prev) => {
      const nextState = { ...prev };
      Object.keys(nextState).forEach((term) => {
        nextState[term as AgreeTermNameType] = !prevAllAgreed;
      });
      return nextState;
    });
  };

  /*
   * 모든 약관에 동의하지 않은 상태라면, 전체 동의 체크박스를 해제합니다.
   */
  useEffect(() => {
    if (Object.values(agreedStates).every((agreed) => agreed)) return;
    setAllAgreed(false);
  }, [agreedStates]);

  return (
    <StyledSignupContentContainer>
      <StyledSignupContentTitle>회원가입</StyledSignupContentTitle>
      <StyledAllAgreeCheckBoxContainer onClick={toggleAllAgreeStates}>
        <StyledAgreeTermCheckboxText $forcePointed>
          <CheckBox size="large" isSelected={allAgreed} onClick={toggleAllAgreeStates} />
          <span>전체 동의하기</span>
        </StyledAgreeTermCheckboxText>
      </StyledAllAgreeCheckBoxContainer>
      <StyledDetailTermList>
        {Object.entries(agreedStates).map(([term, agreed]) => {
          const termName = term as AgreeTermNameType;
          const { detailTermContent, required } = agreeTermDatas[termName];
          return (
            <DetailTermItem
              key={termName}
              term={termName}
              onCheckBoxClicked={() => {
                setAgreedStates((prev) => {
                  const nextState = { ...prev };
                  nextState[termName] = !agreed;
                  return nextState;
                });
              }}
              detailTermContent={detailTermContent}
              agreed={agreed}
              isRequired={required}
            />
          );
        })}
      </StyledDetailTermList>
      <BoxButton
        size="large"
        rounding={8}
        variant="filled"
        disabled={!allowConfirm}
        onClick={onConfirm}
      >
        <StyledSignupButtonText>확인</StyledSignupButtonText>
      </BoxButton>
    </StyledSignupContentContainer>
  );
};
