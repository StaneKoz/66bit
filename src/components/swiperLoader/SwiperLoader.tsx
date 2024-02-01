import React, { FC, useEffect, useRef, useState } from 'react';
import style from './swiperLoaser.module.scss';

interface ISwiperLoaderProps {
  fetching: boolean,
  setFetching: (fetching: boolean) => void
  loading: boolean
  setLoading: (loading: boolean) => void
  setCurrentPage: (currentPage: number) => void
}

const SwiperLoader:FC<ISwiperLoaderProps> = ({setFetching, setCurrentPage, fetching, loading, setLoading}) => {
  let pStartY = 0;
  let pCurrentY = 0;
  const containerRef = useRef<HTMLDivElement>(null);
  const spinnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(!loading && containerRef.current != null && spinnerRef.current != null) {
      containerRef.current.style.paddingTop = '0px';
      spinnerRef.current.style.transform = `rotate(0deg) scale(0.5)`;
      spinnerRef.current.classList.remove(style.load);
      spinnerRef.current.classList.remove(style.active)
    }

  }, [loading])
  function loadIntit() {
    if (spinnerRef.current != null) {
      spinnerRef.current.classList.add(style.load);
    }
    setFetching(true);
    setLoading(true);
    setCurrentPage(1);
  };

  useEffect(() => {
    containerRef.current?.addEventListener('touchstart' , (ev: TouchEvent) => swipeStartHandler(ev));
    containerRef.current?.addEventListener('touchend' , (ev: TouchEvent) => swipeEndHandler(ev));
    containerRef.current?.addEventListener('touchmove' , (ev: TouchEvent) => swipeHandler(ev));
  }, [loading, fetching]);
  
  function swipeStartHandler(ev: TouchEvent) {
    if (!loading && spinnerRef.current != null) {
      document.body.style.overflowY = 'hidden';
      let touch = ev.targetTouches[0];
      pStartY = touch.screenY;
      spinnerRef.current.classList.add(style.active)
    }
  }

  
  function swipeEndHandler(ev: TouchEvent) {
    if (!loading) {
      let touch = ev.changedTouches[0];
      pCurrentY = touch.screenY;
      let pChangeY = pCurrentY > pStartY ? Math.abs(pStartY - pCurrentY) : 0;
      document.body.style.overflowY = 'auto';
      if (containerRef.current != null && pChangeY >= 75) {
        loadIntit();
      } else if (containerRef.current != null && spinnerRef.current != null){
        containerRef.current.style.paddingTop = '0px';
        spinnerRef.current.style.transform = 'rotate(0deg)'
        spinnerRef.current.classList.remove(style.active);
        spinnerRef.current.style.transform = `rotate(0deg) scale(0.5)`;
      }
    }
  }
  
  function swipeHandler(ev: TouchEvent) {
    if (!loading) {
      let touch = ev.changedTouches[0];
      pCurrentY = touch.screenY;
      let changeY = pStartY < pCurrentY ? Math.abs(pStartY - pCurrentY) : 0;
      if (changeY < 80 && containerRef.current != null && spinnerRef.current != null) {
        containerRef.current.style.paddingTop = `${changeY}px`;
        spinnerRef.current.style.transform = `rotate(${changeY / 80 * 360}deg) scale(${changeY / 80 * 0.5 + 0.5})`;
      }
    }
  }

  return (
    <div className={style.container} ref={containerRef}>
      <div className={style.spinnerBlock} ref={spinnerRef}>
        <div className={style.spinner}></div>
      </div>
    </div>
  );
};

export default SwiperLoader;