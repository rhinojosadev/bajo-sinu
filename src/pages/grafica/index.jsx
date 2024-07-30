import React from 'react';

import { BarChart } from '../home/components/barChart';

export const Grafica = () => {
    const data = {
        labels: ['2004', '2005', '2006', '2007', '2008', '2009'],
        datasets: [
            {
                label: 'Car',
                data: [77, 88, 99, 55, 44, 66],
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
            },
            {
                label: 'Leche',
                data: [11, 12, 14, 11, 16, 12],
                borderColor: 'rgba(255, 159, 64, 1)',
                backgroundColor: 'rgba(255, 159, 64, 0.5)',
            },
            {
                label: 'Carne',
                data: [65, 59, 80, 81, 56, 55],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
            },
        ]
    };

    return (
        <>
            <p>grafica</p>
            <BarChart data={data} />
        </>
    )
}