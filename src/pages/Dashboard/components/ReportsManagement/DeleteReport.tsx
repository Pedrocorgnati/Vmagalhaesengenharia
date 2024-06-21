//'''
// src/pages/Dashboard/components/ReportsManagement/DeleteReport.tsx
import { reportsService } from '../../../../services/ReportsService';
import { FaTrash } from 'react-icons/fa';
import { DeleteReportProps } from 'types/types';

const DeleteReport: React.FC<DeleteReportProps> = ({ reportId }) => {
  const handleDelete = async () => {
    if (window.confirm('Tem certeza que deseja deletar este relatório?')) {
      await reportsService.deleteReport(reportId);
      window.location.reload();
    }
  };

  return (
    <button onClick={handleDelete}>
      <FaTrash />
    </button>
  );
};

export default DeleteReport;
//'''
