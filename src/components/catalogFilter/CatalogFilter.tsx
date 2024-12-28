import { FC } from "react";
import { useDispatch } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import PriceFilter from "../priceFilter/PriceFilter";
import GenderFilter from "../genderFilter/GenderFilter";
import SizesFilter from "../sizesFilter/SizesFilter";
import { fetchSneakers } from "../../slices/sneakersSlice";
import { AppDispatch } from "../../store";
import { getBaseLimit } from "../../slices/dataSlice";
import styles from "./CatalogFilter.module.scss";

interface IProps {
  setGender: (gender: string) => void;
}

export interface IFormData {
  startPrice: number;
  endPrice: number;
  gender: string;
  sizes: number[];
}

const CatalogFilter: FC<IProps> = ({ setGender }) => {
  const dispatch = useDispatch<AppDispatch>();

  const { register, handleSubmit, setValue } = useForm<IFormData>({
    defaultValues: {
      startPrice: 0,
      endPrice: 99999,
      gender: "",
      sizes: [],
    },
  });

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    setGender(data.gender);
    dispatch(
      fetchSneakers({
        priceFrom: data.startPrice,
        priceTo: data.endPrice,
        gender: data.gender,
        sizes: data.sizes,
      })
    );
  };

  return (
    <form className={styles.catalogFilter} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h3>Подбор по параметрам</h3>
      </div>
      <PriceFilter register={register} setValue={setValue} />
      <GenderFilter setValue={setValue} />
      <SizesFilter setValue={setValue} />
      <button type="submit" onClick={() => dispatch(getBaseLimit())}>
        Применить
      </button>
      <button
        type="reset"
        onClick={() =>
          onSubmit({ startPrice: 0, endPrice: 99999, gender: "", sizes: [0] })
        }
      >
        Сбросить
      </button>
    </form>
  );
};

export default CatalogFilter;
