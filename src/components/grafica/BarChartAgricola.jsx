import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChartAgricola = (props) => {
  const data = props.data;

  const years = [...new Set(data.map(item => item.year))];
  const products = [...new Set(data.map(item => item.product))];
  const municipalities = [...new Set(data.map(item => item.municipality))];

  const chartData = {
    labels: years,
    datasets: municipalities.flatMap((municipality, munIndex) =>
      products.map((product, prodIndex) => ({
        municipality,
        label: product,
        data: years.map(year =>
          data.find(d => d.year === year && d.municipality === municipality && d.product === product)?.value || 0
        ),
        backgroundColor: `rgba(${prodIndex * 100}, ${prodIndex * 50}, ${255 - prodIndex * 100}, 0.5)`,
        borderColor: `rgba(${prodIndex * 100}, ${prodIndex * 50}, ${255 - prodIndex * 100}, 1)`,
        borderWidth: 1,
        stack: municipality,
      }))
    ),
  };

  const footer = (tooltipItems) => {
    let sum = 0;
    tooltipItems.forEach(function (tooltipItem) {
      sum += tooltipItem.parsed.y;
    });
    return 'Suma: ' + sum;
  };

  const options = {
    responsive: true,
    interaction: {
      intersect: false,
      mode: 'x',
    },
    plugins: {
      legend: {
        display: true,
        onClick: (e, item) => { },
        labels: {
          generateLabels: (chart) => {
            const datasets = chart.data.datasets;
            const uniqueLabels = [];
            const uniqueColors = [];

            // puros unicos para mostrar
            datasets.forEach(dataset => {
              if (!uniqueLabels.includes(dataset.label)) {
                uniqueLabels.push(dataset.label);
                uniqueColors.push(dataset.backgroundColor);
              }
            });

            return uniqueLabels.map((label, index) => ({
              text: label,
              fillStyle: uniqueColors[index],
              strokeStyle: uniqueColors[index],
            }));
          },
        },
      },
      tooltip: {
        callbacks: {
          title: (tooltipItem) => {
            return `Municipio: ${tooltipItem[0].dataset.municipality}`;
          },
          footer: footer,
        }
      }
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChartAgricola;