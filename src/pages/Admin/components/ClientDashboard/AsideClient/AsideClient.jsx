import React from 'react';
import { Link } from "react-router-dom";
import "./AsideClient.scss";
import { ButtonLogout } from '../../../../../components/Buttons/Buttons';

export const AsideClient = ({ userLogout }) => {
    return (
      <>
        <aside className="aside__client">
          <Link className="button__aside-client" to="/alterar-senha">Alterar senha</Link>
          <ButtonLogout userLogout={userLogout} />
        </aside>
      </>
    )
  };  