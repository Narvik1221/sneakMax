import React, { useState } from "react";
import styles from "./Footer.module.scss";

import { Link } from "react-scroll";
import { navList } from "../../utils/constants";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <nav>
          <h1 className={styles.logo}>SneakMax</h1>
          <div className={styles.content}>
            <ul className={styles.list}>
              {navList.map((item) => (
                <li key={item.id}>
                  <Link
                    className={styles.link}
                    to={item.id}
                    smooth={true}
                    duration={500}
                    offset={-60}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
};
