import { FC, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import BasketList from "../basketList/BasketList";
import styles from "./ProductBlock.module.scss";
import {
  setIsProductOpen,
  calculateTotalCount,
  calculateTotalPrice,
} from "../../slices/basketSlice";
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../modal/Modal";
import { useForm, SubmitHandler } from "react-hook-form";
import productArrow from "../../assets/product_arrow.svg";
interface FormValues {
  name: string;
  phone: string;
  email: string;
}

export const ProductBlock: FC = () => {
  const dispatch = useDispatch();
  const isProductOpen = useSelector(
    (state: RootState) => state.basket.isProductOpen
  );

  const navigate = useNavigate();
  const item = useSelector((state: RootState) => state.basket.selectedProduct);
  const handleCloseModal = () => {
    navigate(`/`); // Обновляем URL
    dispatch(setIsProductOpen(false)); // Закрываем модальное окно
  };

  return (
    <>
      {isProductOpen && (
        <Modal onClose={handleCloseModal} isOpen={isProductOpen}>
          <div className={styles.page_basket}>
            <div className={styles.left}>
              <div className={styles.left_image}>
                <img src={item?.imgUrl} alt="" />
              </div>
              <div className={styles.footer}>
                <div className={styles.footer_title}>Описание</div>
                <div className={styles.footer_descr}>{item?.description}</div>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.right_top}>
                <div className={styles.top_top}>
                  <div className={styles.top_article}>
                    Артикул:
                    <div>{item?.vendorСode}</div>
                  </div>
                  <div className={styles.top_stock}>
                    В наличии:
                    <div>{item?.inStock}</div>
                  </div>
                </div>
                <div className={styles.top_title}>{item?.title}</div>
                <div className={styles.top_stars}>
                  {Array(item?.stars)
                    .fill(null)
                    .map((_, index) => (
                      <div key={index} className={styles.star}></div>
                    ))}
                </div>
                <div className={styles.top_size_panel}>
                  <div className={styles.size_name}>Выберите размер</div>
                  <div className={styles.size_list}>
                    <div className={styles.size_number}>36</div>
                    <div className={styles.size_number}>38</div>
                    <div className={styles.size_number}>40</div>
                    <div className={styles.size_number}>42</div>
                    <div className={styles.size_number}>44</div>
                  </div>
                </div>
                <div className={styles.size_price}>
                  <div className={styles.price_new}>{item?.price}</div>
                  <div className={styles.price_old}>{item?.oldPrice}</div>
                </div>
                <div className={styles.right_btn}>Заказать</div>
                <div className={styles.right_bottom}>
                  <div className={styles.bottom_item}>
                    <img src={productArrow} alt="" />
                    Бесплатная доставка до двери
                  </div>
                  <div className={styles.bottom_item}>
                    <img src={productArrow} alt="" />
                    Оплата заказа при получении
                  </div>
                  <div className={styles.bottom_item}>
                    <img src={productArrow} alt="" />
                    Обмен в течении двух недель
                  </div>
                </div>
              </div>
              <div className={styles.footer}>
                <div className={styles.footer_title}>Характеристики</div>
                <div className={styles.footer_row}>
                  Пол:
                  <div>{item?.gender}</div>
                </div>
                <div className={styles.footer_row}>
                  Цвет:
                  <div>{item?.color}</div>
                </div>
                <div className={styles.footer_row}>
                  Состав:
                  <div>{item?.compound}</div>
                </div>
                <div className={styles.footer_row}>
                  Страна:
                  <div>{item?.country}</div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
