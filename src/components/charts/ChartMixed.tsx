// components
import Chart, { useChart } from '../chart';

// ----------------------------------------------------------------------

type Props = {
  first?: {
    type: string,
    name: string,
  },
  second?: {
    type: string,
    name: string,
  },
}

export default function ChartMixed({first, second} : Props) {
  const series = [
    {
      name: `${first?.name ? first.name : "Volume"}`,
      type: `${first?.type ? first.type : 'column'}`,
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
    },
    {
      name: `${second?.name ? second.name : "Price"}`,
      type: `${second?.type ? second.type : 'line'}`,
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
    },
  ];
  const chartOptions = useChart({
    stroke: {
      width: [3, 3],
    },
    plotOptions: {
      bar: { columnWidth: '50%' },
    },
    fill: {
      type: ['solid', 'solid'],
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100]
      },
    },
    legend: {
      show: false
    },
    labels: [
      '01/01/2003',
      '02/01/2003',
      '03/01/2003',
      '04/01/2003',
      '05/01/2003',
      '06/01/2003',
      '07/01/2003',
      '08/01/2003',
      '09/01/2003',
      '10/01/2003',
      '11/01/2003',
    ],
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      /*title: { text: 'Points' },*/
      min: 0,
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (value: number) => {
          if (typeof value !== 'undefined') {
            return `${value.toFixed(0)} points`;
          }
          return value;
        },
      },
    },
  });

  return <Chart type="line" series={series} options={chartOptions} height={350} />;
}
