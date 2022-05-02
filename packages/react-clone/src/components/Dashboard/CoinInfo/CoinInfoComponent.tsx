import classes from './CoinInfoComponent.module.scss';
import clsx from 'clsx';

interface CoinInfoComponentProps {
  imgUrl?: string;
  bg?: string;
  coinName?: string;
  price?: number;
  rate?: number;
}

export default function CoinInfoComponent({ imgUrl, bg, coinName, price = 0, rate = 0 }: CoinInfoComponentProps) {
  return (
    <div className={clsx(classes.coinInfo)}>
      <figure style={{ backgroundColor: `${bg}` }}>
        <img src={imgUrl} alt="coin-logo" />
      </figure>
      <div className={clsx(classes.price)}>
        <p>{coinName} Price</p>
        <h3>
          ${price}
          <br />
          <span className={clsx(rate > 0 ? classes.green : classes.red)}>{rate}%</span>
        </h3>
      </div>
    </div>
  );
}
