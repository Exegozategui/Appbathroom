import React from 'react'
import './styles.css';

function Modal({ Numero, Tipo, onClick }) {
  return (
    <div>
       <button className="modal-bathroom" onClick={onClick}>
    Baño: {Tipo}  {Numero}
    </button>
    </div>
  )
}

export default Modal
