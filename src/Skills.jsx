import React from 'react';
import SkillButton from './SkillButton';
import './Skills.css'
import figma from './assets/imagens/brancos/icons8-figma-96.png'
import photoshop from './assets/imagens/brancos/photoshop.png'
import illustrator from './assets/imagens/brancos/illustrator.png'
import adobeXD from './assets/imagens/brancos/adobeXD.png'
import html5 from './assets/imagens/brancos/html5.png'
import css3 from './assets/imagens/brancos/css3.png'
import javascript from './assets/imagens/brancos/javascript.png'
import react from './assets/imagens/brancos/react.png'


const Skills = () => {
  return (
    <div className='skillsContainer'>
      <SkillButton icone={figma}/>
      <SkillButton icone={photoshop}/>
      <SkillButton icone={illustrator}/>
      <SkillButton icone={adobeXD}/>
      <SkillButton icone={html5}/>
      <SkillButton icone={css3}/>
      <SkillButton icone={javascript}/>
      <SkillButton icone={react}/>
    </div>
  );
};

export default Skills;