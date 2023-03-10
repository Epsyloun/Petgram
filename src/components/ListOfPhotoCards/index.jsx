import React from "react";
import { PhotoCard } from "../PhotoCard";

function ListOfPhotoCard() {
  return (
    <ul>
      {[1, 2, 3, 4, 5].map((id) => (
        <PhotoCard key={id} />
      ))}
    </ul>
  );
}

export { ListOfPhotoCard };
