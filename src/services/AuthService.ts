// src/services/AuthService.ts
//'''
import { AuthServiceResponse } from '../types';
import axios from 'axios';

class AuthService {
  async signUp(email: string, password: string, role: string, name: string, city: string): Promise<AuthServiceResponse> {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', { email, password, role, name, city });
      return { success: true, message: 'Sign up successful' };
    } catch (error: any) {
      return { success: false, message: error.response?.data?.message || 'Error signing up' };
    }
  }

  async login(email: string, password: string): Promise<AuthServiceResponse> {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      return { success: true, message: 'Login successful' };
    } catch (error: any) {
      return { success: false, message: error.response?.data?.message || 'Error logging in' };
    }
  }

  async changePassword(email: string, oldPassword: string, newPassword: string) {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/change-password', {
        email,
        oldPassword,
        newPassword
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      return { success: true, data: response.data };
    } catch (error: any) {
      return { success: false, message: error.response?.data?.message || 'Error changing password' };
    }
  }

  async resetPassword(email: string, newPassword: string) {
    try {
      const response = await axios.post('http://localhost:5000/api/admin/reset-password', {
        email,
        newPassword
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      return { success: true, data: response.data };
    } catch (error: any) {
      return { success: false, message: error.response?.data?.message || 'Error resetting password' };
    }
  }

  logout() {
    localStorage.removeItem('token');
  }
}

export const authService = new AuthService();

//'''