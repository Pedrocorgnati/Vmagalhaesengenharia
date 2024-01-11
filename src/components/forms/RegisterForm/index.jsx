import { Input } from "../Input";
import "../../Buttons/Buttons.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "../Input/Inputs.scss";
import { registerFormSchema } from "./registerForm.schema";
import { InputPassword } from "../InputPassword/index";
import { api } from "../../../services";
import { useNavigate } from "react-router-dom";



export const RegisterForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(registerFormSchema),
    });

    const navigate = useNavigate();

    const onSubmit = (payload) => {
        userRegister(payload);
    }
    const userRegister = async (payload) => {
        try {
            const { data } = await api.post("/users", payload);
            navigate("/");
            console.log(data);
        } catch (error) {
            console.error("Error during registration:", error.response.data);
            if (error.response && error.response.data && error.response.data.message) {
                console.error("Error details:", error.response.data.message);
            }
        }

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input label="Nome" type="text" error={errors.name} title="Nome" placeholder="Insira seu nome aqui" {...register("name")} />

            <Input label="Email" type="email" error={errors.email} title="Email" placeholder="Insira seu email aqui" {...register("email")} />

            <InputPassword label="Senha" type="password" error={errors.password} title="password" placeholder="Digite aqui a sua senha." {...register("password")} />

            <Input label="Confirme sua senha" type="password" error={errors.confirmPassword} title="confirmPassword" placeholder="Digite novamente a sua senha." {...register("confirmPassword")} />

            <button className="button-submit" type="submit">Cadastre-se</button>

        </form>
    );
}
