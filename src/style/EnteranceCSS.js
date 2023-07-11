import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const bounceKeyframes = css`
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(-10px);
    }
    80% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const textContainerStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 48px;

  & > span {
    display: inline-block;
    margin: 0 5px;
    animation: bounce 1s infinite;

    &:nth-of-type(13n + 1) {
      animation-delay: 0s;
    }

    &:nth-of-type(13n + 2) {
      animation-delay: 0.1s;
    }

    &:nth-of-type(13n + 3) {
      animation-delay: 0.2s;
    }
  }
`;
