import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { format, parseISO } from 'date-fns';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


export const Timeline = (props) => {
  const dataDb = props.data

  const baseDate = new Date('2021-01-01');
  const getDays = (date) => (date ? Math.floor((parseISO(date) - baseDate) / (1000 * 60 * 60 * 24)) : null);

  const dataChart = {
    labels: dataDb.map(cat => cat.name),
    datasets: [
      {
        label: '',
        data: dataDb.map(cat => {
          const start = getDays(cat.startDate);
          return start !== null ? start : 0;
        }),
        backgroundColor: 'rgba(0, 0, 0, 0)', // Invisible
      },
      {
        label: dataDb.map(cat => cat.label),
        data: dataDb.map(cat => {
          const start = getDays(cat.startDate);
          const end = getDays(cat.endDate);
          return start !== null && end !== null ? end - start : 0;
        }),
        backgroundColor: dataDb.map(cat => cat.color),
      }
    ]
  };

  const options = {
    indexAxis: 'y',
    scales: {
      x: {
        stacked: true,
        ticks: {
          callback: (value) => format(new Date(baseDate.getTime() + value * 24 * 60 * 60 * 1000), 'yyyy-MM-dd'),
        },
      },
      y: {
        stacked: true,
      },
    },
    plugins: {
      legend: {
        display: false, // Ocultar la leyenda
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const category = dataDb[context.dataIndex];

            if (category.startDate && category.endDate) {
              return `${category.label}: ${format(parseISO(category.startDate), 'yyyy-MM-dd')} to ${format(parseISO(category.endDate), 'yyyy-MM-dd')}`;
            } else {
              return `${category.label}: No data available`;
            }

          },
        },
      },
    },
  };

  return <Bar data={dataChart} options={options} />;
};
