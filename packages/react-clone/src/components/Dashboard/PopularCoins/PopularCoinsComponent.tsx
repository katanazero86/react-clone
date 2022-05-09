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
      <div className={clsx(classes.coinTable)}>
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
                  <td className={clsx(classes.nameCol)}>
                    <div>
                      <figure style={{ backgroundColor: `${pc.color}` }}>
                        <img src={pc.image} alt="coin-logo" />
                      </figure>
                      {pc.name}
                    </div>
                  </td>
                  <td>{pc.marketCap}</td>
                  <td>{pc.volume}</td>
                  <td>{pc.h}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
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
    image: new URL('../../../assets/imgs/img-bitcoin-logo.svg', import.meta.url).href,
    color: '#fb8c00',
  },
  {
    id: 2,
    name: 'Ethereum',
    shortName: 'ETH',
    marketCap: '24,909,820',
    volume: '12,344,434',
    h: '0.45',
    image: new URL('../../../assets/imgs/img-etherium-logo.svg', import.meta.url).href,
    color: 'black',
  },
  {
    id: 3,
    name: 'Litecoin',
    shortName: 'LTC',
    marketCap: '137,334,223',
    volume: '43,434,213',
    h: '3.43',
    image: new URL('../../../assets/imgs/img-litecoin-logo.svg', import.meta.url).href,
    color: '#42a5f5',
  },
  {
    id: 4,
    name: 'Monero',
    shortName: 'XMR',
    marketCap: '21,445,237',
    volume: '32,324,655',
    h: '0.93',
    image: new URL('../../../assets/imgs/img-bitcoin-logo.svg', import.meta.url).href,
    color: '#ff9800',
  },
  {
    id: 5,
    name: 'Dashcoin',
    shortName: 'DASH',
    marketCap: '124,674,765',
    volume: '94,342,323',
    h: '0.30',
    image: new URL('../../../assets/imgs/img-bitcoin-logo.svg', import.meta.url).href,
    color: '#1e88e5',
  },
];
