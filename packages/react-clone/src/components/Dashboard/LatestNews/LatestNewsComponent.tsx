import classes from './LatestNewsComponent.module.scss';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

interface NewsData {
  id: number;
  news: string;
  created: string;
  image: string;
  by: string;
}

const NewsRow = (targetNews: NewsData) => {
  return (
    <div className={clsx(classes.newsRow)}>
      <div className={clsx(classes.header)}>
        <p className={clsx(classes.created)}>{targetNews.created}</p>
        <p className={clsx(classes.by)}>{targetNews.by}</p>
      </div>
      <div className={clsx(classes.body)}>
        <p className={clsx(classes.news)}>{targetNews.news}</p>
        <img src={targetNews.image} alt="news-img" />
      </div>
    </div>
  );
};

export default function LatestNewsComponent() {
  const [news, setNews] = useState<NewsData[]>([]);
  useEffect(() => {
    setNews(targetData);
  }, []);

  return (
    <div className={clsx(classes.latestNews)}>
      <h3>Latest News</h3>
      {news.map(targetNews => {
        return <NewsRow key={targetNews.id} {...targetNews} />;
      })}
    </div>
  );
}

const targetData = [
  {
    id: 1,
    news: 'Power Ledger’s Jemma Green Is Fighting Climate Change by Helping Trade Neighbors Energy. Binance Coin Spikes Almost 20 Percent as...',
    created: '16 mins',
    image: new URL('../../../assets/imgs/news/img-bitcoin1.png', import.meta.url).href,
    by: 'BTC EHTD USD',
  },
  {
    id: 2,
    news: 'Binance Coin Spikes Almost 20 Percent as Bitcoin and Crypto Market Take a Break After Red Wave. Bitcoin with other major coins have dropped...',
    created: '45 mins',
    image: new URL('../../../assets/imgs/news/img-bitcoin2.png', import.meta.url).href,
    by: 'BTC EHTD USD',
  },
  {
    id: 3,
    news: 'Power Ledger’s Jemma Green Is Fighting Climate Change by Helping Trade Neighbors Energy. Binance Coin Spikes Almost 20 Percent as...',
    created: '1 Hrs',
    image: new URL('../../../assets/imgs/news/img-bitcoin3.png', import.meta.url).href,
    by: 'BTC EHTD USD',
  },
];
