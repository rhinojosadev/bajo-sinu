import React, { useEffect, useState } from 'react';

import { BarChart } from '../../components/grafica/BarChart';

export const Grafica = () => {
    const urls = {
        bovinosCordoba: 'https://pruebas.correa.redhumus.org/agua2/api/bovinos/cordoba',
    }

    const [dataBovinosCordoba, setDataBovinosCordoba] = useState({
        labels: [],
        datasets: []
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(urls.bovinosCordoba);
                const { labels, datasets } = await response.json();
                setDataBovinosCordoba({ labels, datasets });
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
                <h1> Bovinos Cordoba </h1>
                <div className='h-96'>
                    <BarChart data={dataBovinosCordoba} />
                </div>
            </>
            <>
                <h1> Bovinos Cordoba 2</h1>
                <div className='h-96'>
                    <BarChart data={dataBovinosCordoba} />
                </div>
            </>
        </>
    )
}
