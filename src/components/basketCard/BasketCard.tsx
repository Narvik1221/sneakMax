import { FC } from "react";
import { useDispatch } from "react-redux";
import {
  delBasket,
  ISneakers,
  calculateTotalCount,
  calculateTotalPrice,
} from "../../slices/basketSlice";
import { AppDispatch } from "../../store";
import styles from "./BasketCard.module.scss";
import trash from "../../assets/trash.svg";
interface IProps {
  isPage?: boolean;
  item: ISneakers;
}

const BasketCard: FC<IProps> = ({ isPage, item }) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleDeleteBasketCard = () => {
    dispatch(delBasket(item.id));
    dispatch(calculateTotalCount()); // Подсчитываем количество элементов
    dispatch(calculateTotalPrice()); // Подсчитываем общую сумму
  };

  return (
    <li className={`${styles.basketCard} ${isPage ? styles.page : ""}`}>
      <picture className={styles.picture}>
        <img src={item.imgUrl} alt={item.title} />
      </picture>
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.price}>{item.price} ₽</p>
      </div>
      <button className={styles.deleteButton} onClick={handleDeleteBasketCard}>
        <img src={trash} alt="trash" />
      </button>
    </li>
  );
};

export default BasketCard;
