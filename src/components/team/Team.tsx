import React, { useEffect } from "react";
import styles from "./Team.module.scss";
import menu from "../../assets/d.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeam } from "../../slices/teamSlice";
import { RootState } from "../../store";
import { AppDispatch } from "../../store";
export const Team = () => {
  // Загружаем данные команды при монтировании компонента
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchTeam());
  }, [dispatch]);
  const team = useSelector((state: RootState) => state.team.data);

  return (
    <div id="team" className={styles.team}>
      {" "}
      <div className={styles.team__back}></div>
      <div className="container">
        <div className={styles.team__inner}>
          <div className={styles.team__title}>Наша команда</div>
          <div className={styles.team__list}>
            {team.map((item, index) => (
              <div key={index} className={styles.team__item}>
                <img src={item.imgUrl} alt="" className={styles.team__img} />
                <div className={styles.team__name}>{item.name}</div>{" "}
                <div className={styles.team__post}>{item.role}</div>
              </div>
            ))}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};
