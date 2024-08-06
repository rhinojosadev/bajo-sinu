import React, { useEffect, useState } from 'react';

import { BarChart } from '../../components/grafica/BarChart';
import { Timeline } from '../../components/grafica/Timeline';
import BarChartAgricola from '../../components/grafica/BarChartAgricola';
import { SingleSelect } from '../../components/common/SingleSelect';

// const dataAgricola = {
//     data: [
//         { municipality: "cotorra", product: "yuca", value: 708.0, year: 2007.0 },
//         { municipality: "momil", product: "yuca", value: 3950.0, year: 2007.0 },
//         { municipality: "cotorra", product: "mango", value: 80.0, year: 2007.0 },

//         { municipality: "momil", product: "mango", value: 201.5, year: 2021.0 }
//     ]
// };

export const Grafica = () => {
    const urls = {
        // bovinosCordoba: 'https://pruebas.correa.redhumus.org/agua2/api/bovinos/cordoba',
        // timeline: 'https://pruebas.correa.redhumus.org/agua2/api/timelines',
        // agricola: 'https://pruebas.correa.redhumus.org/agua2/api/agricola',
        bovinosCordoba: 'http://localhost:8000/agua2/api/bovinos/cordoba',
        timeline: 'http://localhost:8000/agua2/api/timelines',
        agricola: 'http://localhost:8000/agua2/api/agricola'
    }

    const options = {
        variables: [
            'Area Sembrada',
            'Area Cosechada',
            'Produccion (ton)',
            'Rendimiento (ha/ton)',
        ]
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

    const [dataAgricola, setDataAgricola] = useState({
        data: [],
        title: ''
    });

    const [dataAgricolaParams, setDataAgricolaParams] = useState({
        variable: '',
        products: '',
        municipalities: '',
    });

    const handleChangeVariableSelect = (value) => {
        setDataAgricolaParams({
            ...dataAgricolaParams,
            variable: value
        });
    };

    // bovinos cordoba
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

        };

        fetchData();
    }, [urls.bovinosCordoba]);

    // timeline
    useEffect(() => {
        const fetchData = async () => {
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
    }, [urls.timeline]);


    // agricola
    useEffect(() => {
        const fetchData = async () => {
            try {
                const params = {
                    variable: dataAgricolaParams.variable
                };

                const url = new URL(urls.agricola);
                url.search = new URLSearchParams(params).toString();
                const response = await fetch(url);
                console.log("🚀 ~ fetchData ~ url:", url)

                const result = await response.json();
                console.log("🚀 ~ fetchData ~ agricola:", result)

                // const data = result.data.map(cat => {
                //     return {
                //         name: cat.name,
                //         startDate: cat.startDate,
                //         endDate: cat.endDate,
                //         label: cat.label,
                //         color: cat.color
                //     }
                // })
                // setDataAgricola({ data, startDate: result.start_date });
            } catch (error) {
                console.error('[setDataAgricola] Error fetching data:', error);
            }
        };

        fetchData();
    }, [urls.agricola, dataAgricolaParams.variable]);

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
            <>
                <h1> Hellow </h1>
                <SingleSelect options={options.variables} onChange={handleChangeVariableSelect} />
                <div className=''>
                    <BarChartAgricola
                        data={dataAgricola.data}
                    />
                </div>
            </>
        </>
    )
}
