import * as React from 'react';
import { useEffect, useState } from 'react';
import classes from './CoinGraphComponent.module.scss';
import clsx from 'clsx';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import {
  CardComponent,
  CardContentComponent,
  SelectComponent,
  SelectItemComponent,
  TabComponent,
  TabsComponent,
} from '@zero86/components';

export default function CoinGraphComponent() {
  const [series, setSeries] = useState<any>({ series: [] });
  const [options, setOptions] = useState<ApexOptions>({
    chart: {
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    title: {
      text: '',
      align: 'left',
    },
    grid: {
      row: {
        colors: ['#f3f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
  });

  const [tabValue, setTabValue] = useState<number | string>(0);
  const handleTabClick = (e: React.SyntheticEvent, newValue: number | string) => {
    if (tabValue !== newValue) {
      setTabValue(newValue);
    }
  };

  const [selectValue, setSelectValue] = useState<string | number>('Litecoin');
  const handleSelectChange = (value: string | number) => {
    setSelectValue(value);
  };

  useEffect(() => {
    switch (selectValue) {
      case 'Litecoin':
        if (tabValue === 0) {
          setSeries({
            series: [
              {
                name: 'amount',
                data: targetDatas.litecoin.yearly,
              },
            ],
          });
        }
        if (tabValue === 1) {
          setSeries({
            series: [
              {
                name: 'amount',
                data: targetDatas.litecoin.monthly,
              },
            ],
          });
        }
        if (tabValue === 2) {
          setSeries({
            series: [
              {
                name: 'amount',
                data: targetDatas.litecoin.weekly,
              },
            ],
          });
        }
        if (tabValue === 3) {
          setSeries({
            series: [
              {
                name: 'amount',
                data: targetDatas.litecoin.daily,
              },
            ],
          });
        }
        break;
      case 'Bitcoin':
        if (tabValue === 0) {
          setSeries({
            series: [
              {
                name: 'amount',
                data: targetDatas.bitcoin.yearly,
              },
            ],
          });
        }
        if (tabValue === 1) {
          setSeries({
            series: [
              {
                name: 'amount',
                data: targetDatas.bitcoin.monthly,
              },
            ],
          });
        }
        if (tabValue === 2) {
          setSeries({
            series: [
              {
                name: 'amount',
                data: targetDatas.bitcoin.weekly,
              },
            ],
          });
        }
        if (tabValue === 3) {
          setSeries({
            series: [
              {
                name: 'amount',
                data: targetDatas.bitcoin.daily,
              },
            ],
          });
        }
        break;
      case 'Ripple':
        if (tabValue === 0) {
          setSeries({
            series: [
              {
                name: 'amount',
                data: targetDatas.ripple.yearly,
              },
            ],
          });
        }
        if (tabValue === 1) {
          setSeries({
            series: [
              {
                name: 'amount',
                data: targetDatas.ripple.monthly,
              },
            ],
          });
        }
        if (tabValue === 2) {
          setSeries({
            series: [
              {
                name: 'amount',
                data: targetDatas.ripple.weekly,
              },
            ],
          });
        }
        if (tabValue === 3) {
          setSeries({
            series: [
              {
                name: 'amount',
                data: targetDatas.ripple.daily,
              },
            ],
          });
        }
        break;
    }
    switch (tabValue) {
      case 0:
        setOptions({
          ...options,
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
        });

        break;
      case 1:
        setOptions({
          ...options,
          xaxis: {
            categories: [
              '1',
              '2',
              '3',
              '4',
              '5',
              '6',
              '7',
              '8',
              '9',
              '10',
              '11',
              '12',
              '13',
              '14',
              '15',
              '16',
              '17',
              '18',
              '19',
              '20',
              '21',
              '22',
              '23',
              '24',
              '25',
              '26',
              '27',
              '28',
              '29',
              '30',
            ],
          },
        });
        break;
      case 2:
        setOptions({
          ...options,
          xaxis: {
            categories: ['Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'Sunday'],
          },
        });
        break;
      case 3:
        setOptions({
          ...options,
          xaxis: {
            categories: [
              '00:00',
              '01:00',
              '02:00',
              '03:00',
              '04:00',
              '05:00',
              '06:00',
              '07:00',
              '08:00',
              '09:00',
              '10:00',
              '11:00',
              '12:00',
              '13:00',
              '14:00',
              '15:00',
              '16:00',
              '17:00',
              '18:00',
              '19:00',
              '20:00',
              '21:00',
              '22:00',
              '23:00',
            ],
          },
        });

        break;
    }
  }, [selectValue, tabValue]);

  return (
    <CardComponent>
      <CardContentComponent>
        <div className="row-wrap align-items-center justify-content-between">
          <div className="col-12 col-sm-2">
            <SelectComponent value={selectValue} onChange={handleSelectChange}>
              <SelectItemComponent value="Litecoin" selectedValue={selectValue}>
                Litecoin
              </SelectItemComponent>
              <SelectItemComponent value="Bitcoin" selectedValue={selectValue}>
                Bitcoin
              </SelectItemComponent>
              <SelectItemComponent value="Ripple" selectedValue={selectValue}>
                Ripple
              </SelectItemComponent>
            </SelectComponent>
          </div>
          <div className="col-12 col-sm-3 row justify-content-end">
            <TabsComponent value={tabValue} handleClick={handleTabClick}>
              <TabComponent name="Yearly" value={0} />
              <TabComponent name="Monthly" value={1} />
              <TabComponent name="Weekly" value={2} />
              <TabComponent name="Today" value={3} />
            </TabsComponent>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {/*
 // @ts-ignore */}
            <ReactApexChart options={options} series={series.series} type="line" width="100%" height={360} />
          </div>
        </div>
      </CardContentComponent>
    </CardComponent>
  );
}

const targetDatas = {
  bitcoin: {
    monthly: [
      6000, 4800, 6500, 6000, 7800, 9000, 6000, 7000, 3700, 7800, 5800, 6500, 7200, 6500, 2344, 4243, 5343, 2435, 4322,
      2545, 3234, 4233, 2444, 6543, 4223, 4323, 2345, 2345, 5676, 2345,
    ],
    yearly: [6000, 4800, 6500, 6000, 7800, 9000, 6000, 7000, 3700, 7800, 5800, 6500],
    daily: [
      2444, 6000, 4800, 6500, 6000, 7800, 9000, 6000, 7000, 3700, 7800, 5800, 6500, 7200, 6500, 2344, 4243, 5343, 2435,
      4322, 2545, 3234, 4233, 2444,
    ],
    weekly: [6000, 4800, 6500, 6000, 7800, 9000, 6000],
  },
  litecoin: {
    monthly: [
      5600, 7000, 6400, 4500, 5500, 5900, 7500, 6500, 5400, 5000, 4400, 4900, 5500, 6300, 3944, 4243, 5043, 6935, 5622,
      7645, 4034, 5633, 3944, 4543, 4023, 3623, 5045, 3645, 4576, 2945,
    ],
    yearly: [5600, 4400, 6000, 4500, 7000, 6400, 8000, 6500, 7000, 5800, 6200, 5000],
    daily: [
      4500, 6000, 3500, 4300, 5500, 6300, 7000, 6000, 5200, 3900, 4600, 4000, 4800, 6400, 5200, 3944, 2543, 4043, 4735,
      3822, 5245, 6534, 5533, 5044,
    ],
    weekly: [6500, 5200, 7800, 3900, 5200, 2600, 7800],
  },
  ripple: {
    monthly: [
      4300, 3600, 4500, 5200, 4800, 5600, 6700, 5400, 5000, 6300, 6700, 7800, 7300, 6200, 4644, 5043, 4243, 4635, 3222,
      4145, 3734, 4233, 3144, 3543, 3023, 4023, 4245, 3145, 3576, 2345,
    ],
    yearly: [7600, 6200, 6800, 5000, 4200, 5600, 6800, 8100, 5700, 4500, 3700, 4700],
    daily: [
      2600, 3300, 2800, 3200, 4000, 3400, 3100, 4500, 4900, 4200, 5300, 5900, 4800, 6800, 6100, 7844, 7143, 4043, 4835,
      4322, 3645, 4934, 5933, 3944,
    ],
    weekly: [3400, 4800, 3700, 5600, 5100, 7200, 6300],
  },
};
