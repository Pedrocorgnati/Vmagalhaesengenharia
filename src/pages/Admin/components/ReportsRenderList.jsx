import React, { useState, useEffect } from 'react';
import { reportsService } from '../../../services/ReportsService';
import { EditReportModal } from './EditReportModal';
import downloadIcon from "../../../Assets/Icons/download.svg";
import editIcon from "../../../Assets/Icons/edit.svg";
import deleteIcon from "../../../Assets/Icons/delete.svg";
import "../Admin.scss";

export const ReportsRenderList = ({ filters }) => {
    const [reports, setReports] = useState([]);
    const [editModalReportId, setEditModalReportId] = useState(null);

    useEffect(() => {
        loadReports();
    }, [filters]);
    const onReportUpdated = () => {
        loadReports();
    };
    const loadReports = () => {
        reportsService.getReportsList().then(data => {
            let filteredData = data;
            if (filters && filters.type) {
                filteredData = filteredData.filter(report => report.type === filters.type);
            }
            if (filters && filters.client) {
                filteredData = filteredData.filter(report => report.client === filters.client);
            }
            setReports(filteredData);
        });
    };

    const handleEditClick = (reportId) => {
        setEditModalReportId(reportId);
    };

    const handleDelete = (reportId) => {
        reportsService.deleteReport(reportId);
        loadReports();
    };

    return (
        <div className='report-render-list'>
            {reports.map(report => (
                <div key={report.id} className="report-item">
                    <div className="report-theme">
                        <h2 className='report-title'>{report.title}</h2>
                        <div className="report-info">
                            <p>Cliente: {report.client}</p>
                            <p>Data: {new Date(report.date).toLocaleDateString()}</p>
                            <p>Tipo: {report.type}</p>

                        </div>
                    </div>
                    <div className='report-icons'>
                        <a href={report.Link} target="_blank" rel="noopener noreferrer">
                            <img src={downloadIcon} alt="Download" />
                        </a>
                        <button className="actionIcon" onClick={() => handleEditClick(report.id)}>
                            <img src={editIcon} alt="Editar" />
                        </button>
                        <button className="actionIcon" onClick={() => handleDelete(report.id)}>
                            <img src={deleteIcon} alt="Excluir" />
                        </button>
                    </div>
                </div>
            ))}
            {editModalReportId && <EditReportModal reportId={editModalReportId} onClose={() => setEditModalReportId(null)} onReportUpdated={onReportUpdated} />
            }
        </div>
    );
};

export default ReportsRenderList;