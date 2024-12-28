import { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BasketList from "../basketList/BasketList";
import styles from "./PageBasketBlock.module.scss";
import {
  setIsPageOpen,
  calculateTotalCount,
  calculateTotalPrice,
} from "../../slices/basketSlice";
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../modal/Modal";
import { useForm, SubmitHandler } from "react-hook-form";
import basketArrow from "../../assets/basket_arrow.svg";
interface FormValues {
  name: string;
  phone: string;
  email: string;
}

export const PageBasketBlock: FC = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const [isOpen, setIsOpen] = useState(true);
  const dispatch = useDispatch();
  const isPageBasketOpen = useSelector(
    (state: RootState) => state.basket.isPageOpen
  );
  const products = useSelector((state: RootState) => state.basket.data);
  const totalPrice = useSelector((state: RootState) => state.basket.totalPrice);
  const totalCount = useSelector((state: RootState) => state.basket.totalCount);
  const handleCloseBasket = () => {
    dispatch(setIsPageOpen(false));
  };

  useEffect(() => {
    dispatch(calculateTotalCount());
    dispatch(calculateTotalPrice());
  }, [dispatch]);
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Data:", data);
    console.log("products:", products);
  };

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isPageBasketOpen && (
        <Modal onClose={handleCloseBasket} isOpen={isPageBasketOpen}>
          <div className={styles.page_basket}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <div className={styles.basket__top}>
                <h3 className={styles.title}>Оформление заказа</h3>
                <div className={styles.number}>Заказ 3456 67</div>
              </div>
              <div className={styles.basket__content}>
                <div className={styles.basket_row}>
                  Товаров в заказе:
                  <div className={styles.basket_sum}>{totalCount}</div>
                </div>
                <div className={styles.basket_row}>
                  Общая сумма заказа:
                  <div className={styles.basket_sum}>{totalPrice}</div>
                </div>
                <div className={styles.accordion_item}>
                  <div className={styles.accordion__top}>
                    <div
                      className={`${styles.accordion_button} ${
                        isOpen ? styles.active : ""
                      }`}
                      onClick={toggleAccordion}
                    >
                      Состав заказа
                      <img src={basketArrow} alt="" />
                    </div>
                  </div>
                  {isOpen && <BasketList />}
                </div>
              </div>

              <input
                className={styles.form__input}
                type="text"
                placeholder="Ваше имя"
                {...register("name", { required: true })}
              />
              <input
                className={styles.form__input}
                type="mail"
                placeholder="email"
                {...register("email", { required: true })}
              />
              <input
                className={styles.form__input}
                type="tel"
                placeholder="Номер телефона"
                {...register("phone", { required: true })}
              />
              <button className={styles.btn} type="submit">
                Оформить заказ
              </button>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
};
