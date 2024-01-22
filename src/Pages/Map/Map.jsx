// src/pages/Map/Map.js
import React, { useState, useEffect } from 'react';
import Modal from '../../Components/Modal/Modal';
import Data from "../../Data/Bathroom.json";
import './styles.css'; // Asegúrate de tener los estilos para esta página

function Map() {
  const [baños, setBaños] = useState([]);

  useEffect(() => {
    // Cargar datos al montar el componente
    setBaños(Data.baños);
  }, []);

  // Función para filtrar baños por ubicación y sector
  const filterBaños = (ubicacion, sector) => {
    return baños.filter(baño => baño.Ubicacion === ubicacion && baño.Sector === sector);
  };

  return (
    <div>
      <h1>Mapa de Baños</h1>

      {/* Renderizar baños para cada ubicación y sector */}
      <div className="baños-container">
        <div className="baños-ubicacion">
          <h2>Cabotaje - Hall Público</h2>
          {filterBaños("Cabotaje", "Hall Publico").map(baño => (
            <Modal key={baño.Numero} Numero={baño.Numero} Tipo={baño.Tipo} />
          ))}
        </div>

        <div className="baños-ubicacion">
          <h2>Cabotaje - Embarque</h2>
          {filterBaños("Cabotaje", "Embarque").map(baño => (
            <Modal key={baño.Numero} Numero={baño.Numero} Tipo={baño.Tipo} />
          ))}
        </div>

        <div className="baños-ubicacion">
          <h2>Cabotaje - Arribo</h2>
          {filterBaños("Cabotaje", "Arribo").map(baño => (
            <Modal key={baño.Numero} Numero={baño.Numero} Tipo={baño.Tipo} />
          ))}
        </div>

        <div className="baños-ubicacion">
          <h2>Internacional - Arribo</h2>
          {filterBaños("Internacional", "Arribo").map(baño => (
            <Modal key={baño.Numero} Numero={baño.Numero} Tipo={baño.Tipo} />
          ))}
        </div>
        <div className="baños-ubicacion">
          <h2>Internacional - Embarque</h2>
          {filterBaños("Internacional", "Embarque").map(baño => (
            <Modal key={baño.Numero} Numero={baño.Numero} Tipo={baño.Tipo} />
          ))}
        </div>

        <div className="baños-ubicacion">
          <h2>Internacional - Hall Publico</h2>
          {filterBaños("Internacional", "Hall Publico").map(baño => (
            <Modal key={baño.Numero} Numero={baño.Numero} Tipo={baño.Tipo} />
          ))}
        </div>

        <div className="baños-ubicacion">
          <h2>Planta Alta - Hall Publico</h2>
          {filterBaños("P.Alta", "Hall Publico").map(baño => (
            <Modal key={baño.Numero} Numero={baño.Numero} Tipo={baño.Tipo} />
          ))}
        </div>

        <div className="baños-ubicacion">
          <h2>Overside- Control Psa</h2>
          {filterBaños("Psa", "Overside").map(baño => (
            <Modal key={baño.Numero} Numero={baño.Numero} Tipo={baño.Tipo} />
          ))}
        </div>

        <div className="baños-ubicacion">
          <h2>Overside- Compañia Aereas</h2>
          {filterBaños("Aerolineas", "Overside").map(baño => (
            <Modal key={baño.Numero} Numero={baño.Numero} Tipo={baño.Tipo} />
          ))}
        </div>

        

        


      </div>
    </div>
  );
}

export default Map;
