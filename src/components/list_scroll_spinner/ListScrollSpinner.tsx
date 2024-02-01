import React, { FC } from 'react';
import style from './ListScrollSpinneer.module.scss';

interface ListScrollSpinneer {
  loading: boolean
}

const ListScrollSpinner:FC<ListScrollSpinneer> = ({loading}) => {
  const classNames = [style.container, loading ? style.active : ''].join(' ');
  return (
    <div className={classNames}>
      <div className={style.spinner}>
      </div>
    </div>
  );
};

export default ListScrollSpinner;