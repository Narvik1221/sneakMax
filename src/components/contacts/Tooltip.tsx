import React, { useState } from "react";
import styles from "./Contacts.module.scss";

interface TooltipProps {
  message: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <div className={styles.tooltipContainer}>
        <div
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          className={styles.icon}
        >
          ?
        </div>
        {isVisible && <div className={styles.tooltip}>{message}</div>}
      </div>
    </>
  );
};
