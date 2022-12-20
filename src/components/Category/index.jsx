import React from "react";
import { Anchor, Image } from "./style";

const DEFAULT_IMAGE =
  "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_0.jpg";

export const Category = ({
  cover = DEFAULT_IMAGE,
  path,
  emoji = "?",
  delay,
}) => (
  <Anchor delay={delay} href={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
);
