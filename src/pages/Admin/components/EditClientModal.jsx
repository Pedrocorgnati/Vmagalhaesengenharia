import React from 'react';
import { EditClient } from "./EditClient";
import "../Admin.scss";

export const EditClientModal = ({ clientId, onClose, onClientUpdated }) => {
    if (!clientId) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>&times;</span>
                <EditClient clientId={clientId} onClientUpdated={onClientUpdated} onClose={onClose} />
            </div>
        </div>
    );
};
