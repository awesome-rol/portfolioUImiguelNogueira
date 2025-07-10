import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import Home from './Home.jsx'
import DivisorHome from './DivisorHome.jsx'
import Sobre from './Sobre.jsx'
import DivisorPadrao from './DivisorPadrao.jsx'
import Projetos from './Projetos.jsx'
import Skills from './Skills.jsx'
import Rodape from './Rodape.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='page'>
      <Header />
      <Home />
      <DivisorHome />
      <Skills />
      <DivisorPadrao />
      <Sobre />
      <DivisorPadrao />
      <Projetos />
      <DivisorPadrao />
      <Rodape />
    </div>
    
  </StrictMode>,
)
