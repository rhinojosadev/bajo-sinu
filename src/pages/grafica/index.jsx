import React, { useEffect, useState } from 'react';

import { BarChart } from '../../components/grafica/BarChart';

export const Grafica = () => {
    const urls = {
        // bovinosCordoba: 'https://pruebas.correa.redhumus.org/agua2/api/bovinos/cordoba',
        bovinosCordoba: 'http://localhost:8000/agua2/api/bovinos/cordoba',
    }

    const [dataBovinosCordoba, setDataBovinosCordoba] = useState({
        labels: [],
        datasets: [],
        title: '',
        yTitle: '',
        xTitle: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(urls.bovinosCordoba);
                const result = await response.json();

                setDataBovinosCordoba({
                    labels: result.labels,
                    datasets: result.datasets,
                    title: result.title,
                    yTitle: result.y_title,
                    xTitle: result.x_title
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [urls.bovinosCordoba]);

    return (
        <>
            <p>Graficas</p>
            <>
                <h1> {dataBovinosCordoba.title} </h1>
                <div className='h-96'>
                    <BarChart
                        datasets={dataBovinosCordoba.datasets}
                        labels={dataBovinosCordoba.labels}
                        yTitle={dataBovinosCordoba.yTitle}
                        xTitle={dataBovinosCordoba.xTitle}
                    />
                </div>
            </>
        </>
    )
}
