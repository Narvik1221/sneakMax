import React from "react";
import styles from "./About.module.scss";
export const About = () => {
  return (
    <div id="about" className={styles.about}>
      <div className="container">
        <div className={styles.about__inner}>
          <div className={styles.about__background}></div>
          <h3 className={styles.about__title}>Пара слов о нас</h3>
          <p className={styles.about__text}>
            Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через
            спорт мы можем менять жизни. В том числе с помощью воодушевляющих
            историй спортсменов. Чтобы помочь тебе подняться и двигаться вперед.{" "}
          </p>
          <div className={styles.about__bottom}>SneakMax</div>
        </div>
      </div>
    </div>
  );
};
