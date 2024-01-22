// src/pages/Arribos.js
import React, { useState, useEffect } from 'react';
import ButtonBathroom from '../../Components/ButtonBathroom/index';
import Data from "../../Data/Bathroom.json"
import './styles.css'; // Asegúrate de tener los estilos para esta página

function Arribos() {
  const [baños, setBaños] = useState([]);

  

  useEffect(() => {
    // Utiliza directamente el archivo importado
    setBaños(Data.baños);
  }, []);

  // Filtrar los baños por el sector "Arribo"
  const bañosArribo = baños.filter(baño => baño.Sector === "Arribo");

  // Organizar los baños por ubicación
  const bañosCabotaje = bañosArribo.filter(baño => baño.Ubicacion === "Cabotaje");
  const bañosInternacional = bañosArribo.filter(baño => baño.Ubicacion === "Internacional");


  return (
    <div>
      <h1>Baños - Sector Arribo</h1>

      <div className="baños-container">
        <div className="baños-ubicacion">
          <h2>Cabotaje</h2>
          {bañosCabotaje.map(baño => (
            <ButtonBathroom key={baño.Numero} Numero={baño.Numero} Tipo={baño.Tipo} />
          ))}
        </div>

        <div className="baños-ubicacion">
          <h2>Internacional</h2>
          {bañosInternacional.map(baño => (
            <ButtonBathroom key={baño.Numero} Numero={baño.Numero}  Tipo={baño.Tipo}
            />
            
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default Arribos;
