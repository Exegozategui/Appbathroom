// src/components/Baño/Baño.js
import React, { useState } from 'react';
import './styles.css';

function Bathroom({ numeroBaño }) {
  const [estado, setEstado] = useState('limpio');
  const [seleccion, setSeleccion] = useState('limpieza');
  const [observaciones, setObservaciones] = useState('');

  const handleEstadoClick = () => {
    // Cambiar el estado de limpio a sucio y viceversa
    setEstado((prevEstado) => (prevEstado === 'limpio' ? 'sucio' : 'limpio'));
  };

  const handleGuardarCambiosClick = () => {
    // Lógica para guardar cambios (a implementar más adelante)
    console.log('Guardando cambios...');
  };

  return (
    <div className={`baño ${estado}`}>
      <div className="baño-status">
        {estado === 'limpio' ? (
          <span className="status-limpio">Limpio</span>
        ) : (
          <span className="status-sucio">Sucio</span>
        )}
      </div>
      <div className="baño-header">
        <h1>Baño {numeroBaño}</h1>
      </div>
      <div className="baño-body">
        <label>
          Estado:
          <select
            value={seleccion}
            onChange={(e) => setSeleccion(e.target.value)}
          >
            <option value="limpieza">Limpieza</option>
            <option value="repaso">Repaso</option>
            <option value="chequeo">Chequeo</option>
          </select>
        </label>
        <label>
          Observaciones:
          <input
            type="text"
            value={observaciones}
            onChange={(e) => setObservaciones(e.target.value)}
          />
        </label>
      </div>
      <div className="baño-footer">
        <button onClick={handleEstadoClick}>Cambiar Estado</button>

        <button onClick={handleGuardarCambiosClick}>
          Guardar Cambios y Salir
        </button>
      </div>
    </div>
  );
}

export default Bathroom;
