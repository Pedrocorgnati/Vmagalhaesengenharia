import { HeaderDashboard } from "../../components/Header/Header"
import React from 'react';
import { ReportList } from "../../components/ReportList/ReportList";
import { ClientTest } from "../../pages/Admin/components/ClientTest/ClientTest";

export const DashboardPage = () => {
  return (
    <>
      <HeaderDashboard />
      <ClientTest />
    </>
  )
}

