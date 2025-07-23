import React from 'react';
import './Rodape.css';
import SkillButton from './SkillButton';
import logoRodape from './assets/imagens/logo.png';
import linkedinImg from './assets/imagens/brancos/branco.png';
import whats from './assets/imagens/brancos/whats.png';
import github from './assets/imagens/brancos/github.png';
import behance from './assets/imagens/brancos/behance.png';

const Rodape = ({instagram, linkedin, whatsapp, alternativoLogo}) => {
  return (
    <div className="rodapeContainer">
      <div className="rodapeLogo">
        <img className="rodapeLogo-img" src={logoRodape} alt={alternativoLogo} />
      </div>
      <div className="rodapeBotoes">
        <SkillButton link="https://www.linkedin.com/in/miguel-nogueira-a7b9a922a/" icone={linkedinImg} style={{width: "80px"}}/>
        <SkillButton link="https://wa.me/5582988136875?text=Ol%C3%A1%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20falar%20com%20voc%C3%AA." icone={whats} />
        <SkillButton link="https://github.com/awesome-rol" icone={github} />
        <SkillButton link="https://www.behance.net/miguelnogueira14" icone={behance} />
      </div>
    </div>
  );
};

export default Rodape;