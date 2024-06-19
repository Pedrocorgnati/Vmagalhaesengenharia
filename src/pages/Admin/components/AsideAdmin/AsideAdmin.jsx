import { Link } from "react-router-dom";
import { ButtonLogout } from "../../../../components/Buttons/Buttons";
import "./AsideAdmin.scss";

export const AsideAdmin = ({ userLogout }) => {
  return (
    <>
      <aside className="aside__admin">
        <Link className="button__aside-admin" to="/cadastrar-usuario">Cadastro de Usuário</Link>
        <Link className="button__aside-admin" to="/usuarios">Listar usuários</Link>
        <Link className="button__aside-admin" to="/cadastrar-relatorios">Cadastrar Relatórios</Link>
        <Link className="button__aside-admin" to="/listar-relatorios">Listar Relatórios</Link>
        <Link className="button__aside-admin" to="/configuracoes">Alterar senha</Link>
        <ButtonLogout userLogout={userLogout} />
      </aside>
    </>
  )
};
