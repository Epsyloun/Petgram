import React from "react";
import {
  Article,
  Button,
  Image,
  ImgWrapper,
  InfoWrapper,
  Title,
} from "./style";
import { MdFavoriteBorder } from "react-icons/md";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  return (
    <Article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Image src={src} />
        </ImgWrapper>
      </a>
      <InfoWrapper>
        <Button>
          <MdFavoriteBorder size={20} />
          {likes} likes!
        </Button>
        <Title>Titulo</Title>
        <p>Descripcion</p>
      </InfoWrapper>
    </Article>
  );
};
