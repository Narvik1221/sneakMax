import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation, // Хук для получения текущего URL
} from "react-router-dom";
import styled from "styled-components";
import { publicRoutes } from "./routes";
import { MAIN_ROUTE } from "./consts";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
// import { useAppSelector } from "../store/useAppSelector";
// import useAuthCheck from "../store/useCheckAuth";
// import { ScrollToTop } from "./ScrollToTop";
// import { OrderPopup } from "../components/orderPopup/OrderPopup";
// import { ModalChange } from "../components/modalChange/ModalChange";

const AppRouter: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Router>
          <Header />
          <main className="main">
            <Routes>
              {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
              <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </>
  );
};

export default AppRouter;
