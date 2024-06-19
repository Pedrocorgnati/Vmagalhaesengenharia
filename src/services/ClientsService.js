
//src/services/ClientsService.js
//'''
import axios from 'axios';

class ClientsService {
  async getClientsList() {
    try {
      const response = await axios.get('http://localhost:5000/api/clients', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching clients list", error);
      return [];
    }
  }

  async findClientById(clientId) {
    try {
      const response = await axios.get(`http://localhost:5000/api/clients/${clientId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      return response.data;
    } catch (error) {
      console.error("Error finding client", error);
      return null;
    }
  }

  async addClient(newClient) {
    try {
      const response = await axios.post('http://localhost:5000/api/clients', newClient, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      return response.data;
    } catch (error) {
      console.error("Error adding client", error);
      throw error;
    }
  }

  async updateClient(clientId, updatedClient) {
    try {
      await axios.put(`http://localhost:5000/api/clients/${clientId}`, updatedClient, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
    } catch (error) {
      console.error("Error updating client", error);
    }
  }

  async deleteClient(clientId) {
    try {
      await axios.delete(`http://localhost:5000/api/clients/${clientId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
    } catch (error) {
      console.error("Error deleting client", error);
    }
  }
}

export const clientsService = new ClientsService();

//'''