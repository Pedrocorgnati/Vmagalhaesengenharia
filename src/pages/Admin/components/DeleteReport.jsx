import React from 'react';
import { reportsService } from '../../../services/ReportsService';

export const DeleteReport = ({ reportId, icon }) => {
    const handleDelete = () => {
        reportsService.deleteReport(reportId);
        console.log("botão clicado");
        console.log(handleDelete);
    };

    return (
        <button onClick={handleDelete}>
            {icon && <img src={icon} alt="Excluir" />}
        </button>
    );
};
