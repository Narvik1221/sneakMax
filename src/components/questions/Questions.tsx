import React from "react";
import { Accordion } from "./Accordion";
import styles from "./Accordion.module.scss";

export const Questions: React.FC = () => {
  return (
    <div id="questions" className={styles.questions}>
      <div className="container">
        <div className={styles.questions__inner}>
          <h2 className={styles.questions__title}>Часто задаваемые вопросы</h2>
          <div className={styles.questions__content}>
            <Accordion
              title="Вопрос 1"
              content="А это ответ 1: в комплексе функционируют 6 детских садов с площадками, воспитателями и всякими другими людьми"
            />
            <Accordion
              title="Вопрос 2"
              content="А это ответ 2: в комплексе функционируют 6 детских садов с площадками, воспитателями и всякими другими людьми"
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
