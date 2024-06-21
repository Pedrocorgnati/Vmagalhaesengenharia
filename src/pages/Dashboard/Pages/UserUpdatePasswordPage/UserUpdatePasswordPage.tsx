//'''
// src/pages/Dashboard/Pages/UserUpdatePasswordPage/UserUpdatePasswordPage.tsx

import { useState } from 'react';
import { authService } from '../../../../services/AuthService';
import { useRecoilValue } from 'recoil';
import { gUserState } from '../../../../models/user.model';
import { UserUpdatePasswordPageProps } from 'types/types';

export const UserUpdatePasswordPage: React.FC<UserUpdatePasswordPageProps> = () => {
  const userState = useRecoilValue(gUserState);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await authService.changePassword(userState.email, oldPassword, newPassword);
    setMessage(response.message);
  };

  return (
    <div className="update-password-page">
      <h2>Atualizar Senha</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Senha Antiga:</label>
          <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} required />
        </div>
        <div>
          <label>Nova Senha:</label>
          <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
        </div>
        <button type="submit">Atualizar Senha</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UserUpdatePasswordPage;
//’’’
