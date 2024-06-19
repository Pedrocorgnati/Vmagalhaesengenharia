//src/pages/Admin/components/AddClientsForm.jsx
//'''
// src/pages/Admin/components/AddClientsForm.jsx
import React, { useState } from 'react';
import { authService } from '../../../services/AuthService';
import { clientsService } from '../../../services/ClientsService';
import "../../../components/Buttons/Buttons.scss";
import "../Admin.scss";

export const AddClientsForm = ({ onClientAdded }) => {
  const [client, setClient] = useState({ client: '', name: '', city: '', initialPassword: '', role: 'client' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data:', client); // Log dos dados do formulário
    if (Object.values(client).every(field => field)) {
      const { client: email, initialPassword, role, name, city } = client;
      const signUpResult = await authService.signUp(email, initialPassword, role, name, city);
      console.log('SignUp result:', signUpResult); // Log resultado do cadastro
      if (signUpResult.success) {
        await clientsService.addClient({ email, name, city, role });
        setClient({ client: '', name: '', city: '', initialPassword: '', role: 'client' });
        onClientAdded();
      } else {
        alert('Error creating user account');
      }
    } else {
      alert('Todos os campos são obrigatórios');
    }
  };

  const handleChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  return (
    <form className='reports-form' onSubmit={handleSubmit}>
      <div className='div-labelInput'>
        <label>Email do cliente:</label>
        <input
          type="email"
          name="client"
          value={client.client}
          onChange={handleChange}
          required
        />
      </div>
      <div className='div-labelInput'>
        <label>Nome do cliente:</label>
        <input
          type="text"
          name="name"
          value={client.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className='div-labelInput'>
        <label>Cidade do cliente:</label>
        <input
          type="text"
          name="city"
          value={client.city}
          onChange={handleChange}
          required
        />
      </div>
      <div className='div-labelInput'>
        <label>Senha Inicial do Cliente:</label>
        <input
          type="password"
          name="initialPassword"
          value={client.initialPassword}
          onChange={handleChange}
          required
        />
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
            />
            Admin
          </label>
        </div>
      </div>
      <button type="submit">Adicionar Cliente</button>
    </form>
  );
};

//'''