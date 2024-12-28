import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import basket from "../../assets/basket.svg";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";
import { Link } from "react-scroll";
import { navList } from "../../utils/constants";
import {
  setIsOpen,
  setIsPageOpen,
  calculateTotalCount,
} from "../../slices/basketSlice";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MAIN_ROUTE } from "../../router/consts";
import { RootState } from "../../store";
export const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalCount } = useSelector((state: RootState) => state.basket);
  const { data } = useSelector((state: RootState) => state.basket);
  useEffect(() => {
    dispatch(calculateTotalCount()); // Подсчитываем количество элементов
  }, [data]);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleOpenBasket = () => {
    if (location.pathname === "/") {
      dispatch(setIsOpen(true));
    } else if (location.pathname === "/basket") {
      dispatch(setIsPageOpen(true));
    }
  };

  const handleNavigation = (id: string, route?: string) => {
    if (route !== window.location.pathname) {
      // Перенаправляем на главную страницу с нужным хэшем
      navigate(`${route}#${id}`);
    } else {
      // Если на главной, устанавливаем хэш и выполняем переход
      window.location.hash = id;
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav>
          <NavLink to={MAIN_ROUTE}>
            <h1 className={styles.logo}>SneakMax</h1>
          </NavLink>

          <div className={styles.content}>
            <ul className={`${styles.list} ${menuOpen ? styles.open : ""}`}>
              {navList.map((item) => (
                <li key={item.id}>
                  <button onClick={() => handleNavigation(item.id, item.route)}>
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
            <div className={styles.right}>
              <button onClick={handleOpenBasket} className={styles.basket}>
                <img src={basket} alt="Корзина" />
                <span>{totalCount}</span>
              </button>
              <button
                className={`${styles.burger} ${menuOpen ? styles.active : ""}`}
                onClick={toggleMenu}
              >
                {menuOpen ? (
                  <img src={close} alt="Закрыть меню" />
                ) : (
                  <img src={menu} alt="Открыть меню" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
