import React, { useEffect, useMemo, useState } from 'react';
import NewsItem from '../news_item/NewsItem';
import { INewsItem } from '../../types/INewsItem';
import ListsLoaderSpinner from '../list_loader_spinner/ListsLoaderSpinner';
import style from './NewsList.module.scss';
import ListScrollSpinner from '../list_scroll_spinner/ListScrollSpinner';
import SwiperLoader from '../swiperLoader/SwiperLoader';

const limitItems = 10;
const XTotalCount = 30;

const NewsList = () => {
  const [news, setNews] = useState<INewsItem[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [fetching, setFetching] = useState<boolean>(true);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return function () {
      document.removeEventListener('scroll', scrollHandler);
    }
  }, [news]);

  useEffect(() => {
    if (fetching) {
      if (currentPage == 1) {
        setNews([]);
      }
      fetchNews();
    }
  }, [fetching]);

  async function fetchNews() {
    const response = await fetch(`https://frontappapi.dock7.66bit.ru/api/news/get?page=${currentPage}&count=${limitItems} `, {
      method: 'GET'
    });
    
    if (response.status == 200) {
      const result = await response.json()
      setTimeout(() => {
        if (currentPage != 1) {
          setNews([...news, ...result]);
        } else {
          setNews([...result]);
        }
        setCurrentPage(currentPage + 1);
        setFetching(false);
        setLoading(false)
      }, 1500)
    }
  };

  function scrollHandler(e: any) {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 150
      && !loading && news.length < XTotalCount) {
      setFetching(true);
      setLoading(true);
    }
  };

  return (
    <div className={[style.newsContainer, '_container'].join(' ')}>
      <SwiperLoader fetching={fetching} setFetching={setFetching} setCurrentPage={setCurrentPage}
        loading={loading}
        setLoading={setLoading} />
      <ul className={style.list}>
        {news.map(item => <NewsItem newsItem={item} key={item.id} />)}
      </ul>
      <ListsLoaderSpinner count={limitItems} className={style.newsListLoaderSpinner} loading={loading && currentPage == 1} />
      <ListScrollSpinner loading={loading && currentPage > 1} />
    </div>
  );
};

export default NewsList;