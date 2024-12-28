import { FC } from "react";
import { UseFormSetValue } from "react-hook-form";
import { IFormData } from "../catalogFilter/CatalogFilter";
import styles from "./GenderFilter.module.scss";

interface IProps {
  setValue: UseFormSetValue<IFormData>;
}

const genders = [
  {
    value: "Мужской",
    label: "male",
  },
  {
    value: "Женский",
    label: "female",
  },
];

const GenderFilter: FC<IProps> = ({ setValue }) => {
  return (
    <div className={styles.genderFilter}>
      <h4>Пол</h4>
      <div className={styles.filter}>
        {genders.map((gender) => (
          <div key={gender.label}>
            <input
              type="radio"
              id={gender.label}
              name="gender"
              onChange={() => setValue("gender", gender.value)}
            />
            <label htmlFor={gender.label}>{gender.value}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenderFilter;
