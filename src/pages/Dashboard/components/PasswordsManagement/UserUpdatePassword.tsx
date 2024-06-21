//src/pages/Dashboard/components/PasswordsManagement/UserUpdatePassword.tsx
//'''
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { gUserState } from '../../../../models/user.model';
import { authService } from '../../../../services/AuthService';
import './UpdatePassword.scss';

const UserUpdatePassword: React.FC = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const userState = useRecoilValue(gUserState);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await authService.changePassword(userState.email, oldPassword, newPassword);
    if (result.success) {
      alert('Senha alterada com sucesso!');
    } else {
      alert('Erro ao alterar a senha.');
    }
  };

  return (
    <div className="update-password-container">
      <h2>Alterar Senha</h2>
      <form onSubmit={handleSubmit} className="update-password-form">
        <div className="input-group">
          <label htmlFor="oldPassword">Senha Antiga</label>
          <input
            type="password"
            id="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="newPassword">Senha Nova</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="update-password-button">Alterar Senha</button>
      </form>
    </div>
  );
};

export default UserUpdatePassword;

//'''