// eslint-disable-next-line
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

export const ChartExample = () => {
    return (
        <>
        <div className='h-96'>
            <Bar 
                data={{
                labels: ["X", "Y", "Z"],
                datasets: [
                    {
                        label: "Ganancia",
                        data: [1400, 4000, 8000]
                    }
                ]
                    }
                }
            ></Bar>
        </div>

        </>
    )
}