//'''
//'''
import axios from 'axios';
import { WhatWeDoCard } from 'types/types';

class WhatWeDoCards {
  async getCardsList(): Promise<WhatWeDoCard[]> {
    const response = await axios.get('/api/whatwedo');
    return response.data;
  }

  async addCard(card: WhatWeDoCard): Promise<{ success: boolean; data?: WhatWeDoCard }> {
    try {
      const response = await axios.post('/api/whatwedo', card, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Erro ao adicionar card:', error);
      return { success: false };
    }
  }

  async deleteCard(id: string): Promise<{ success: boolean }> {
    try {
      await axios.delete(`/api/whatwedo/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      return { success: true };
    } catch (error) {
      console.error('Erro ao deletar card:', error);
      return { success: false };
    }
  }
}

export const whatWeDoCards = new WhatWeDoCards();
//'''
