//'''
// src/services/ReportsService.ts

import axios from 'axios';

class ReportsService {
  async addReport(report: FormData) {
    try {
      const response = await axios.post('http://localhost:5000/api/reports/upload', report, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      return { success: true, data: response.data };
    } catch (error:any) {
      return { success: false, message: error.response?.data?.message || 'Error adding report' };
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
      return [];
    }
  }

  async deleteReport(reportId: string) {
    try {
      await axios.delete(`http://localhost:5000/api/reports/delete/${reportId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return { success: true };
    } catch (error:any) {
      return { success: false, message: error.response?.data?.message || 'Error deleting report' };
    }
  }

  async findReportById(reportId: string) {
    try {
      const response = await axios.get(`http://localhost:5000/api/reports/${reportId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return response.data;
    } catch (error) {
      return null;
    }
  }

  async updateReport(reportId: string, reportData: Partial<Report>) {
    try {
      await axios.put(`http://localhost:5000/api/reports/${reportId}`, reportData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return { success: true };
    } catch (error:any) {
      return { success: false, message: error.response?.data?.message || 'Error updating report' };
    }
  }

  async getReportTypes() {
    try {
      const response = await axios.get('http://localhost:5000/api/reports/types', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return response.data;
    } catch (error) {
      return [];
    }
  }

  async addReportType(type: string) {
    try {
      await axios.post('http://localhost:5000/api/reports/types', { type }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return { success: true };
    } catch (error:any) {
      return { success: false, message: error.response?.data?.message || 'Error adding report type' };
    }
  }

  async deleteReportType(typeId: string) {
    try {
      await axios.delete(`http://localhost:5000/api/reports/types/${typeId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return { success: true };
    } catch (error:any) {
      return { success: false, message: error.response?.data?.message || 'Error deleting report type' };
    }
  }
}

export const reportsService = new ReportsService();

//'''