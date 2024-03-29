import React from 'react';
import { EditReport } from "./EditReport";
import "../Admin.scss";

export const EditReportModal = ({ reportId, onClose, onReportUpdated }) => {
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
