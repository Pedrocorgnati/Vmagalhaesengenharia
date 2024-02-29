import { Link } from "react-router-dom";
import "./AsideAdmin.scss";

export const AsideAdmin = () => {
    return (
        <>
            <aside className="aside__admin">
                <Link className="button__aside-admin" to="/clientes">Clientes</Link>
                <Link className="button__aside-admin" to="/relatorios">Relatórios</Link>
                <Link className="button__aside-admin" to="/configuracoes">Alterar senha</Link>
            </aside>
        </>
    )
};
