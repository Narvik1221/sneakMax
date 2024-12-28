import React, { useState } from "react";
import styles from "./Accordion.module.scss";
import plus from "../../assets/plus.svg";
interface AccordionItemProps {
  title: string;
  content: string;
}

export const Accordion: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordion_item}>
      <div className={styles.accordion__top}>
        <div className={styles.accordion_title}> {title}</div>

        <button
          className={`${styles.accordion_button} ${
            isOpen ? styles.active : ""
          }`}
          onClick={toggleAccordion}
        >
          <img src={plus} alt="" />
        </button>
      </div>

      {isOpen && <div className={styles.accordion_content}>{content}</div>}
    </div>
  );
};
