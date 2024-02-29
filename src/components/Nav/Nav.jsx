import { Link } from "react-router-dom"
import "./Nav.scss";

export const Nav = () => {
    return (
        <>
            <nav className="nav-Home">
                <div>
                    <Link className="nav-Home-Link" to="/">Home</Link>
                    <Link className="nav-Home-Link" to="/missao-e-visao">Missão e Visão</Link>
                    <Link className="nav-Home-Link" to="/parceiros">Parceiros</Link>
                    <Link className="nav-Home-Link" to="/contato">Contato</Link>
                </div>
            </nav>
        </>
    )
}