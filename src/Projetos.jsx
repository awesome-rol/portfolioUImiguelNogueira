import React from 'react';
import './Projetos.css'
import Card from './Card';
import mitech from './assets/imagens/prints/mitech.jpg'
import samhost from './assets/imagens/prints/samhost.jpg'
import profigma from './assets/imagens/prints/profigma.jpg'
import rubens from './assets/imagens/prints/rubens.jpg'
import mitechMobile from './assets/imagens/prints/mitechMobile.jpg'
import samhostMobile from './assets/imagens/prints/samhostMobile.jpg'
import profigmaMobile from './assets/imagens/prints/profigmaMobile.jpg'
import rubensMobile from './assets/imagens/prints/rubensMobile.jpg'

const Projetos = () => {
  return (
    <div className="meusProjetosContainer">
      <div className="meusProjetos-tituloContainer">
      <div className='meusProjetos-tituloContainer-quadradoAmarelo'></div>
      <div className="meusProjetos-tituloContainer-quadradoBorda"></div>
      <h2 className="meusProjetos-tituloContainer-titulo">Meus projetos</h2>
    </div>
      <div className='cardsContainer'>
      <Card link="https://www.figma.com/proto/zCx0EslerKu9YmEprcUnAq/Mitech?node-id=0-1&t=RSwHZRPGlBoI5J7D-1" larguraDetalhe="150px" titulo="Mitech" imagem={mitech} texto="Esse projeto foi uma oportunidade de aplicar, na prática, os conhecimentos que venho adquirindo no Figma. Desenvolvi do zero a interface e identidade visual de uma empresa fictícia, com o objetivo de simular um projeto real. A proposta foi explorar conceitos de usabilidade e design com uma abordagem minimalista."/>
      <div className='projetosDivisor'></div>
      <Card link="https://www.figma.com/proto/uye0BrmdflMUBEkXAL0tx9/samhostUI?node-id=12-46&t=0vtr9lMSaGFNmItT-1" larguraDetalhe="265px" titulo="Samhost" imagem={samhost} texto="Neste projeto autoral, decidi repensar um site já existente, redesenhando sua estrutura e organização. A proposta foi tornar a navegação mais clara, fluida e objetiva. Desenvolvi o layout com foco total na experiência do usuário, priorizando a simplicidade, eliminando excessos e evidenciando os elementos mais importantes da interface."/>
      <div className='projetosDivisor'></div>
      <Card link="https://www.figma.com/proto/FNYGJDQf0KGgfCCoCm1AEH/Curso-PROFIGMA-WEB---assests--Community---Community-?node-id=0-1&t=V9WzwQQKlQIZ2oia-1" alturaDetalhe="265px" titulo="XP Zone" imagem={profigma} texto="Esse foi um dos meus primeiros projetos durante o curso em que aprendi a usar o Figma. Foi onde tive meu primeiro contato com o processo completo de prototipagem, explorando bastante as ferramentas da plataforma. Me ajudou a entender melhor a lógica por trás da construção de interfaces e a importância de pensar na experiência do usuário desde o início."/>
      <div className='projetosDivisor'></div>
      <Card link="https://www.figma.com/proto/9iuwX0gvKB7aVSKtd1jTzi/Untitled?node-id=8-81&t=g6AznHowF8vMp17Y-1" larguraDetalhe="150px" titulo="SlideShow Rubens Vieira" imagem={rubens} texto="Neste projeto, desenvolvi um slideshow personalizado para um cliente real. A proposta foi explorar outros formatos além do design de sites, analisando referências de apresentações e identidades visuais voltadas à comunicação direta. Foi uma experiência importante para expandir meu olhar e aplicar o design de forma estratégica em diferentes contextos."/>
      </div>

      <div className='cardsContainerMobile'>
        <Card link="https://www.figma.com/proto/zCx0EslerKu9YmEprcUnAq/Mitech?node-id=0-1&t=RSwHZRPGlBoI5J7D-1" larguraDetalhe="50px" alturaDetalhe="50px" titulo="Mitech" imagem={mitechMobile} texto="Desenvolvi a identidade visual de uma empresa fictícia, aplicando meus conhecimentos em Figma com foco em design minimalista e usabilidade."/>
        <div className='projetosDivisor'></div>
        <Card link="https://www.figma.com/proto/uye0BrmdflMUBEkXAL0tx9/samhostUI?node-id=12-46&t=0vtr9lMSaGFNmItT-1" larguraDetalhe="80px" alturaDetalhe="50px" titulo="Samhost" imagem={samhostMobile} texto="Reestruturei um site existente para melhorar navegação, clareza e foco no usuário, otimizando layout, conteúdo e experiência geral."/>
        <div className='projetosDivisor'></div>
        <Card link="https://www.figma.com/proto/FNYGJDQf0KGgfCCoCm1AEH/Curso-PROFIGMA-WEB---assests--Community---Community-?node-id=0-1&t=V9WzwQQKlQIZ2oia-1" larguraDetalhe="50px" alturaDetalhe="50px" titulo="XP Zone" imagem={profigmaMobile} texto="Explorando o Figma, desenvolvi um projeto completo com prototipagem e entendi a importância da usabilidade nas interfaces digitais."/>
        <div className='projetosDivisor'></div>
        <Card link="https://www.figma.com/proto/9iuwX0gvKB7aVSKtd1jTzi/Untitled?node-id=8-81&t=g6AznHowF8vMp17Y-1" larguraDetalhe="80px" alturaDetalhe="50px" titulo="Rubens Vieira" imagem={rubensMobile} texto="Criei um slideshow como objeto visual, aplicando design estratégico para apresentar as informações com clareza, foco e organização."/>
      </div>
      
    </div>
  );
};

export default Projetos;