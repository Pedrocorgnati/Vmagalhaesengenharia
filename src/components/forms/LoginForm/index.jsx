import { Input } from "../Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "../Input/Input.scss";
import { loginFormSchema } from "./loginForm.schema";
import { ButtonLogin } from "../../Buttons/Buttons";
import { useNavigate } from 'react-router-dom';
import React from "react";
import { api } from "../../../services";
import { InputPassword } from "../Input/InputPassword/index.jsx";
import { toast } from 'react-toastify';

export const LoginForm = ({ setUser }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginFormSchema),
    });

    const navigate = useNavigate();

    const onSubmit = (payload) => {
        userLogin(payload);
    };

    const userLogin = async (payload) => {
        try {
            const { data } = await api.post("/sessions", payload);
            setUser(data.user);

            // Determine the user role and navigate accordingly
            if (data.user.role === 'admin') {
                navigate("/admin-dashboard");
            } else {
                navigate("/dashboard");
            }
        } catch (error) {
            console.log(error);
            if (error.response && error.response.data === "Cannot find user") {
                toast.error("Credenciais invalidas");
            } else {
                toast.error("Erro ao realizar login");
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input 
                label="Email" 
                type="text" 
                error={errors.email} 
                title="Email" 
                placeholder="Insira seu email aqui" 
                {...register("email")} 
            />

            <InputPassword
                label="Senha"
                error={errors.password}
                {...register("password")}
                placeholder="Insira sua senha aqui"
            />
            <p className="p-have-account">Ainda não possui uma conta?</p>

            <ButtonLogin />
        </form>
    );
};
