import classes from './TotalBalanceComponent.module.scss';
import clsx from 'clsx';
import { ButtonBasicComponent } from '@zero86/components';

interface CoinCurrencyProps {
  currency?: number;
  coinName?: string;
}

const CoinCurrency = ({ currency, coinName }: CoinCurrencyProps) => {
  return (
    <div className={clsx(classes.coinCurrency)}>
      <h3>{currency}</h3>
      <p>{coinName}</p>
    </div>
  );
};

export default function TotalBalanceComponent() {
  return (
    <div className={clsx(classes.totalBalance)}>
      <div className="row-wrap align-items-center justify-content-between">
        <p className={clsx(classes.balance, 'col-12 col-md')}>$33692.00</p>
        <div className="col-12 col-md row">
          <ButtonBasicComponent name="Send" flat fullWidth />
          <ButtonBasicComponent name="Receive" fullWidth />
        </div>
      </div>
      <div>
        <p className={clsx(classes.buyCurrency)}>Buy Currency in USD</p>
      </div>
      <div className="row-wrap align-items-center justify-content-between">
        <CoinCurrency currency={9.654} coinName="Bitcoin" />
        <CoinCurrency currency={76.184} coinName="Monero" />
        <CoinCurrency currency={1567.5} coinName="Ripple" />
        <CoinCurrency currency={56.78} coinName="Litecoin" />
      </div>
    </div>
  );
}
