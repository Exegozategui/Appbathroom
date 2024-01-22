// src/components/ButtonBathroom/ButtonBathroom.js
import React from 'react';
import './styles.css';

function ButtonBathroom({ Numero, Tipo,  onClick }) {
  return (
    <button className="button-bathroom" onClick={onClick}>
    Baño: {Tipo}  {Numero}
    </button>
  );
}

export default ButtonBathroom;
