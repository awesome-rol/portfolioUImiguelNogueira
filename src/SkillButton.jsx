import React from 'react';
import './SkillButton.css'

const SkillButton = ({icone, alternativo, link}) => {
  return (
    <a className="skillButtonLink" href={link}>
        <div className='skillButtonContainer'>
            <div className="skillButton-icone"><img className="skillButton-iconeImagem" src={icone} alt={alternativo} /></div>
            <div className="skillButton-sombra"></div>
        </div>
    </a>    
  );
};

export default SkillButton;