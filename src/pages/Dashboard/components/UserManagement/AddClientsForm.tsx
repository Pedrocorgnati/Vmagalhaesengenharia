//'''
// src/pages/Dashboard/components/UserManagement/AddClientsForm.tsx
import { useState } from 'react';
import { authService } from '../../../../services/AuthService';
import { AddClient, AddClientsFormProps } from 'types/types';

export const AddClientsForm: React.FC<AddClientsFormProps> = ({ onClientAdded }) => {
  const [client, setClient] = useState<AddClient>({ client: '', name: '', city: '', initialPassword: '', role: 'client' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data:', client);

    const newErrors: { [key: string]: string } = {};
    Object.keys(client).forEach(key => {
      if (!client[key as keyof AddClient]) {
        newErrors[key] = 'Campo obrigatório';
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    } else {
      setErrors({});
    }

    const { client: email, initialPassword, role, name, city } = client;
    try {
      const signUpResult = await authService.signUp(email, initialPassword, role, name, city);
      console.log('SignUp result:', signUpResult);

      if (signUpResult.success) {
        setClient({ client: '', name: '', city: '', initialPassword: '', role: 'client' });
        setSnackbarVisible(true);
        onClientAdded();
        setTimeout(() => setSnackbarVisible(false), 3000);
      } else {
        alert('Error creating user account: ' + signUpResult.message);
      }
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Error creating user');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  return (
    <form className='reports-form' onSubmit={handleSubmit}>
      {snackbarVisible && <div className="snackbar">Usuário criado com sucesso!</div>}
      <div className='div-labelInput'>
        <label>Email do cliente:</label>
        <input
          type="email"
          name="client"
          value={client.client}
          onChange={handleChange}
          className={errors.client ? 'input-error' : ''}
          required
        />
        {errors.client && <span className="error-message">{errors.client}</span>}
      </div>
      <div className='div-labelInput'>
        <label>Nome do cliente:</label>
        <input
          type="text"
          name="name"
          value={client.name}
          onChange={handleChange}
          className={errors.name ? 'input-error' : ''}
          required
        />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>
      <div className='div-labelInput'>
        <label>Cidade do cliente:</label>
        <input
          type="text"
          name="city"
          value={client.city}
          onChange={handleChange}
          className={errors.city ? 'input-error' : ''}
          required
        />
        {errors.city && <span className="error-message">{errors.city}</span>}
      </div>
      <div className='div-labelInput'>
        <label>Senha Inicial do Cliente:</label>
        <input
          type="password"
          name="initialPassword"
          value={client.initialPassword}
          onChange={handleChange}
          className={errors.initialPassword ? 'input-error' : ''}
          required
        />
        {errors.initialPassword && <span className="error-message">{errors.initialPassword}</span>}
      </div>
      <div className='div-labelInput'>
        <label>Tipo de usuário:</label>
        <div>
          <label>
            <input
              type="radio"
              name="role"
              value="client"
              checked={client.role === 'client'}
              onChange={handleChange}
              className={errors.role ? 'input-error' : ''}
            />
            Cliente
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="admin"
              checked={client.role === 'admin'}
              onChange={handleChange}
              className={errors.role ? 'input-error' : ''}
            />
            Admin
          </label>
        </div>
        {errors.role && <span className="error-message">{errors.role}</span>}
      </div>
      <button type="submit">Adicionar Cliente</button>
    </form>
  );
};
//'''
