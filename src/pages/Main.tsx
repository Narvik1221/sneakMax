import React, { useEffect } from "react";
import { Element, scroller } from "react-scroll";
import { useLocation } from "react-router-dom";
import { Top } from "../components/top/Top";
import { Catalog } from "../components/catalog/Catalog";
import { About } from "../components/about/About";
import { Slider } from "../components/slider/Slider";
import { Team } from "../components/team/Team";
import { Contacts } from "../components/contacts/Contacts";

import { Questions } from "../components/questions/Questions";
import { Bottom } from "../components/bottom/Bottom";
import BasketBlock from "../components/basketBlock/BasketBlock";
import { ProductBlock } from "../components/productBlock/ProductBlock";
export const Main = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", ""); // Убираем символ #
      scroller.scrollTo(targetId, {
        smooth: true,
        duration: 500,
        offset: -60, // Сдвиг для фиксированного хедера
      });
    }
  }, [location.hash]);
  return (
    <>
      <BasketBlock></BasketBlock>
      <ProductBlock />
      <Top />
      <Catalog></Catalog>
      <About />
      <Slider />
      <Team />
      <Questions />
      <Contacts />
      <Bottom />
    </>
  );
};
