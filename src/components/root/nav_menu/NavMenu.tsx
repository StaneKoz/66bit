import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './NavMenu.module.scss';
import { ReactComponent as SVGPalette } from '../../../static/icon/palette.svg';
import { ReactComponent as SVGNews} from '../../../static/icon/news.svg';

const NavMenu = () => {
  return (
    <div className={style.navMenu}>
      <div className={[style.navMenuContainer, '_container'].join(' ')}>
        <div className={style.navItem}>
          <NavLink to={'/'}
            className={({ isActive, isPending }) => isActive ? [style.active, style.navLink].join(' ') : style.navLink}
          >
            <div className={style.linkText}>Новости</div>
            <div className={style.linkImg}>
              <SVGNews/>
            </div>
          </NavLink>
        </div>
        <div className={style.navItem}>
          <NavLink to={'/choiceTheme'}
            className={({ isActive, isPending }) => isActive ? [style.active, style.navLink].join(' ') : style.navLink}
          >
            <div className={style.linkText}>Выбор темы</div>
            <div className={style.linkImg}>
              <SVGPalette/>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;