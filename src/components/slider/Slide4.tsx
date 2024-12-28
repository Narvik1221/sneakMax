import React from "react";

import styles from "./Slider.module.scss";

interface SlideProps {
  register: any;
  onSubmit: any;
}

export const Slide4: React.FC<SlideProps> = ({ register, onSubmit }) => {
  return (
    <div className={styles.slide}>
      <h4 className={styles.slide__title}>Ваша подборка готова!</h4>
      <div className={styles.slide4__subtitle}>
        Оставьте свои контактные данные, чтобы бы мы могли отправить
        подготовленный для вас каталог
      </div>
      <div className={styles.line4}></div>

      <form onSubmit={onSubmit} className={styles.form4}>
        <div className={styles.form4__title}>Получить предложение</div>
        <div className={styles.form4__subtitle}>
          Получите подборку подходящих для вас моделей на почту
        </div>
        <input
          placeholder="Ваше имя"
          className={styles.form4__input}
          type="text"
          {...register("name", { required: true })}
        />{" "}
        <input
          placeholder="email"
          className={styles.form4__input}
          type="mail"
          {...register("email", { required: true })}
        />
        <button className={styles.form4__button} type="submit">
          Получить
        </button>
      </form>
    </div>
  );
};
