import React from 'react';
import './Rodape.css';
import SkillButton from './SkillButton';
import logoRodape from './assets/imagens/logo.png';
import linkedinImg from './assets/imagens/brancos/branco.png';
import whats from './assets/imagens/brancos/whats.png';
import insta from './assets/imagens/brancos/insta.png';

const Rodape = ({instagram, linkedin, whatsapp, alternativoLogo}) => {
  return (
    <div className="rodapeContainer">
      <div className="rodapeLogo">
        <img className="rodapeLogo-img" src={logoRodape} alt={alternativoLogo} />
      </div>
      <div className="rodapeBotoes">
        <SkillButton icone={linkedinImg} style={{width: "80px"}}/>
        <SkillButton icone={whats} />
        <SkillButton icone={insta} />
      </div>
    </div>
  );
};

export default Rodape;