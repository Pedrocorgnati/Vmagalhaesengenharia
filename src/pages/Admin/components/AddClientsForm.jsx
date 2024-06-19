//src/pages/Admin/components/AddClientsForm.jsx
//'''
import React, { useState } from 'react';
import { authService } from '../../../services/AuthService';
import { clientsService } from '../../../services/ClientsService';
import "../../../components/Buttons/Buttons.scss";
import "../Admin.scss";

export const AddClientsForm = ({ onClientAdded }) => {
  const [client, setClient] = useState({ client: '', name: '', city: '', initialPassword: '', role: 'client' });
  const [errors, setErrors] = useState({});
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data:', client); // Log dos dados do formulário

    const newErrors = {};
    Object.keys(client).forEach(key => {
      if (!client[key]) {
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
      console.log('SignUp result:', signUpResult); // Log resultado do cadastro

      if (signUpResult.success) {
        setClient({ client: '', name: '', city: '', initialPassword: '', role: 'client' });
        setSnackbarVisible(true);
        onClientAdded();
        setTimeout(() => setSnackbarVisible(false), 3000); // Hide snackbar after 3 seconds
      } else {
        alert('Error creating user account: ' + signUpResult.data.message);
      }
    } catch (error) {
      console.error('Error creating user:', error); // Log erro ao criar usuário
      alert('Error creating user');
    }
  };

  const handleChange = (e) => {
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