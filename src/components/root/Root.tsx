import React, { createContext, useContext, useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate, useNavigation } from 'react-router-dom';
import { Themes } from '../../types/Themes';
import style from './Root.module.scss';
import NavMenu from './nav_menu/NavMenu';

const Root = () => {

  return (
    <div className={style.page}>
      <NavMenu/>
      <main className={style.main}>
        <Outlet />
      </main>
    </div>

  );
};

export default Root;