import { useState } from "react";
import CatalogFilter from "../catalogFilter/CatalogFilter";
import CatalogItems from "../catalogItems/CatalogItems";
import styles from "./Catalog.module.scss";

export const Catalog = () => {
  const [gender, setGender] = useState<string>("");

  return (
    <section className={styles.catalogBlock} id="catalog">
      <div className="container">
        <div className={styles.container}>
          <div className={styles.head}>
            <h2>Каталог</h2>
          </div>
          <div className={styles.content}>
            <CatalogFilter setGender={setGender} />
            <CatalogItems gender={gender} />
          </div>
        </div>
      </div>
    </section>
  );
};
