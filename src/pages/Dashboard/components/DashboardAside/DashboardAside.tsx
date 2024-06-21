//'''
//src/pages/Dashboard/components/DashboardAside/DashboardAside.tsx
import { Link } from 'react-router-dom';
import { DashboardAsideProps } from 'types/types';

const DashboardAside: React.FC<DashboardAsideProps> = ({ role, userLogout }) => {
  return (
    <aside className='dashboard-aside'>
      <nav>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          {role === 'admin' && (
            <>
              <li><Link to="/dashboard/reports">Relatórios</Link></li>
              <li><Link to="/dashboard/add-report">Adicionar Relatório</Link></li>
              <li><Link to="/dashboard/clients">Clientes</Link></li>
            </>
          )}
        </ul>
      </nav>
      <button onClick={userLogout}>Logout</button>
    </aside>
  );
};

export default DashboardAside;
//'''
