//'''
//'''
import axios from 'axios';

class HomePageService {
  async updateContact(contactData: { address: string; contact: string }) {
    try {
      const response = await axios.post('http://localhost:5000/api/home/contact', contactData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return { success: true, data: response.data };
    } catch (error) {
      console.error("Error updating contact", error);
      return { success: false };
    }
  }

  async updateAbout(aboutData: { whoWeAre: string; whatWeDo: string; image: File | null }) {
    try {
      const formData = new FormData();
      formData.append('whoWeAre', aboutData.whoWeAre);
      formData.append('whatWeDo', aboutData.whatWeDo);
      if (aboutData.image) {
        formData.append('image', aboutData.image);
      }
      const response = await axios.post('http://localhost:5000/api/home/about', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      return { success: true, data: response.data };
    } catch (error) {
      console.error("Error updating about", error);
      return { success: false };
    }
  }
}

export const homePageService = new HomePageService();
//'''
