//src/pages/Dashboard/components/ReportsManagement/EditReportModal.tsx
//'''
import { EditReport } from "./EditReport";
import { EditReportModalProps } from 'types/types';



export const EditReportModal: React.FC<EditReportModalProps> = ({ reportId, onClose, onReportUpdated }) => {
  if (!reportId) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <EditReport reportId={reportId} onReportUpdated={onReportUpdated} onClose={onClose} />
      </div>
    </div>
  );
};

//'''
