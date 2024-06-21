//'''
//'''
import axios from 'axios';
import { Partner } from 'types/types';

class PartnersService {
  async getPartnersList(): Promise<Partner[]> {
    try {
      const response = await axios.get('http://localhost:5000/api/partners', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching partners list", error);
      return [];
    }
  }

  async addPartner(partner: Omit<Partner, 'id'>): Promise<{ success: boolean, data?: Partner }> {
    try {
      const response = await axios.post('http://localhost:5000/api/partners', partner, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return { success: true, data: response.data };
    } catch (error) {
      console.error("Error adding partner", error);
      return { success: false };
    }
  }

  async deletePartner(id: string): Promise<{ success: boolean }> {
    try {
      await axios.delete(`http://localhost:5000/api/partners/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return { success: true };
    } catch (error) {
      console.error("Error deleting partner", error);
      return { success: false };
    }
  }
}

export const partnersService = new PartnersService();
//'''
