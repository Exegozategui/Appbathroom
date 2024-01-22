import React, { useState, useEffect } from 'react';
import ButtonBathroom from '../../Components/ButtonBathroom/index';
import Data from "../../Data/Bathroom.json"
import './styles.css'; // Asegúrate de tener los estilos para esta página

function HallPublico() {
  const [baños, setBaños] = useState([]);

  

  useEffect(() => {
    // Utiliza directamente el archivo importado
    setBaños(Data.baños);
  }, []);

  // Filtrar los baños por el sector "Arribo"
  const bañosHall = baños.filter(baño => baño.Sector === "Hall Publico");

  // Organizar los baños por ubicación
  const bañosPAlta = bañosHall.filter(baño => baño.Ubicacion === "P.Alta");
  const bañosCabotaje = bañosHall.filter(baño => baño.Ubicacion === "Cabotaje");
  const bañosInternacional = bañosHall.filter(baño => baño.Ubicacion === "Internacional");


  return (
    <div>
      <h1>Baños - Sector Hall Publico</h1>

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
           <div className="baños-ubicacion">
          <h2>Planta Alta</h2>
          {bañosPAlta.map(baño => (
            <ButtonBathroom key={baño.Numero} Numero={baño.Numero}  Tipo={baño.Tipo}
            />
            
          ))}
           </div>
      </div>
    </div>
  );
}

export default HallPublico;
