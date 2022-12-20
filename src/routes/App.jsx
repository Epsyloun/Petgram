import React, { useEffect } from "react";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCard } from "../components/ListOfPhotoCards";
import { Logo } from "../components/Logo";
import { GlobalStyle } from "../GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCard />
    </>
  );
}

export default App;
