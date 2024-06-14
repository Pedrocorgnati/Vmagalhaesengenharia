import { HeaderDashboard } from "../../components/Header/Header"
import React from 'react';
import { ClientDashboard } from "../../pages/Admin/components/ClientDashboard/ClientDashboard";

const DashboardPage = () => {
  return (
    <>
      <HeaderDashboard />
      <ClientDashboard />
    </>
  )
}
export default DashboardPage;
