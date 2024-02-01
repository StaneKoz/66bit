import React, { FC, useEffect, useRef } from 'react';
import { Fetcher } from 'react-router-dom';
import style from './RefreshButton.module.scss';

interface IRefreshButtonProps {
  visible: boolean
  loading: boolean
  setLoading: (loading: boolean) => void
  setFetching: (fetching: boolean) => void
  setCurrentPage: (currentPage: number) => void
  setVisible: (visible: boolean) => void
}

const RefreshButton: FC<IRefreshButtonProps> = ({ visible, loading, setLoading, setFetching, setCurrentPage, setVisible}) => {
  const classNames = [style.button, visible  ? style.active : ''].join(' ');
  const btnREf = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (btnREf.current != null) {
      btnREf.current.addEventListener('click', clickHandler);
    }
  }, [loading]);

  function clickHandler(ev: MouseEvent) {
    if (!loading && btnREf.current != null) {
      document.documentElement.scrollTo(0, 0);
      setCurrentPage(1);
      setFetching(true);
      setLoading(true);
      setVisible(false);
    }
  }

  return (
    <button type='button' className={classNames} ref={btnREf}>
      <div className={style.text}>
        Свежие новости
      </div>
      <div className={style.img}>
        <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
          <path d="M6.4569 9.73276C6.17123 10.0327 6.18281 10.5074 6.48276 10.7931C6.78271 11.0788 7.25744 11.0672 7.5431 10.7672L6.4569 9.73276ZM12.5431 5.51724C12.8288 5.21729 12.8172 4.74256 12.5172 4.4569C12.2173 4.17123 11.7426 4.18281 11.4569 4.48276L12.5431 5.51724ZM12.5431 4.48276C12.2574 4.18281 11.7827 4.17123 11.4828 4.4569C11.1828 4.74256 11.1712 5.21729 11.4569 5.51724L12.5431 4.48276ZM16.4569 10.7672C16.7426 11.0672 17.2173 11.0788 17.5172 10.7931C17.8172 10.5074 17.8288 10.0327 17.5431 9.73276L16.4569 10.7672ZM12.75 5C12.75 4.58579 12.4142 4.25 12 4.25C11.5858 4.25 11.25 4.58579 11.25 5H12.75ZM11.25 19C11.25 19.4142 11.5858 19.75 12 19.75C12.4142 19.75 12.75 19.4142 12.75 19H11.25ZM7.5431 10.7672L12.5431 5.51724L11.4569 4.48276L6.4569 9.73276L7.5431 10.7672ZM11.4569 5.51724L16.4569 10.7672L17.5431 9.73276L12.5431 4.48276L11.4569 5.51724ZM11.25 5V19H12.75V5H11.25Z"  />
        </svg>
      </div>
    </button>
  );
};

export default RefreshButton;