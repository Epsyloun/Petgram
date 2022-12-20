import styled from "styled-components";
import { fadeIn, SlideFromLeft } from "../../styles/animation";

export const ImgWrapper = styled.div`
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`;

export const Image = styled.img`
  ${SlideFromLeft()}
  border-radius: 5px;
  height: 100%;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  & svg {
    margin: 4px 4px 4px 0;
  }
`;

export const Article = styled.article`
  padding: 0 0 20px;
`;

export const InfoWrapper = styled.div`
  ${fadeIn()}
  padding: 0 0 0 10px;
`;

export const Title = styled.h4`
  margin: 0 0 5px;
  font-size: 18px;
`;
