import { Link } from "react-router-dom"
import "./Nav.scss";

Link
export const Nav = () => {
    return (
        <>
            <nav className="nav-Home">
                <div>
                    <Link className="nav-Home-Link" to="/">Home</Link>
                    <Link className="nav-Home-Link" to="/empresa">Empresa</Link>
                    <Link className="nav-Home-Link" to="/nossos-clientes">Clientes</Link>
                    <Link className="nav-Home-Link" to="/contato">Contato</Link>
                </div>
            </nav>
        </>
    )
}