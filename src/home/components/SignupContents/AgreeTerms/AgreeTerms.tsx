import React, { useEffect, useMemo, useState } from 'react';

import {
  BoxButton,
  CheckBox,
  IcArrowDownLine,
  IcArrowRightLine,
} from '@yourssu/design-system-react';

import { StyledAgreeTermsContainer, StyledAgreeTermsTitle } from '../SignupContents.style';

import {
  StyledAgreeTermCheckboxText,
  StyledAllAgreeCheckBoxContainer,
  StyledDetailTermItem,
  StyledDetailTermList,
  StyledDetailTermType,
  StyledExpandContentWrapper,
  StyledExpandIconWrapper,
} from './AgreeTerms.style';
import { CommunityTerm } from './TermContent/CommunityTerm';
import { InfoCollectionAndUseTerm } from './TermContent/InfoCollectionAndUseTerm';
import { PrivacyPolicyTerm } from './TermContent/PrivacyPolicyTerm';
import { ServiceTerm } from './TermContent/ServiceTerm';

interface DetailTermItemProps {
  term: string;
  detailTermContent: React.ReactNode;
  selected?: boolean;
  onCheckBoxClicked?: React.MouseEventHandler<HTMLElement>;
  isRequired?: boolean;
}

interface AgreeTermState {
  selected: boolean;
  required: boolean;
  detailTermContent: React.ReactNode;
}

interface AgreeTermsProps {
  onConfirm: () => void;
}

const DetailTermItem = ({
  term,
  detailTermContent,
  selected = false,
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
          <CheckBox size="large" isSelected={selected} />
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
  const [agreeStates, setAgreeStates] = useState<Record<string, AgreeTermState>>({
    '서비스 이용약관': {
      selected: false,
      required: true,
      detailTermContent: <ServiceTerm />,
    },
    '커뮤니티 이용규칙': {
      selected: false,
      required: false,
      detailTermContent: <CommunityTerm />,
    },
    '개인정보 수집 및 이용 동의': {
      selected: false,
      required: true,
      detailTermContent: <InfoCollectionAndUseTerm />,
    },
    '개인정보 처리방침': {
      selected: false,
      required: true,
      detailTermContent: <PrivacyPolicyTerm />,
    },
  });

  const allowConfirm = useMemo(() => {
    const isSelected = ({ selected }: AgreeTermState) => selected;
    const requiredAgreeStates = Object.values(agreeStates).filter(({ required }) => required);
    return requiredAgreeStates.every(isSelected);
  }, [agreeStates]);

  const toggleAllAgreeStates = () => {
    let prevAllAgreed: boolean;

    setAllAgreed((prev) => {
      prevAllAgreed = prev;
      return !prev;
    });

    setAgreeStates((prev) => {
      const nextState = { ...prev };
      Object.keys(nextState).forEach((term) => {
        nextState[term].selected = !prevAllAgreed;
      });
      return nextState;
    });
  };

  useEffect(() => {
    const isSelected = ({ selected }: AgreeTermState) => selected;

    if (Object.values(agreeStates).every(isSelected)) return;

    setAllAgreed(false);
  }, [agreeStates]);

  return (
    <StyledAgreeTermsContainer>
      <StyledAgreeTermsTitle>회원가입</StyledAgreeTermsTitle>
      <StyledAllAgreeCheckBoxContainer onClick={toggleAllAgreeStates}>
        <StyledAgreeTermCheckboxText $forcePointed>
          <CheckBox size="large" isSelected={allAgreed} onClick={toggleAllAgreeStates} />
          <span>전체 동의하기</span>
        </StyledAgreeTermCheckboxText>
      </StyledAllAgreeCheckBoxContainer>
      <StyledDetailTermList>
        {Object.entries(agreeStates).map(([term, { selected, required, detailTermContent }]) => (
          <DetailTermItem
            key={term}
            term={term}
            onCheckBoxClicked={() => {
              setAgreeStates((prev) => {
                const nextState = { ...prev };
                nextState[term].selected = !selected;
                return nextState;
              });
            }}
            detailTermContent={detailTermContent}
            selected={selected}
            isRequired={required}
          />
        ))}
      </StyledDetailTermList>
      <BoxButton
        size="large"
        rounding={8}
        variant="filled"
        disabled={!allowConfirm}
        onClick={onConfirm}
      >
        확인
      </BoxButton>
    </StyledAgreeTermsContainer>
  );
};
