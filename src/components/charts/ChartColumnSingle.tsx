// components
import Chart, { useChart } from '../chart';

// ----------------------------------------------------------------------

const series = [
  {
    name: 'Average Balance',
    data: [44, 55, 57, 56, 61],
  },
];

export default function ChartColumnSingle() {
  const chartOptions = useChart({
    plotOptions: {
      bar: {
        columnWidth: '80%',
      },
    },
    stroke: {
      show: false,
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },
    tooltip: {
      y: {
        formatter: (value: number) => `SOL ${value}`,
      },
    },
  });

  return <Chart type="bar" series={series} options={chartOptions} height={390} />;
}
