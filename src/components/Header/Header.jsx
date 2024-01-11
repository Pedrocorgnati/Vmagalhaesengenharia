import { ButtonLogout, ButtonReturn } from '../Buttons/Buttons'
import './Header.scss'
import { Link } from 'react-router-dom'


const HeaderLogin = () => {


  return (
    <>
      <header className='header-login'>
        <div className="logo-and-name">
          <img src="src\Assets\Logo\Logo-png.png" className="logo" alt="Logo" />
          <h1 className="text-logo"><span>V</span>magalhães</h1>
        </div>
        <nav className="homePage-Nav">
          <Link className='Link-login' to="/login">Login</Link>
          <Link className='Link-login' to="Register">Registrar</Link>
        </nav>
      </header>
    </>
  )
}
const HeaderRegister = () => {


  return (
    <>
      <header className='header-register'>
        <h1 className="text-logo"><span>V</span>magalhães</h1>
        <ButtonReturn />
      </header>
    </>
  )
}
const HeaderDashboard = () => {


  return (
    <>
      <header className='header-dashboard'>
        <h1 className="text-logo"><span>V</span>magalhães</h1>
        <ButtonLogout />
      </header>
    </>
  )
}
export { HeaderDashboard, HeaderLogin, HeaderRegister }

