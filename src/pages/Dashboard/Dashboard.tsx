//'''
//src/pages/Dashboard/Dashboard.tsx
import { useRecoilValue } from 'recoil';
import { gUserState } from '../../models/user.model';
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard';
import ClientDashboard from './Pages/ClientDashboard/ClientDashboard';
import { DashboardProps } from 'types/types';

const Dashboard: React.FC<DashboardProps> = ({ userLogout }) => {
  const userState = useRecoilValue(gUserState);

  if (userState.role === 'admin') {
    return <AdminDashboard userLogout={userLogout} />;
  } else {
    return <ClientDashboard userLogout={userLogout} />;
  }
};

export default Dashboard;

//'''
