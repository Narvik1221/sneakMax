import { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ISneakers,
  postBasket,
  fetchBasket,
  setIsProductOpen,
  setSelectedProduct,
} from "../../slices/basketSlice";
import { AppDispatch, RootState } from "../../store";
import styles from "./CatalogCard.module.scss";
import addToBasket from "../../assets/add-to-basket.svg";
import openProduct from "../../assets/open.svg";
import { useNavigate } from "react-router-dom";
interface IProps {
  item: ISneakers;
}

const CatalogCard: FC<IProps> = ({ item }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const navigate = useNavigate();
  useEffect(() => {
    // Запрос данных корзины при монтировании компонента
    dispatch(fetchBasket());
  }, [dispatch]);

  const handleAddToBasket = (event: any) => {
    event.stopPropagation(); // Запрет всплытия события

    dispatch(postBasket(item));
  };

  const handleProductClick = (event: any) => {
    event.stopPropagation(); // Запрет всплытия события
    navigate(`/product/${item.id}`); // Обновляем URL
    dispatch(setSelectedProduct(item)); // Устанавливаем выбранный товар
    dispatch(setIsProductOpen(true)); // Открываем модальное окно
  };

  return (
    <li
      className={styles.catalogCard}
      onClick={() => setIsOpenModal((prev) => !prev)}
    >
      <div
        className={`${styles.modal} ${isOpenModal ? styles.modal__open : ""}`}
      >
        <div className={styles.options}>
          <button className={styles.add} onClick={handleProductClick}>
            <img src={openProduct} />
          </button>
          <button className={styles.add} onClick={handleAddToBasket}>
            <img src={addToBasket} />
          </button>
        </div>
        <picture>
          <img src={item.imgUrl} alt={item.title} />
        </picture>
      </div>
      <h3>{item.title}</h3>
      <p>{item.price} ₽</p>
      <p>{item.gender}</p>
    </li>
  );
};

export default CatalogCard;
