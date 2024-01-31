import React, { useState } from 'react';
import { HeaderAdmin } from "../../../../components/Header/Header";
import { AsideAdmin } from "../../components/AsideAdmin/AsideAdmin";
import "../../Admin.scss";

export const ConfigAdmPage = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [repeatNewPassword, setRepeatNewPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPassword !== repeatNewPassword) {
            alert("As novas senhas não coincidem.");
            return;
        }
        console.log("Senha alterada com sucesso.");
    };

    return (
        <>
            <HeaderAdmin />
            <AsideAdmin />
            <form className="config-page" onSubmit={handleSubmit}>
                <div>
                    <label>Senha Antiga:</label>
                    <input
                        type="password"
                        required
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label>Senha Nova:</label>
                    <input
                        type="password"
                        required
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label>Repita a Senha Nova:</label>
                    <input
                        type="password"
                        required
                        value={repeatNewPassword}
                        onChange={(e) => setRepeatNewPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className='button-submit'>Alterar Senha</button>
            </form>
        </>
    );
};
