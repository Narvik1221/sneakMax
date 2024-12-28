import { MAIN_ROUTE, PRODUCT_ROUTE, BASKET_ROUTE } from "./consts";
import { Main } from "../pages/Main";
import { Basket } from "../pages/Basket";

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: Main,
  },
  {
    path: PRODUCT_ROUTE,
    Component: Main,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
];
