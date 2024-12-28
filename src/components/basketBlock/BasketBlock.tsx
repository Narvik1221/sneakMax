import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import BasketList from "../basketList/BasketList";
import styles from "./BasketBlock.module.scss";
import { setIsOpen, calculateTotalPrice } from "../../slices/basketSlice";
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../modal/Modal";

const BasketBlock: FC = () => {
  const dispatch = useDispatch();
  const isBasketOpen = useSelector((state: RootState) => state.basket.isOpen);
  const handleCloseBasket = () => {
    dispatch(setIsOpen(false));
  };
  const { totalPrice } = useSelector((state: RootState) => state.basket);
  useEffect(() => {
    dispatch(calculateTotalPrice()); // Подсчитываем количество элементов
  }, [dispatch]);
  return (
    <>
      {isBasketOpen && (
        <Modal onClose={handleCloseBasket} isOpen={isBasketOpen}>
          <div className={styles.basket}>
            <BasketList />
            <div className={styles.info}>
              <div className={styles.left}>
                <h5> Итого:</h5>
                <p>{totalPrice}</p>
              </div>
              <Link to="basket">
                <button
                  className={styles.btn}
                  type="button"
                  onClick={handleCloseBasket}
                >
                  Перейти в корзину
                </button>
              </Link>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default BasketBlock;
