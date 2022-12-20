import { keyframes, css } from "styled-components";

//Keyframes
const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`;

const SlideFromLeftKeyframes = keyframes`
  from {
    transform: translateX(-200px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;
const AppearKeyframes = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

//Animations
export const fadeIn = ({ time = "1s", type = "ease" } = {}) =>
  css`
    animation: ${time} ${fadeInKeyframes} ${type};
  `;
export const SlideFromLeft = ({ time = "1s", type = "ease" } = {}) =>
  css`
    animation: ${time} ${SlideFromLeftKeyframes} ${type};
  `;
export const Appear = ({ time = "1s", type = "ease", delay = "0s" } = {}) =>
  css`
    animation: ${time} ${AppearKeyframes} ${type} ${delay};
  `;
