import React from 'react';
import './Sobre.css';
import Titulo from './titulo.jsx'


const Sobre = () => {
  return (
    <div className="sobreContainer">
        <div className="sobre-tituloContainer">
      <div className='sobre-tituloContainer-quadradoAmarelo'>

      </div>
      <div className="sobre-tituloContainer-quadradoBorda">

      </div>
      <h2 className="sobre-tituloContainer-titulo">Sobre mim</h2>
    </div>
        <div className='sobreTextos'>
          <p className='sobreTxt1'>
        Minha trajetória começou na programação, onde desenvolvi uma base sólida em lógica e estrutura. Mas foi no design que encontrei minha verdadeira vocação: transformar ideias em experiências visuais que fazem sentido e causam impacto.
        </p>
        <p className='sobreTxt2'>
        Migrar para essa área foi um passo natural. Hoje, me realizo criando soluções que unem função, estética e intenção.
        </p>
        </div>
        
    </div>
  );
};

export default Sobre;