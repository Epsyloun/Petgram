import React, { useEffect, useState } from "react";
import { Category } from "../Category";
import { CategoryList, Item } from "./style";
import db from "../../../api/db.json";

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false);
  let AnimationTime = 0.1;
  const Delay = (time) => {
    AnimationTime = AnimationTime + time;
  };

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 190;
      if (showFixed !== newShowFixed) {
        setShowFixed(newShowFixed);
      }
    };
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [showFixed]);

  const renderList = (fixed) => (
    <CategoryList className={fixed ? "fixed" : ""}>
      {db.categories.map((category) => (
        <Item key={category.id}>
          {Delay(0.25)}
          <Category delay={AnimationTime + "s"} {...category} />
        </Item>
      ))}
    </CategoryList>
  );
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};
