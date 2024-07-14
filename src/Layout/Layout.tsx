// src\Layout\Layout.tsx

import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import style from './style.module.css';
import PopUp from "../components/PopUp/PopUp";
import { useUserStore } from "../store";
import { useEffect } from "react";
// import { useApi } from "../api/useApi";
import { apiRequest } from "../api/apiRequest";

const Layout = () => {
  const coach = { id: '6656df1b8437151db0cce4ea' }
  const { login } = useUserStore();

  useEffect(() => {
    console.log("main useEffect");
    if (localStorage.token) {

      apiRequest({ method: 'GET', path: `/coach` })
        .then((data) => {
          login(data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
        });
    } else {
    }
  }, []);



  return (
    <div className={style.appContainer}>
      <NavBar />
      <main className={style.mainContent}>
        <Outlet />
      </main>
      <PopUp />
    </div>
  );
};

export default Layout;
