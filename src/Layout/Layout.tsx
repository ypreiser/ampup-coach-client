// src\Layout\Layout.tsx

import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import style from './style.module.css';
import PopUp from "../components/PopUp/PopUp";
// import { useUserStore } from "../store";
// import { useState } from "react";
// import { useApi } from "../api/useApi";

const Layout = () => {
  // const coach = { id: '6656df1b8437151db0cce4ea' }
  // const { login } = useUserStore();
  // login(coach)
  // const [data, setData] = useState(null)
  // useEffect(() => {
  // useApi(get)  
   
  // }, [])
  


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
