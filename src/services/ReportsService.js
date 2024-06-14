import axios from 'axios';

class ReportsService {
  async addReport(report) {
    try {
      const formData = new FormData();
      Object.keys(report).forEach(key => {
        formData.append(key, report[key]);
      });
      const response = await axios.post('http://localhost:5000/api/reports/upload', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      return { success: true, data: response.data };
    } catch (error) {
      console.error("Error adding report", error);
      return { success: false };
    }
  }

  async getReportsList() {
    try {
      const response = await axios.get('http://localhost:5000/api/reports', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching reports list", error);
      return [];
    }
  }

  async deleteReport(reportId) {
    try {
      await axios.delete(`http://localhost:5000/api/reports/delete/${reportId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
    } catch (error) {
      console.error("Error deleting report", error);
    }
  }
}

export const reportsService = new ReportsService();
