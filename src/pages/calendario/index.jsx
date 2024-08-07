import { Header } from '../../components/header/header';

import Cal from '../../assets/images/calendario-sinu.png'

export const Calendario = () => {
    return(
        <>
            <Header/>
            <br/>

            <div class="flex flex-row">
                <div>
                    <img src={Cal}  usemap="#image-map" />
                    <map name="image-map">
                        <area target="_self" alt="Enero" title="Enero" onClick={() => alert("ENERO")} href="#enero" coords="751,460,665,588,406,367" shape="poly"/>
                    </map>
                </div>
                <div>
                    second
                </div>
            </div>

            <section className='mx-24'>
                <h1 className='text-6xl mt-5 pt-10 text-center primary-color heading'>Actividades</h1>
                <br/>
                <h2> Hombres </h2>
                <div className="relative overflow-x-auto m-10">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    LUNES
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    MARTES
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    MIERCOLES
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    JUEVES
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    VIERNES
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    SABADO
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    DOMINGO
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Trabajos <br/>
                                    - Agricultura <br/>
                                    - Pesca <br/>
                                    - Jornaleo (5-10am) <br/>
                                </td>
                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Pesca: 3am - 7am <br/>
                                - Malla: 2pm-6pm
                                </td>
                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                - Agricultura <br/>
                                - Pesca
                                </td>
                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                - Agricultura <br/>
                                - Pesca
                                </td>
                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                - Agricultura <br/>
                                - Pesca
                                </td>
                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Agricultura - Pesca > 12m
                                </td>
                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Libre - Iglesia <br/>
                                - Labores domésticas
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <br/>

                <h2> Mujeres </h2>
                <div className="relative overflow-x-auto m-10">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    LUNES
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    MARTES
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    MIERCOLES
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    JUEVES
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    VIERNES
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    SABADO
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    DOMINGO
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                -Labores de la casa <br />
                                - Trabajan
                                </td>
                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Labores
                                </td>
                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Labores
                                </td>
                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Labores
                                </td>
                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Labores
                                </td>
                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                </td>
                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <br />
                <h2>Niños</h2>
                <div className="relative overflow-x-auto m-10">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    LUNES
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    MARTES
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    MIERCOLES
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    JUEVES
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    VIERNES
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    SABADO
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    DOMINGO
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                5-5:30: Al colegio Llegar en bicicleta o a pie <br/> 
                                12: Salida colegio 1pm: Jornada tarde Hacer tareas   <br/>
                                y jugar videojuegos, jóvenes chatear
                                </td>
                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Ya no es común que NNA vendan dulces, frutas.  <br/>
                                Ahora el tiempo libre es para tareas, juegos, danzas,  <br/> 
                                ya no saben pilar el arroz	
                                </td>
                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                7-10pm: Colegio nocturno: Bachillerato por ciclos
                                </td>
                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                
                                </td>
                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                
                                </td>
                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                </td>
                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <br/>
                <h2>Niñas</h2>
                <div className="relative overflow-x-auto m-10">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    LUNES
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    MARTES
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    MIERCOLES
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    JUEVES
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    VIERNES
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    SABADO
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    DOMINGO
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                5-5:30: Al colegio Llegar en bicicleta o a pie  <br/>
                                12: Salida colegio 1pm: Jornada tarde Hacer tareas y jugar videojuegos, jóvenes chatear
                                </td>
                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Deportes: Fútlbol, béisbol, patinaje <br/>
                                Momil: Talleres de arte
                                </td>
                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                </td>
                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                </td>
                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                </td>
                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                </td>
                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

        </>
    )
}