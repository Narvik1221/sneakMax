import React from "react";
import { UseFormSetValue, UseFormRegister } from "react-hook-form";
import { ISliderFormData } from "./Slider"; // Импортируем интерфейс IFormData, если он нужен
import styles from "./Slider.module.scss";

import { SlideWrapper } from "./SlideWrapper";
interface SlideProps {
  register: UseFormRegister<ISliderFormData>;
  goToNextSlide: () => void;
}

export const Slide3: React.FC<SlideProps> = ({
  goToNextSlide,

  register,
}) => {
  return (
    <SlideWrapper
      number={"3 из 3"}
      goToNextSlide={goToNextSlide}
      subtitle={"Уточните какие-либо моменты"}
    >
      <textarea
        id="description"
        {...register("comment")} // Регистрируем поле
        placeholder="Введите сообщение"
        rows={5}
        cols={50}
        className={styles.slide3_textarea}
      ></textarea>
    </SlideWrapper>
  );
};
