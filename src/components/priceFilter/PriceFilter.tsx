import Nouislider from "nouislider-react";
import { FC } from "react";
import "nouislider/distribute/nouislider.css";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { IFormData } from "../catalogFilter/CatalogFilter";
import styles from "./PriceFilter.module.scss";

interface IProps {
  setValue: UseFormSetValue<IFormData>;
  register: UseFormRegister<IFormData>;
}

const PriceFilter: FC<IProps> = ({ register, setValue }) => {
  return (
    <div className={styles.priceFilter}>
      <h4>Цена, руб</h4>
      <div className={styles.filter}>
        <input type="number" min={0} max={99999} {...register("startPrice")} />
        <input type="number" min={0} max={99999} {...register("endPrice")} />
        <div className={styles.sliderContainer}>
          <Nouislider
            range={{ min: 0, max: 99999 }}
            start={[0, 99999]}
            orientation="horizontal"
            connect
            step={1}
            onChange={([start, end]) => {
              setValue("startPrice", Math.round(start));
              setValue("endPrice", Math.round(end));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
