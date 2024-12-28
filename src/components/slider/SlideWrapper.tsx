import React from "react";

import styles from "./Slider.module.scss";

interface SlideWrapperProps {
  goToNextSlide: () => void;
  subtitle: string;
  children: any;
  number: string;
}

export const SlideWrapper: React.FC<SlideWrapperProps> = ({
  goToNextSlide,
  subtitle,
  children,
  number,
}) => {
  return (
    <div className={styles.slide}>
      <h4 className={styles.slide__title}>
        Мы подберем идеальную пару для вас
      </h4>
      <div className={styles.slide__subtitle}>
        Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас
        моделями{" "}
      </div>
      <div className={styles.line}></div>
      <div className={styles.slide_question}>{subtitle}</div>
      <form className={styles.form}>
        {children}
        <div className={styles.slide__bottom}>
          <div className={styles.line}></div>
          <div className={styles.slide__bottom_content}>
            <div className={styles.slide__number}>{number}</div>
            <button
              className={styles.slide__button}
              type="button"
              onClick={goToNextSlide}
            >
              Следующий шаг
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
