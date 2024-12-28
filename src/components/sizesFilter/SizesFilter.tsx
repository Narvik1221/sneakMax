import { FC, useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import { IFormData } from "../catalogFilter/CatalogFilter";
import styles from "./SizesFilter.module.scss";

const sizesData = [35, 36, 37, 38, 39, 40, 41, 42, 43];

interface IProps {
  setValue: UseFormSetValue<IFormData>;
}

const SizesFilter: FC<IProps> = ({ setValue }) => {
  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);

  const handleSizeChange = (size: number) => {
    setSelectedSizes((prevSelectedSizes) => {
      const newSizes = prevSelectedSizes.includes(size)
        ? prevSelectedSizes.filter((s) => s !== size)
        : [...prevSelectedSizes, size];
      setValue("sizes", newSizes);
      return newSizes;
    });
  };

  return (
    <div className={styles.sizesFilter}>
      <h4>Размер</h4>

      <ul className={styles.filter}>
        {sizesData.map((size) => (
          <li
            key={size}
            className={selectedSizes.includes(size) ? styles.active : ""}
            onClick={() => handleSizeChange(size)}
          >
            <label>{size.toString()}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SizesFilter;
