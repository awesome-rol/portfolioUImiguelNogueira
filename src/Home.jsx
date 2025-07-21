import React from 'react';
import './Home.css'
import fotoMiguel from './assets/imagens/ombro2.png'
import fotoMiguelMobile from './assets/imagens/homeMobile.png'

const Home = () => {
  return (
    <div className='homeContainer'>
        <div className='homeContent'>
      <h1 className='titulos'>
        <p className="titulo1">Muito prazer!</p>
        <p className="titulo2">ME CHAMO MIGUEL E SOU</p>
        <p className='titulo3'>UI/UX DESIGNER</p>
      </h1>
      <div className="homeArt">
        <div><img className='fotoMiguel' src={fotoMiguel} alt="Foto Miguel Nogueira" /></div>
        <div><img className='fotoMiguelMobile' src={fotoMiguelMobile} alt="Foto Miguel Nogueira" /></div>
        <div className="homeArt-barraVertical"></div>
        <div className="homeArt-barraHorizontalFrente"></div>
        <div className="homeArt-barraHorizontalFundo"></div>
      </div>
      
    </div>
    
    </div>
    
  );
};

export default Home;