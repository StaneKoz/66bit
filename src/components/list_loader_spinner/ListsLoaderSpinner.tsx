import { count } from 'console';
import React, { FC } from 'react';
import style from './ListLoaderSpinner.module.scss';

interface IListLoaderSpinnerProps {
  className: string
  count: number
  loading: boolean
}

const ListsLoaderSpinner: FC<IListLoaderSpinnerProps> = ({ count, className, loading }) => {
  const classNames = [className, style.container, loading ? style.active : ''].join(' ');
  const elements = Array.from({length: count}).map((item, index) => (
    <div className={style.item} key={-index}></div>
  ));

  return (
    <div className={classNames}>
      { loading && elements }
    </div>
  );
};

export default ListsLoaderSpinner;