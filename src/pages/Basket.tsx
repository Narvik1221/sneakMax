import React, { useEffect } from "react";
import { Top } from "../components/top/Top";
import { AppDispatch, RootState } from "../store"; // Импорты вашего хранилища
import { useDispatch, useSelector } from "react-redux";
import { PageBasketBlock } from "../components/pageBasketBlock/PageBasketBlock";
import { setIsPageOpen } from "../slices/basketSlice";
export const Basket = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(setIsPageOpen(true));
  }, [dispatch]);

  return (
    <>
      <PageBasketBlock></PageBasketBlock>
      <Top />
    </>
  );
};
