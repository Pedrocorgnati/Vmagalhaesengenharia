import { HeaderDashboard } from "../../components/Header/Header"
import React from 'react';
import { ReportList } from "../../components/ReportList/ReportList";

export const DashboardPage = ({ user, userLogout }) => {
  return (
    <>
      <HeaderDashboard user={user} userLogout={userLogout} />
      <div className="div-dashboard">
        <h1 className="h1-dashboard">Olá, Sr. {user.name}</h1>
      </div>
      <div className="div-development">

        <h1 className="h1-dashboard">Abaixo, os relatórios disponíveis referentes às suas obras </h1>
      </div>
      <div className="div-development">
        <ReportList />
      </div>
    </>
  )
}

