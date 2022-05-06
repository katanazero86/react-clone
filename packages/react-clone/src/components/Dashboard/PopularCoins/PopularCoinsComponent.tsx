import { useState, useEffect } from 'react';
import classes from './PopularCoinsComponent.module.scss';
import clsx from 'clsx';

interface PopularCoinsData {
  id: number;
  name: string;
  shortName: string;
  marketCap: string;
  volume: string;
  h: string;
  image: string;
  color: string;
}

export default function PopularCoinsComponent() {
  const [popularCoins, setPopularCoins] = useState<PopularCoinsData[]>([]);
  useEffect(() => {
    setPopularCoins(targetData);
  }, []);

  return (
    <div className={clsx(classes.popularCoins)}>
      <h3>Popular Coins</h3>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Market Cap</th>
            <th>Volume 24h</th>
            <th>24h %</th>
          </tr>
        </thead>
        <tbody>
          {popularCoins.map(pc => {
            return (
              <tr key={pc.id}>
                <td>{pc.id}</td>
                <td>{pc.name}</td>
                <td>{pc.marketCap}</td>
                <td>{pc.volume}</td>
                <td>{pc.h}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const targetData = [
  {
    id: 1,
    name: 'Bitcoin',
    shortName: 'BTC',
    marketCap: '129,820,932',
    volume: '25,111,773',
    h: '2.50',
    image: '/assets/images/bitcoin.svg',
    color: '#fb8c00',
  },
  {
    id: 2,
    name: 'Ethereum',
    shortName: 'ETH',
    marketCap: '24,909,820',
    volume: '12,344,434',
    h: '0.45',
    image: '/assets/images/etherium.svg',
    color: 'black',
  },
  {
    id: 3,
    name: 'Litecoin',
    shortName: 'LTC',
    marketCap: '137,334,223',
    volume: '43,434,213',
    h: '3.43',
    image: '/assets/images/litcoin.svg',
    color: '#42a5f5',
  },
  {
    id: 4,
    name: 'Monero',
    shortName: 'XMR',
    marketCap: '21,445,237',
    volume: '32,324,655',
    h: '0.93',
    image: '/assets/images/bitcoin.svg',
    color: '#ff9800',
  },
  {
    id: 5,
    name: 'Dashcoin',
    shortName: 'DASH',
    marketCap: '124,674,765',
    volume: '94,342,323',
    h: '0.30',
    image: '/assets/images/bitcoin.svg',
    color: '#1e88e5',
  },
];
