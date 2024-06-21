//'''
//src/pages/Dashboard/Pages/ClientsAdmPage/UserListPage.tsx
import DashboardAside from "pages/Dashboard/components/DashboardAside/DashboardAside";
import ClientsRenderList from "../../components/UserManagement/UserList";
import { HeaderAdmin } from "components";

export const UserListPage: React.FC = () => {
  return (
    <>
      <HeaderAdmin />
      <DashboardAside role="admin" userLogout={() => {}} />
      <section className='section-admin'>
        <div>
          <h1>Lista de Usuários</h1>
          <ClientsRenderList filters={{}} />
        </div>
      </section>
    </>
  );
};
//'''
