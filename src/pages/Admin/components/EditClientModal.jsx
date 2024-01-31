import React, { useEffect } from 'react';
import { EditClient } from "./EditClient";
import "../Admin.scss";

export const EditClientModal = ({ clientId, onClose, onClientUpdated }) => {
    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            onClose();
        }
    };

    const handleClickOutside = (event) => {
        if (event.target.classList.contains('modal')) {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    if (!clientId) return null;

    return (
        <div className="modal" onClick={handleClickOutside}>
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>&times;</span>
                <EditClient clientId={clientId} onClientUpdated={onClientUpdated} onClose={onClose} />
            </div>
        </div>
    );
};
