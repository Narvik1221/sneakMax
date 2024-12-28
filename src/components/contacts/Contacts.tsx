import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import styles from "./Contacts.module.scss";
import vk from "../../assets/vk.svg";
import inst from "../../assets/inst.svg";
import { Tooltip } from "./Tooltip";
export const Contacts: React.FC = () => {
  const mapCenter = [59.9342802, 30.3350986]; // Санкт-Петербург

  const placemarks = [
    { coords: [59.9386, 30.3141], title: "Метка 1" },
    { coords: [59.9311, 30.3609], title: "Метка 2" },
    { coords: [59.9294, 30.3299], title: "Метка 3" },
  ];

  return (
    <div id="contacts" className={styles.contacts}>
      <div className="container">
        <div className={styles.contacts__inner}>
          <div className={styles.left}>
            <h3 className={styles.left__title}>Контакты</h3>
            <div className={styles.left__info}>
              Главный офис{" "}
              <Tooltip message="Адрес и телефон для корреспонденции, инвесторов. Вопросы о доставке, качестве обслуживания и товара просьба задавать в отдел продаж" />
            </div>
            <div className={styles.left__phone}>+7 800 789 89 89</div>
            <div className={styles.left__address}>
              г. Санкт-Петербург, Комсомольская, 43 к1
            </div>
            <div className={styles.left__info}>отдел продаж</div>{" "}
            <div className={styles.left__phone}>+7 800 789 89 89</div>
            <div className={styles.left__address}>
              г. Санкт-Петербург, Комсомольская, 43 к1
            </div>
            <div className={styles.left__bottom}>
              <a href="" className={styles.left__link}>
                <img src={vk} alt="" />
              </a>
              <a href="" className={styles.left__link}>
                <img src={inst} alt="" />
              </a>
            </div>
          </div>
          <div className={styles.right}>
            <YMaps>
              <Map
                defaultState={{
                  center: mapCenter,
                  zoom: 13,
                }}
                width="100%"
                height="490px"
              >
                {placemarks.map((mark, index) => (
                  <Placemark
                    key={index}
                    geometry={mark.coords}
                    properties={{
                      balloonContent: mark.title,
                    }}
                  />
                ))}
              </Map>
            </YMaps>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
