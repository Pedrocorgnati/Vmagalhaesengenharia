//src/services/AuthService.js'''
import axios from 'axios';

class AuthService {
  async signUp(email, password, role, name, city) {
    try {
      const response = await axios.post('http://localhost:5000/api/admin/create-user', {
        email,
        password,
        role,
        name,
        city
      });
      console.log('SignUp response:', response.data); // Log resposta do cadastro
      return { success: true, data: response.data };
    } catch (error) {
      console.error("Error signing up!", error);
      return { success: false };
    }
  }

  async login(email, password, setUserState) {
    try {
      console.log('Login attempt with email:', email); // Log tentativa de login
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });
      console.log('Login response:', response.data); // Log resposta do login
      const { token, role } = response.data.data;
      const userData = {
        email,
        token,
        role
      };
      setUserState(userData);
      return { success: true, data: userData };
    } catch (error) {
      console.error("Error logging in!", error);
      setUserState(null);
      return { success: false };
    }
  }

  async logout() {
    try {
      // Implement logout functionality if needed
    } catch (error) {
      console.error("Error logging out!", error);
      throw error;
    }
  }
}

export const authService = new AuthService();


//'''