import React from 'react';
import { useNavigate } from "react-router-dom"

import  LogoAgua from '../../assets/images/logo-agua.png'

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="text-white p-4" style={ {backgroundColor: "rgb(76 178 235 / 66%)" } }>
      <div className="container mx-auto flex items-center">
        <img alt="" width={40} src={LogoAgua}  onClick={() => { navigate('/')}} />
        <nav>
          <ul className="flex space-x-4 ml-24">
            <li>
              <a  className="hover:underline"  
                   onClick={() => { navigate('calendario')}}>
                  CALENDARIO
              </a>
            </li>
            <li><a href="#about" className="hover:underline"  onClick={() => { navigate('grafica')}}>GRAFICAS</a></li>
            <li><a href="#about" className="hover:underline">ESTADISTICAS</a></li>
            <li><a href="#about" className="hover:underline">PRODUCCION</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
