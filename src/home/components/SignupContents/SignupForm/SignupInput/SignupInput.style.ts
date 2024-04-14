import styled from 'styled-components';

export const StyledSignupInputTitle = styled.div`
  ${({ theme }) => theme.typo.subtitle3};
  padding-left: 4px;
  padding-bottom: 3px;
`;

export const StyledSignupInputSuffix = styled.div`
  .suffix-icon {
    width: 22px;

    display: flex;
    justify-content: center;
    align-items: center;

    input::-ms-reveal,
    input::-ms-clear {
      display: none;
    }

    svg {
      width: 100%;
      height: 100%;
      fill: ${({ theme }) => theme.color.buttonNormal};
    }
  }
`;
