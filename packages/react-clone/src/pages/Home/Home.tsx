import * as React from 'react';
import './Home.scss';
import TotalBalanceComponent from '../../components/Dashboard/TotalBalance/TotalBalanceComponent';
import CoinInfoComponent from '../../components/Dashboard/CoinInfo/CoinInfoComponent';
import CoinGraphComponent from '../../components/Dashboard/CoinGraph/CoinGraphComponent';
import { CardComponent, CardContentComponent, TypographyComponent } from '@zero86/components';
import PopularCoinsComponent from '../../components/Dashboard/PopularCoins/PopularCoinsComponent';
import LatestNewsComponent from '../../components/Dashboard/LatestNews/LatestNewsComponent';

export default function Home() {
  return (
    <div className="home">
      <TypographyComponent variant={'h2'}>Dashboard</TypographyComponent>
      <div className="row-wrap">
        <div className="col-12 col-md-6">
          <CardComponent>
            <CardContentComponent>
              <TotalBalanceComponent />
            </CardContentComponent>
          </CardComponent>
        </div>
        <div className="row-wrap col-12 col-md-6">
          {coinInfos.map(data => {
            return (
              <div className="col-12 col-sm-6 col-md-6" key={data.id}>
                <CardComponent>
                  <CardContentComponent>
                    <CoinInfoComponent
                      imgUrl={data.imgUrl}
                      bg={data.bg}
                      coinName={data.coinName}
                      price={data.price}
                      rate={data.rate}
                    />
                  </CardContentComponent>
                </CardComponent>
              </div>
            );
          })}
        </div>
        <div className="col-12">
          <CoinGraphComponent />
        </div>
        <div className="col-12 col-md-6">
          <CardComponent>
            <CardContentComponent noPadding>
              <PopularCoinsComponent />
            </CardContentComponent>
          </CardComponent>
        </div>
        <div className="col-12 col-md-6">
          <CardComponent hFull>
            <CardContentComponent>
              <LatestNewsComponent />
            </CardContentComponent>
          </CardComponent>
        </div>
      </div>
    </div>
  );
}

const coinInfos = [
  {
    id: '001',
    imgUrl: new URL('../../assets/imgs/img-bitcoin-logo.svg', import.meta.url).href,
    coinName: 'Bitcoin',
    price: 7289.75,
    rate: 0.8,
    bg: '#9E49E6',
  },
  {
    id: '002',
    imgUrl: new URL('../../assets/imgs/img-etherium-logo.svg', import.meta.url).href,
    coinName: 'Etherium',
    price: 7289.75,
    rate: -0.4,
    bg: '#0A8FDC',
  },

  {
    id: '003',
    imgUrl: new URL('../../assets/imgs/img-litecoin-logo.svg', import.meta.url).href,
    coinName: 'Litecoin',
    price: 7289.75,
    rate: 0.76,
    bg: '#FFA940',
  },

  {
    id: '004',
    imgUrl: new URL('../../assets/imgs/img-ripple-logo.svg', import.meta.url).href,
    coinName: 'Ripple',
    price: 7289.75,
    rate: 0.8,
    bg: '#F44D50',
  },
];
