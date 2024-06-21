//'''
//src/services/ClientsService.ts
import axios from 'axios';
import { Client } from 'types/types';

class ClientsService {
  async getClientsList(): Promise<Client[]> {
    try {
      const response = await axios.get('http://localhost:5000/api/clients', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return response.data;
    } catch (error) {
      return [];
    }
  }

  async findClientById(clientId: string): Promise<Client | null> {
    try {
      const response = await axios.get(`http://localhost:5000/api/clients/${clientId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return response.data;
    } catch (error) {
      return null;
    }
  }

  async addClient(client: Client): Promise<{ success: boolean; message: string }> {
    try {
      const response = await axios.post('http://localhost:5000/api/clients', client, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return { success: true, message: 'Client added successfully' };
    } catch (error: any) {
      return { success: false, message: error.response?.data?.message || 'Error adding client' };
    }
  }

  async updateClient(clientId: string, client: Partial<Client>): Promise<{ success: boolean; message: string }> {
    try {
      await axios.put(`http://localhost:5000/api/clients/${clientId}`, client, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return { success: true, message: 'Client updated successfully' };
    } catch (error: any) {
      return { success: false, message: error.response?.data?.message || 'Error updating client' };
    }
  }

  async deleteClient(clientId: string): Promise<{ success: boolean; message: string }> {
    try {
      await axios.delete(`http://localhost:5000/api/clients/${clientId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return { success: true, message: 'Client deleted successfully' };
    } catch (error: any) {
      return { success: false, message: error.response?.data?.message || 'Error deleting client' };
    }
  }
}

export const clientsService = new ClientsService();
//'''
