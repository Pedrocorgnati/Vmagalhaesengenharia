//src/services/AuthService.js
//'''
import axios from 'axios';

class AuthService {
  async signUp(email, password, role, name, city) {
    try {
      console.log('SignUp data:', { email, password, role, name, city }); // Log dados de cadastro
      const response = await axios.post('http://localhost:5000/api/admin/create-user', {
        email,
        password,
        role,
        name,
        city
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      console.log('SignUp response:', response.data);
      return { success: true, data: response.data };
    } catch (error) {
      console.error("Error signing up!", error);
      if (error.response) {
        console.error("Error response data:", error.response.data); // Log resposta de erro
      }
      return { success: false };
    }
  }

  async login(email, password, setUserState) {
    try {
      console.log('Login attempt with email:', email);
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });
      console.log('Login response:', response.data);
      const { token, role } = response.data.data;
      const userData = {
        email,
        token,
        role
      };
      localStorage.setItem('token', token); // Armazene o token no localStorage
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