import React, { FC } from 'react';
import { INewsItem } from '../../types/INewsItem';
import style from './NewsItem.module.scss';

interface INewsItemProps {
  newsItem: INewsItem
}

const NewsItem:FC<INewsItemProps> = ({ newsItem }) => {
  const date = new Date(newsItem.createdAt).toLocaleDateString();

  return (
    <li className={style.item}>
      <h2 className={style.title}>
        {newsItem.title}
      </h2>
      <div className={style.createdAt}>
        {date}
      </div>
      <div className={style.preview}>
        {newsItem.content}
      </div>
    </li>
  );
};

export default NewsItem;