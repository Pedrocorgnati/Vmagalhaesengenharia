//'''
// src/routes/AuthRoutes.tsx
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';

const AuthRoutes = () => {
  const setUser = (user: any) => {
    console.log('User set:', user);
  };

  return (
    <Routes>
      <Route path="/login" element={<LoginPage setUser={setUser} />} />
    </Routes>
  );
};

export default AuthRoutes;
//'''