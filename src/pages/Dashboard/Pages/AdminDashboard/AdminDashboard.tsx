//'''
//src/pages/Admin/Pages/AdminDashboard/AdminDashboard.tsx
import DashboardAside from 'pages/Dashboard/components/DashboardAside/DashboardAside';
import { AdminDashboardProps } from 'types/types';

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ userLogout }) => {
  return (
    <>
      <DashboardAside role="admin" userLogout={userLogout} />
      <div className='main-admin'>
        <h1>Bom dia!</h1>
      </div>
    </>
  );
};

export default AdminDashboard;
//'''