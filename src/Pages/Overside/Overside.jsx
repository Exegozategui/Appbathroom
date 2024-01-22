import React, { useState, useEffect } from 'react';
import ButtonBathroom from '../../Components/ButtonBathroom/index';
import Data from "../../Data/Bathroom.json"
import './styles.css'; // Asegúrate de tener los estilos para esta página

function Overside() {
  const [baños, setBaños] = useState([]);

  

  useEffect(() => {
    // Utiliza directamente el archivo importado
    setBaños(Data.baños);
  }, []);

  // Filtrar los baños por el sector "Arribo"
  const bañosOverside = baños.filter(baño => baño.Sector === "Overside");

  // Organizar los baños por ubicación
  const bañosPsa = bañosOverside.filter(baño => baño.Ubicacion === "Psa");
  const bañosAerolineas = bañosOverside.filter(baño => baño.Ubicacion === "Aerolineas");


  return (
    <div>
      <h1>Baños - Sector Overside</h1>

      <div className="baños-container">
        <div className="baños-ubicacion">
          <h2>Cabotaje</h2>
          {bañosPsa.map(baño => (
            <ButtonBathroom key={baño.Numero} Numero={baño.Numero} Tipo={baño.Tipo} />
          ))}
        </div>

        <div className="baños-ubicacion">
          <h2>Internacional</h2>
          {bañosAerolineas.map(baño => (
            <ButtonBathroom key={baño.Numero} Numero={baño.Numero}  Tipo={baño.Tipo}
            />
            
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default Arribos;
