// src\Layout\Layout.tsx

import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import style from './style.module.css';
import PopUp from "../components/PopUp/PopUp";

const Layout = () => {
  return (
    <div className={style.appContainer}>
      <NavBar />
      <main className={style.mainContent}>
        <Outlet />
      </main>
      <PopUp/>
    </div>
  );
};

export default Layout;
