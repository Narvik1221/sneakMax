import React from "react";
import { UseFormSetValue } from "react-hook-form";
import { ISliderFormData } from "./Slider"; // Импортируем интерфейс IFormData, если он нужен
import styles from "./Slider.module.scss";
import { SlideWrapper } from "./SlideWrapper";
interface SlideProps {
  goToNextSlide: () => void;
  setValue: UseFormSetValue<ISliderFormData>; // Передаем setValue для обновления состояния формы
}

export const Slide1: React.FC<SlideProps> = ({ goToNextSlide, setValue }) => {
  // Массив с изображениями
  const images = [
    "/src/assets/slider1.png",
    "/src/assets/slider1.png",
    "/src/assets/slider1.png",
    "/src/assets/slider1.png",
    "/src/assets/slider1.png",
    "/src/assets/slider1.png",
  ];

  const handleCheckboxChange = (index: number, checked: boolean) => {
    // Обновляем состояние соответствующего чекбокса
    setValue(`checkboxes.${index}`, checked);
  };

  return (
    <SlideWrapper
      number={"1 из 3"}
      goToNextSlide={goToNextSlide}
      subtitle={"Какой тип кроссовок рассматриваете?"}
    >
      <div className={styles.slide__list}>
        {images.map((image, index) => (
          <div className={styles.slide__item} key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
            <div className={styles.genderFilter}>
              <div className={styles.filter}>
                <div>
                  <input
                    type="checkbox"
                    id={`shoes${index}`}
                    name={`checkboxes[${index}]`}
                    onChange={(e) =>
                      handleCheckboxChange(index, e.target.checked)
                    }
                  />
                  <label htmlFor={`shoes${index}`}>Кеды</label>
                </div>
              </div>
              <div className={styles.slide__name}></div>
            </div>
          </div>
        ))}
      </div>
    </SlideWrapper>
  );
};
