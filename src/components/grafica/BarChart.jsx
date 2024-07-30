import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarChart = (props) => {
  const datasets = props.datasets
  const labels = props.labels
  const yTitle = props.yTitle
  const xTitle = props.xTitle

  const options = {
    responsive: true,
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: xTitle,
          color: 'black',
          font: {
            family: 'Comic Sans MS',
            size: 14,
            weight: 'bold',
            lineHeight: 1.2,
          },
          padding: {
            top: 20,
            left: 0,
            right: 0,
            bottom: 0
          }
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: yTitle,
          color: 'black',
          font: {
            family: 'Comic Sans MS',
            size: 14,
            weight: 'bold',
            lineHeight: 1.2,
          },
          padding: {
            top: 30,
            left: 0,
            right: 0,
            bottom: 20
          }
        },
        grid: {
          color: function (context) {
            console.log("🚀 ~ BarChart ~ context.tick.value:", context.tick.value)
            if (context.tick.value >= 2) {
              return 'green';
            } else {
              return 'white';
            }
          },
        },
      }
    }
  }


  const data = { datasets, labels }

  return <Bar data={data} options={options} />;
};