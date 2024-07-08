// src\Layout\Layout.tsx

import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import style from './style.module.css';
import PopUp from "../components/PopUp/PopUp";
import { ManageContext } from "../context/ManageContext";

const Layout = () => {
  return (
    <ManageContext>

      <div className={style.appContainer}>
        <NavBar />
        <main className={style.mainContent}>
          <Outlet />
        </main>
        <PopUp />
      </div>
    </ManageContext>
  );
};

export default Layout;
