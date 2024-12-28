import React, { useEffect, useState } from "react";
import styles from "./Modal.module.scss";

type ModalType = {
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
};
export const Modal: React.FC<ModalType> = ({
  children,
  isOpen = false,
  onClose = () => "",
}) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const handleCloseBasket = () => {
    onClose();
  };
  return (
    <div className={`${styles.modal} ${isOpen && styles.close}`}>
      <div className={styles.container}>
        <div className={styles.back} onClick={handleCloseBasket}></div>
        {children}
      </div>
    </div>
  );
};
