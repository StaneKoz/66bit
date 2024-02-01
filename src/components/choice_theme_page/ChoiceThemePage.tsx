import React, { useEffect, useRef } from 'react';
import style from './ChoiceThemePage.module.scss';
import { useTheme } from '../../hooks/useTheme';
import { Themes } from '../../types/Themes';

const ChoiceThemePage = () => {
  const buttonsContainerRef = useRef<HTMLDivElement>(null);
  const context = useTheme();

  useEffect(() => {
    if (buttonsContainerRef.current != null) {
      buttonsContainerRef.current.addEventListener('click', (ev: any) => clickHandler(ev));
    }
  }, []);

  function clickHandler(ev: any) {
    const btn = ev.target.closest(`.${style.button}`);
    if (!btn) {
      return
    }
    console.log('click')
    context.setTheme(btn.dataset.theme);
  }

  return (
    <div className={style.page}>
      <div className={[style.pageContainer, '_container'].join(" ")} ref={buttonsContainerRef}>
        <div className={[style.buttonContainer, style.buttonContainer_light].join(' ')}>
          <button type='button' className={[style.button, style.button_light].join(' ')} data-theme={Themes.light}>
            <div className={style.btnText}>
              Светлая
            </div>
            <div className={style.btnIcon}>
              <img src={require('../../static/icon/sun.png')} />
            </div>
          </button>
        </div>
        <div className={[style.buttonContainer, style.buttonContainer_dark].join(' ')}>
          <button type='button' className={[style.button, style.button_dark].join(' ')} data-theme={Themes.dark}>
            <div className={style.btnText}>
              Тёмная
            </div>
            <div className={style.btnIcon}>
              <img src={require('../../static/icon/moon.png')} />
            </div>
          </button>
        </div>
        <div className={[style.buttonContainer, style.buttonContainer_blue].join(' ')}>
          <button type='button' className={[style.button, style.button_blue].join(' ')} data-theme={Themes.blue}>
            <div className={style.btnText}>
              Морская
            </div>
            <div className={style.btnIcon}>
              <img src={require('../../static/icon/blue.png')} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChoiceThemePage;