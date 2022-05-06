import * as React from 'react';
import { useEffect, useState } from 'react';
import classes from './CoinGraphComponent.module.scss';
import clsx from 'clsx';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import {
  CardComponent,
  CardContentComponent,
  SelectComponent,
  SelectItemComponent,
  TabComponent,
  TabsComponent,
} from '@zero86/components';

export default function CoinGraphComponent() {
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

  const [targetData, setTargetData] = useState<{ yearlyData: []; monthlyData: []; weeklyData: []; dailyData: [] }>({
    dailyData: [],
    monthlyData: [],
    weeklyData: [],
    yearlyData: [],
  });
  useEffect(() => {
    switch (selectValue) {
      case 'Litecoin':
        setTargetData(targetDatas.litecoin as { yearlyData: []; monthlyData: []; weeklyData: []; dailyData: [] });
        break;
      case 'Bitcoin':
        setTargetData(targetDatas.bitcoin as { yearlyData: []; monthlyData: []; weeklyData: []; dailyData: [] });
        break;
      case 'Ripple':
        setTargetData(targetDatas.ripple as { yearlyData: []; monthlyData: []; weeklyData: []; dailyData: [] });
        break;
      default:
        setTargetData(targetDatas.litecoin as { yearlyData: []; monthlyData: []; weeklyData: []; dailyData: [] });
        break;
    }
  }, [selectValue]);

  const getData = (value: string | number) => {
    switch (value) {
      case 0:
        return targetData.yearlyData;
      case 1:
        return targetData.monthlyData;
      case 2:
        return targetData.weeklyData;
      case 3:
        return targetData.dailyData;
      default:
        return targetData.monthlyData;
    }
  };

  const onGetDataKey = (value: string | number) => {
    switch (value) {
      case 0:
        return 'month';

      case 1:
        return 'date';

      case 2:
        return 'day';

      case 3:
        return 'time';

      default:
        return 'month';
    }
  };

  return (
    <CardComponent>
      <CardContentComponent>
        <div className="row align-items-center justify-content-between">
          <div className="col-2">
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
          <div className="col-3 row justify-content-end">
            <TabsComponent value={tabValue} handleClick={handleTabClick}>
              <TabComponent name="Yearly" value={0} />
              <TabComponent name="Monthly" value={1} />
              <TabComponent name="Weekly" value={2} />
              <TabComponent name="Today" value={3} />
            </TabsComponent>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={360}>
          <AreaChart data={getData(tabValue)} margin={{ top: 50, right: 0, left: 0, bottom: 0 }}>
            <XAxis
              dataKey={onGetDataKey(tabValue)}
              tickLine={false}
              axisLine={false}
              padding={{ left: 20, right: 20 }}
            />
            <Tooltip labelStyle={{ color: 'black' }} />
            <YAxis tickLine={false} axisLine={false} ticks={[2000, 4000, 6000, 8000, 10000]} type="number" />
            <CartesianGrid strokeDasharray="2 10" stroke="#E53E3E" vertical={false} />
            <defs>
              <linearGradient id="color15" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FED7E2" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FFF5F7" stopOpacity={0.8} />
              </linearGradient>
            </defs>
            <Area dataKey="amount" strokeWidth={4} stackId="2" stroke="#E53E3E" fill="url(#color15)" fillOpacity={1} />
          </AreaChart>
        </ResponsiveContainer>
      </CardContentComponent>
    </CardComponent>
  );
}

const targetDatas = {
  bitcoin: {
    yearlyData: [
      {
        month: 'Jan',
        amount: 6000,
      },
      {
        month: 'Feb',
        amount: 4800,
      },
      {
        month: 'Mar',
        amount: 6500,
      },
      {
        month: 'Apr',
        amount: 6000,
      },
      {
        month: 'May',
        amount: 7800,
      },
      {
        month: 'Jun',
        amount: 9000,
      },
      {
        month: 'Jul',
        amount: 6000,
      },
      {
        month: 'Aug',
        amount: 7000,
      },
      {
        month: 'Sep',
        amount: 3700,
      },
      {
        month: 'Oct',
        amount: 7800,
      },
      {
        month: 'Nov',
        amount: 5800,
      },
      {
        month: 'Dec',
        amount: 6500,
      },
    ],
    monthlyData: [
      {
        date: '1',
        amount: 6000,
      },
      {
        date: '2',
        amount: 4800,
      },
      {
        date: '3',
        amount: 6500,
      },
      {
        date: '4',
        amount: 6000,
      },
      {
        date: '5',
        amount: 7800,
      },
      {
        date: '6',
        amount: 9000,
      },
      {
        date: '7',
        amount: 6000,
      },
      {
        date: '8',
        amount: 7000,
      },
      {
        date: '9',
        amount: 3700,
      },
      {
        date: '10',
        amount: 7800,
      },
      {
        date: '11',
        amount: 5800,
      },
      {
        date: '12',
        amount: 6500,
      },
      {
        date: '13',
        amount: 7200,
      },
      {
        date: '14',
        amount: 6500,
      },
      {
        date: '15',
        amount: 2344,
      },
      {
        date: '16',
        amount: 4243,
      },
      {
        date: '17',
        amount: 5343,
      },
      {
        date: '18',
        amount: 2435,
      },
      {
        date: '19',
        amount: 4322,
      },
      {
        date: '20',
        amount: 2545,
      },
      {
        date: '21',
        amount: 3234,
      },
      {
        date: '22',
        amount: 4233,
      },
      {
        date: '23',
        amount: 2444,
      },
      {
        date: '24',
        amount: 6543,
      },
      {
        date: '25',
        amount: 4223,
      },
      {
        date: '26',
        amount: 4323,
      },
      {
        date: '27',
        amount: 2345,
      },
      {
        date: '28',
        amount: 2345,
      },
      {
        date: '29',
        amount: 5676,
      },
      {
        date: '30',
        amount: 2345,
      },
    ],
    weeklyData: [
      {
        day: 'Monday',
        amount: 6000,
      },
      {
        day: 'Tuesday',
        amount: 4800,
      },
      {
        day: 'Wednesday',
        amount: 6500,
      },
      {
        day: 'Thrusday',
        amount: 6000,
      },
      {
        day: 'Friday',
        amount: 7800,
      },
      {
        day: 'Saturday',
        amount: 9000,
      },
      {
        day: 'Sunday',
        amount: 6000,
      },
    ],
    dailyData: [
      {
        time: '00:00',
        amount: 2444,
      },
      {
        time: '01:00',
        amount: 6000,
      },
      {
        time: '02:00',
        amount: 4800,
      },
      {
        time: '03:00',
        amount: 6500,
      },
      {
        time: '04:00',
        amount: 6000,
      },
      {
        time: '05:00',
        amount: 7800,
      },
      {
        time: '06:00',
        amount: 9000,
      },
      {
        time: '07:00',
        amount: 6000,
      },
      {
        time: '08:00',
        amount: 7000,
      },
      {
        time: '09:00',
        amount: 3700,
      },
      {
        time: '10:00',
        amount: 7800,
      },
      {
        time: '11:00',
        amount: 5800,
      },
      {
        time: '12:00',
        amount: 6500,
      },
      {
        time: '13:00',
        amount: 7200,
      },
      {
        time: '14:00',
        amount: 6500,
      },
      {
        time: '15:00',
        amount: 2344,
      },
      {
        time: '16:00',
        amount: 4243,
      },
      {
        time: '17:00',
        amount: 5343,
      },
      {
        time: '18:00',
        amount: 2435,
      },
      {
        time: '19:00',
        amount: 4322,
      },
      {
        time: '20:00',
        amount: 2545,
      },
      {
        time: '21:00',
        amount: 3234,
      },
      {
        time: '22:00',
        amount: 4233,
      },
      {
        time: '23:00',
        amount: 2444,
      },
    ],
  },
  litecoin: {
    yearlyData: [
      {
        month: 'Jan',
        amount: 5600,
      },
      {
        month: 'Feb',
        amount: 4400,
      },
      {
        month: 'Mar',
        amount: 6000,
      },
      {
        month: 'Apr',
        amount: 4500,
      },
      {
        month: 'May',
        amount: 7000,
      },
      {
        month: 'Jun',
        amount: 6400,
      },
      {
        month: 'Jul',
        amount: 8000,
      },
      {
        month: 'Aug',
        amount: 6500,
      },
      {
        month: 'Sep',
        amount: 7000,
      },
      {
        month: 'Oct',
        amount: 5800,
      },
      {
        month: 'Nov',
        amount: 6200,
      },
      {
        month: 'Dec',
        amount: 5000,
      },
    ],
    monthlyData: [
      {
        date: '1',
        amount: 5600,
      },
      {
        date: '2',
        amount: 7000,
      },
      {
        date: '3',
        amount: 6400,
      },
      {
        date: '4',
        amount: 4500,
      },
      {
        date: '5',
        amount: 5500,
      },
      {
        date: '6',
        amount: 5900,
      },
      {
        date: '7',
        amount: 7500,
      },
      {
        date: '8',
        amount: 6500,
      },
      {
        date: '9',
        amount: 5400,
      },
      {
        date: '10',
        amount: 5000,
      },
      {
        date: '11',
        amount: 4400,
      },
      {
        date: '12',
        amount: 4900,
      },
      {
        date: '13',
        amount: 5500,
      },
      {
        date: '14',
        amount: 6300,
      },
      {
        date: '15',
        amount: 3944,
      },
      {
        date: '16',
        amount: 4243,
      },
      {
        date: '17',
        amount: 5043,
      },
      {
        date: '18',
        amount: 6935,
      },
      {
        date: '19',
        amount: 5622,
      },
      {
        date: '20',
        amount: 7645,
      },
      {
        date: '21',
        amount: 4034,
      },
      {
        date: '22',
        amount: 5633,
      },
      {
        date: '23',
        amount: 3944,
      },
      {
        date: '24',
        amount: 4543,
      },
      {
        date: '25',
        amount: 4023,
      },
      {
        date: '26',
        amount: 3623,
      },
      {
        date: '27',
        amount: 5045,
      },
      {
        date: '28',
        amount: 3645,
      },
      {
        date: '29',
        amount: 4576,
      },
      {
        date: '30',
        amount: 2945,
      },
    ],
    weeklyData: [
      {
        day: 'Monday',
        amount: 6500,
      },
      {
        day: 'Tuesday',
        amount: 5200,
      },
      {
        day: 'Wednesday',
        amount: 7800,
      },
      {
        day: 'Thrusday',
        amount: 3900,
      },
      {
        day: 'Friday',
        amount: 5200,
      },
      {
        day: 'Saturday',
        amount: 2600,
      },
      {
        day: 'Sunday',
        amount: 7800,
      },
    ],
    dailyData: [
      {
        time: '00:00',
        amount: 4500,
      },
      {
        time: '01:00',
        amount: 6000,
      },
      {
        time: '02:00',
        amount: 3500,
      },
      {
        time: '03:00',
        amount: 4300,
      },
      {
        time: '04:00',
        amount: 5500,
      },
      {
        time: '05:00',
        amount: 6300,
      },
      {
        time: '06:00',
        amount: 7000,
      },
      {
        time: '07:00',
        amount: 6000,
      },
      {
        time: '08:00',
        amount: 5200,
      },
      {
        time: '09:00',
        amount: 3900,
      },
      {
        time: '10:00',
        amount: 4600,
      },
      {
        time: '11:00',
        amount: 4000,
      },
      {
        time: '12:00',
        amount: 4800,
      },
      {
        time: '13:00',
        amount: 6400,
      },
      {
        time: '14:00',
        amount: 5200,
      },
      {
        time: '15:00',
        amount: 3944,
      },
      {
        time: '16:00',
        amount: 2543,
      },
      {
        time: '17:00',
        amount: 4043,
      },
      {
        time: '18:00',
        amount: 4735,
      },
      {
        time: '19:00',
        amount: 3822,
      },
      {
        time: '20:00',
        amount: 5245,
      },
      {
        time: '21:00',
        amount: 6534,
      },
      {
        time: '22:00',
        amount: 5533,
      },
      {
        time: '23:00',
        amount: 5044,
      },
    ],
  },
  ripple: {
    yearlyData: [
      {
        month: 'Jan',
        amount: 7600,
      },
      {
        month: 'Feb',
        amount: 6200,
      },
      {
        month: 'Mar',
        amount: 6800,
      },
      {
        month: 'Apr',
        amount: 5000,
      },
      {
        month: 'May',
        amount: 4200,
      },
      {
        month: 'Jun',
        amount: 5600,
      },
      {
        month: 'Jul',
        amount: 6800,
      },
      {
        month: 'Aug',
        amount: 8100,
      },
      {
        month: 'Sep',
        amount: 5700,
      },
      {
        month: 'Oct',
        amount: 4500,
      },
      {
        month: 'Nov',
        amount: 3700,
      },
      {
        month: 'Dec',
        amount: 4700,
      },
    ],
    monthlyData: [
      {
        date: '1',
        amount: 4300,
      },
      {
        date: '2',
        amount: 3600,
      },
      {
        date: '3',
        amount: 4500,
      },
      {
        date: '4',
        amount: 5200,
      },
      {
        date: '5',
        amount: 4800,
      },
      {
        date: '6',
        amount: 5600,
      },
      {
        date: '7',
        amount: 6700,
      },
      {
        date: '8',
        amount: 5400,
      },
      {
        date: '9',
        amount: 5000,
      },
      {
        date: '10',
        amount: 6300,
      },
      {
        date: '11',
        amount: 6700,
      },
      {
        date: '12',
        amount: 7800,
      },
      {
        date: '13',
        amount: 7300,
      },
      {
        date: '14',
        amount: 6200,
      },
      {
        date: '15',
        amount: 4644,
      },
      {
        date: '16',
        amount: 5043,
      },
      {
        date: '17',
        amount: 4243,
      },
      {
        date: '18',
        amount: 4635,
      },
      {
        date: '19',
        amount: 3222,
      },
      {
        date: '20',
        amount: 4145,
      },
      {
        date: '21',
        amount: 3734,
      },
      {
        date: '22',
        amount: 4233,
      },
      {
        date: '23',
        amount: 3144,
      },
      {
        date: '24',
        amount: 3543,
      },
      {
        date: '25',
        amount: 3023,
      },
      {
        date: '26',
        amount: 4023,
      },
      {
        date: '27',
        amount: 4245,
      },
      {
        date: '28',
        amount: 3145,
      },
      {
        date: '29',
        amount: 3576,
      },
      {
        date: '30',
        amount: 2345,
      },
    ],
    weeklyData: [
      {
        day: 'Monday',
        amount: 3400,
      },
      {
        day: 'Tuesday',
        amount: 4800,
      },
      {
        day: 'Wednesday',
        amount: 3700,
      },
      {
        day: 'Thrusday',
        amount: 5600,
      },
      {
        day: 'Friday',
        amount: 5100,
      },
      {
        day: 'Saturday',
        amount: 7200,
      },
      {
        day: 'Sunday',
        amount: 6300,
      },
    ],
    dailyData: [
      {
        time: '00:00',
        amount: 2600,
      },
      {
        time: '01:00',
        amount: 3300,
      },
      {
        time: '02:00',
        amount: 2800,
      },
      {
        time: '03:00',
        amount: 3200,
      },
      {
        time: '04:00',
        amount: 4000,
      },
      {
        time: '05:00',
        amount: 3400,
      },
      {
        time: '06:00',
        amount: 3100,
      },
      {
        time: '07:00',
        amount: 4500,
      },
      {
        time: '08:00',
        amount: 4900,
      },
      {
        time: '09:00',
        amount: 4200,
      },
      {
        time: '10:00',
        amount: 5300,
      },
      {
        time: '11:00',
        amount: 5900,
      },
      {
        time: '12:00',
        amount: 4800,
      },
      {
        time: '13:00',
        amount: 6800,
      },
      {
        time: '14:00',
        amount: 6100,
      },
      {
        time: '15:00',
        amount: 7844,
      },
      {
        time: '16:00',
        amount: 7143,
      },
      {
        time: '17:00',
        amount: 4043,
      },
      {
        time: '18:00',
        amount: 4835,
      },
      {
        time: '19:00',
        amount: 4322,
      },
      {
        time: '20:00',
        amount: 3645,
      },
      {
        time: '21:00',
        amount: 4934,
      },
      {
        time: '22:00',
        amount: 5933,
      },
      {
        time: '23:00',
        amount: 3944,
      },
    ],
  },
};
