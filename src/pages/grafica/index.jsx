import React, { useEffect, useState } from 'react';

import { BarChart } from '../../components/grafica/BarChart';
import { Timeline } from '../../components/grafica/Timeline';

export const Grafica = () => {
    const urls = {
        bovinosCordoba: 'https://pruebas.correa.redhumus.org/agua2/api/bovinos/cordoba',
        timeline: 'https://pruebas.correa.redhumus.org/agua2/api/timelines',
        // bovinosCordoba: 'http://localhost:8000/agua2/api/bovinos/cordoba',
        // timeline: 'http://localhost:8000/agua2/api/timelines',
    }

    const [dataBovinosCordoba, setDataBovinosCordoba] = useState({
        labels: [],
        datasets: [],
        title: '',
        yTitle: '',
        xTitle: ''
    });

    const [dataTimeline, setDataTimeline] = useState({
        data: [],
        startDate: '',
        title: ''
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
                console.error('[setDataBovinosCordoba] Error fetching data:', error);
            }

            try {
                const response = await fetch(urls.timeline);
                const result = await response.json();

                const data = result.data.map(cat => {
                    return {
                        name: cat.name,
                        startDate: cat.startDate,
                        endDate: cat.endDate,
                        label: cat.label,
                        color: cat.color
                    }
                })
                setDataTimeline({ data, startDate: result.start_date });
            } catch (error) {
                console.error('[setDataTimeline] Error fetching data:', error);
            }
        };

        fetchData();
    }, [urls.bovinosCordoba, urls.timeline]);

    return (
        <>
            <p>Graficas</p>
            <>
                <h1> {dataBovinosCordoba.title} </h1>
                <div className=''>
                    <BarChart
                        datasets={dataBovinosCordoba.datasets}
                        labels={dataBovinosCordoba.labels}
                        yTitle={dataBovinosCordoba.yTitle}
                        xTitle={dataBovinosCordoba.xTitle}
                    />
                </div>
            </>
            <>
                <h1> {dataTimeline.title} </h1>
                <div className=''>
                    {dataTimeline.startDate && <Timeline
                        data={dataTimeline.data}
                        startDate={dataTimeline.startDate}
                    />}
                </div>
            </>
        </>
    )
}
