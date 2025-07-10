import './Header.css'
import logo from './assets/imagens/logo.png'

function Header() {
  return (
    <>
      <div className="headerContainer">
        <img className="logoHeader" src={logo} alt="Logo Miguel Nogueira" />
      </div>
    </>
  )
}

export default Header