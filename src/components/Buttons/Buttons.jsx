import "./Buttons.scss";
import { Link } from "react-router-dom";
const ButtonLogin = () => {
    return (
        <button className="button-login">Entrar</button>
    );
}

const ButtonSignUp = () => {
    return (
        <Link className="button-sign-up" to="/register">Cadastre-se</Link>
    );
}
const ButtonSubmit = () => {
    return (
        <div className="button-submit">

            <Link className="button-submit" to="/" type="submit">Cadastre-se</Link>
        </div>
    );
}
const ButtonReturn = () => {
    return (
        <Link className="Link-return" to="/">Voltar</Link>
    );
}

const ButtonLogout = ({ userLogout }) => {
    return (
        <Link onClick={userLogout} className="button-logout" to="/">Sair</Link>
    );
}
const ButtonAdminDash = () => {
    return (
        <>
            <Link className="button-admin-dashboard" to="/admin-dashboard">Botão para teste: Acessar área do Administrador</Link>        </>
    )
}
export { ButtonAdminDash, ButtonLogin, ButtonLogout, ButtonReturn, ButtonSignUp, ButtonSubmit };
