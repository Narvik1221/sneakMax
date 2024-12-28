import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import {
  ISneakers,
  setIsProductOpen,
  setSelectedProduct,
} from "../../slices/basketSlice";
import { fetchSneakers } from "../../slices/sneakersSlice";
import { changeLimit } from "../../slices/dataSlice";
import CatalogCard from "../catalogCard/CatalogCard";
import styles from "./CatalogItems.module.scss";

interface IProps {
  gender: string;
}

const CatalogItems: FC<IProps> = ({ gender }) => {
  const dispatch = useDispatch<AppDispatch>();
  const sneakers = useSelector<RootState, ISneakers[]>(
    (state) => state.sneakers.data
  );
  const limit = useSelector<RootState, number>((state) => state.data.limit);

  React.useEffect(() => {
    dispatch(
      fetchSneakers({
        priceFrom: 0,
        priceTo: 99999,
        gender: gender,
        sizes: [],
      })
    );
  }, [dispatch, gender, limit]);

  useEffect(() => {
    // Проверяем наличие "product" в URL
    const match = location.pathname.match(/product\/(\d+)/);
    if (match) {
      const productId = Number(match[1]); // Извлекаем ID из URL

      const selectedProduct = sneakers.find(
        (product: any) => product.id === productId
      );

      if (selectedProduct) {
        dispatch(setSelectedProduct(selectedProduct));
        dispatch(setIsProductOpen(true));
      }
    }
  }, [location.pathname, sneakers, dispatch]);
  return (
    <div className={styles.catalogItems}>
      <ul>
        {sneakers
          .filter((_, index) => index < limit)
          .map((item: ISneakers) => (
            <CatalogCard key={item.id} item={item} />
          ))}
      </ul>

      <button
        className={styles.btn}
        type="button"
        onClick={() => dispatch(changeLimit())}
        disabled={limit >= sneakers.length}
      >
        Показать еще
      </button>
    </div>
  );
};

export default CatalogItems;
