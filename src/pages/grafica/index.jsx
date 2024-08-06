import React, { useEffect, useState } from 'react';

import { MultiSelect } from '../../components/common/MultiSelect';
import { SingleSelect } from '../../components/common/SingleSelect';
import { BarChart } from '../../components/grafica/BarChart';
import BarChartAgricola from '../../components/grafica/BarChartAgricola';
import { Timeline } from '../../components/grafica/Timeline';

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
        ],
        products: [
            'Maiz-blanco-tradicional',
            'Pepino-cohombro',
            'Palma-aceite',
            'Caucho',
            'Hortalizas-varias',
            'Limon',
            'Soya',
            'Maracuya',
            'Plantas-aromaticas',
            'Frutales-varios',
            'Cilantro',
            'Platano',
            'Ñame',
            'Patilla',
            'Piña',
            'Arroz-secano-manual',
            'Maiz-tecnificado',
            'Coco',
            'Tomate',
            'Berenjena',
            'Mango',
            'Maiz-tradicional',
            'Algodon',
            'Sorgo',
            'Arroz-secano-mecanizado',
            'Batata',
            'Yuca-industrial',
            'Frijol',
            'Naranja',
            'Yuca',
            'Arroz-riego',
            'Maiz-blanco-tecnificado'
        ],
        municipalities: [
            'Chima',
            'Lorica',
            'Momil',
            'Cotorra',
            'Purisima'
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
        variable: options.variables[0],
        products: options.products[0],
        municipalities: options.municipalities[0],
    });

    const handleChangeVariableSelect = (value) => {
        setDataAgricolaParams({
            ...dataAgricolaParams,
            variable: value
        });
    };

    const handleChangeProductSelect = (values) => {
        console.log("🚀 ~ handleChangeProductSelect ~ values1:", values)
        values = values.toString()
        console.log("🚀 ~ handleChangeProductSelect ~ values2:", values)

        setDataAgricolaParams({
            ...dataAgricolaParams,
            products: values
        });
    };

    const handleChangeMunicipalitiesSelect = (value) => {
        setDataAgricolaParams({
            ...dataAgricolaParams,
            municipalities: value
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
                    variable: dataAgricolaParams.variable,
                    products: dataAgricolaParams.products,
                    municipalities: dataAgricolaParams.municipalities
                };

                const url = new URL(urls.agricola);
                url.search = new URLSearchParams(params).toString();
                const response = await fetch(url);
                const result = await response.json();

                setDataAgricola({
                    data: result.data,
                    title: result.title
                });
            } catch (error) {
                console.error('[setDataAgricola] Error fetching data:', error);
            }
        };

        fetchData();
    }, [urls.agricola, dataAgricolaParams.variable, dataAgricolaParams.products, dataAgricolaParams.municipalities]);

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
                <h1> {dataAgricola.title} </h1>
                <SingleSelect
                    options={options.variables}
                    onChange={handleChangeVariableSelect}
                    title='Variable'
                />
                <MultiSelect
                    options={options.products}
                    onChange={handleChangeProductSelect}
                    title='Productos'
                />
                <MultiSelect
                    options={options.municipalities}
                    onChange={handleChangeMunicipalitiesSelect}
                    title='Municipios'
                />
                <div className=''>
                    <BarChartAgricola
                        data={dataAgricola.data}
                    />
                </div>
            </>
        </>
    )
}
