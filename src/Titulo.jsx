import React from 'react';
import './Titulo.css';

const Titulo = ({titulo, largura}) => {
  return (
    <div className="tituloContainer" style={{width: largura}}>
      <div className='quadradoAmarelo'>

      </div>
      <div className="quadradoBorda">

      </div>
      <h2 className="titulo">{titulo}</h2>
    </div>
  );
};

export default Titulo;