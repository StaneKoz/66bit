import React, { useState } from 'react';
import NewsList from '../news_list/NewsList';
import style from './NewsPage.module.scss';

const NewsPage = () => {

  return (
    <div className={style.page}>
      <NewsList />
    </div>
  );
};

export default NewsPage;