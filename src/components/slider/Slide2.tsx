import React from "react";
import { UseFormSetValue } from "react-hook-form";
import { ISliderFormData } from "./Slider"; // Импортируем интерфейс IFormData, если он нужен
import styles from "./Slider.module.scss";
import slide2 from "../../assets/slide2.png";
import { SlideWrapper } from "./SlideWrapper";
interface SlideProps {
  goToNextSlide: () => void;
  setValue: UseFormSetValue<ISliderFormData>; // Передаем setValue для обновления состояния формы
}

export const Slide2: React.FC<SlideProps> = ({ goToNextSlide, setValue }) => {
  const handleSizeChange = (index: number, name: string) => {
    setValue(`sizes.${index}`, name);
  };
  const sizes = [
    {
      value: "36-",
      label: "менее 36",
    },
    {
      value: "36-38",
      label: "36-38",
    },
    {
      value: "39-41",
      label: "39-41",
    },
    {
      value: "42-44",
      label: "42-44",
    },
    {
      value: "45+",
      label: "45 и больше",
    },
  ];
  return (
    <SlideWrapper
      number={"2 из 3"}
      goToNextSlide={goToNextSlide}
      subtitle={"Какой тип кроссовок рассматриваете?"}
    >
      <div className={styles.slide2__list}>
        {sizes.map((size, index) => (
          <div className={styles.slide__item} key={index}>
            <div className={styles.genderFilter}>
              <div className={styles.filter}>
                <input
                  type="checkbox"
                  id={`sizes${index}`}
                  name={size.label}
                  onChange={(e) => handleSizeChange(index, size.label)}
                />
                <label htmlFor={`sizes${index}`}>{size.label}</label>
              </div>
              <div className={styles.slide__name}></div>
            </div>
          </div>
        ))}
      </div>
      <img src={slide2} alt="shoes" className={styles.slide2__image} />
    </SlideWrapper>
  );
};
