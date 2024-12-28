import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./Bottom.module.scss";
import bottom1 from "../../assets/bottom1.jpg";
import bottom2 from "../../assets/bottom2.jpg";
import bottom3 from "../../assets/bottom3.jpg";
import bottom4 from "../../assets/bottom4.jpg";
import bottom_big from "../../assets/bottom_big.jpg";
import inst_logo from "../../assets/inst_logo.svg";
interface FormValues {
  name: string;
  phone: string;
}

export const Bottom: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className={styles.bottom}>
      <div className="container">
        <div className={styles.bottom__inner}>
          <div className={styles.form__wrapper}>
            <div className={styles.form__content}>
              <h2 className={styles.form__title}>Есть вопросы?</h2>
              <p className={styles.form__text}>
                Заполните форму и наш менеджер свяжется с вами
              </p>
              <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <input
                  className={styles.form__input}
                  type="text"
                  placeholder="Ваше имя"
                  {...register("name", { required: true })}
                />

                <input
                  className={styles.form__input}
                  type="tel"
                  placeholder="Номер телефона"
                  {...register("phone", { required: true })}
                />

                <button type="submit">Отправить</button>
              </form>
            </div>
          </div>

          {/* Правая часть: фотографии */}
          <div className={styles.grid__wrapper}>
            <img src={inst_logo} alt="" className={styles.logo} />
            <div className={styles.grid}>
              <div className={styles.side__column}>
                <img src={bottom1} alt="Photo 1" />
                <img src={bottom2} alt="Photo 2" />
              </div>
              <div className={styles.center__image}>
                <img src={bottom_big} alt="Photo Center" />
              </div>
              <div className={styles.side__column}>
                <img src={bottom3} alt="Photo 3" />
                <img src={bottom4} alt="Photo 4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
