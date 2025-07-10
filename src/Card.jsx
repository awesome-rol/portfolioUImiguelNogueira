import React from 'react';
import './Card.css';

const Card = ({titulo, imagem, link, texto, alternativo, larguraDetalhe, alturaDetalhe, larguraDetalheMobile, alturaDetalheMobile}) => {
  return (
    <div className="cardPageContainer">
      <div className='cardContainer'>
              <h3 className='card-titulo'>{titulo}</h3>
              <div className='card-detalheContainer'>
                <div className="card-detalhe" style={{width: larguraDetalhe, height: alturaDetalhe}}>
                  <div className='card-detalhe-amarelo' style={{width: `calc(${larguraDetalhe} - 14px)`, height: `calc(${alturaDetalhe} - 14px)`}}></div>
                  <div className='card-detalhe-borda'  style={{width: `calc(${larguraDetalhe} - 14px)`, height: `calc(${alturaDetalhe} - 14px)`}}></div>
                </div>
                
              </div>
              <a className='card-link' href={link} target="_blank">
                <div className="card-imagemContainer"><img className="card-imagemContainer-img" src={imagem} alt={alternativo} /></div>
                <div className="card-imagemSombra"></div>
              </a>
              
              <p className="card-texto">{texto}</p>
          </div>

          <div className='MOBILE-cardContainer'>
              <h3 className='MOBILE-card-titulo'>{titulo}</h3>
              <div className='MOBILE-card-detalheContainer'>
                <div className="MOBILE-card-detalhe" style={{width: larguraDetalhe, height: alturaDetalhe}}>
                  <div className='MOBILE-card-detalhe-amarelo' style={{width: `calc(${larguraDetalheMobile} - 14px)`, height: `calc(${alturaDetalheMobile} - 14px)`}}></div>
                  <div className='MOBILE-card-detalhe-borda'  style={{width: `calc(${larguraDetalheMobile} - 14px)`, height: `calc(${alturaDetalheMobile} - 14px)`}}></div>
                </div>
                
              </div>
              <a className='MOBILE-card-link' href={link} target='_blank'>
                <div className="MOBILE-card-imagemContainer"><img className="MOBILE-card-imagemContainer-img" src={imagem} alt={alternativo} /></div>
                <div className="MOBILE-card-imagemSombra"></div>
              </a>
              
              <p className="MOBILE-card-texto">{texto}</p>
          </div>
    </div>
    
  );
};

export default Card;