import { FC, useEffect } from "react";
import BasketCard from "../basketCard/BasketCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store"; // Импорты вашего хранилища
import {
  ISneakers,
  fetchBasket,
  delBasket,
  calculateTotalCount,
  calculateTotalPrice,
} from "../../slices/basketSlice";

import styles from "./BasketList.module.scss";

interface IProps {
  page?: boolean;
}

const BasketList: FC<IProps> = ({ page }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: basketItems, isOpen } = useSelector(
    (state: RootState) => state.basket
  );

  useEffect(() => {
    // Запрос данных корзины при монтировании компонента
    dispatch(fetchBasket());
  }, [dispatch]);
  useEffect(() => {
    dispatch(calculateTotalCount()); // Подсчитываем количество элементов
    dispatch(calculateTotalPrice()); // Подсчитываем общую сумму
  }, [basketItems]);
  return (
    <ul
      className={`${styles.basketList} ${page ? styles.page : styles.default} `}
    >
      {basketItems.map((item) => (
        <BasketCard key={item.id} isPage={page} item={item} />
      ))}
    </ul>
  );
};

export default BasketList;
