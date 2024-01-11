import { z } from "zod";

export const registerFormSchema = z
    .object({
        name: z
            .string()
            .min(1, "Este campo é obrigatório"),
        email: z
            .string()
            .email("Por favor insira um email válido.")
            .min(1, "Este campo é obrigatório"),
        password: z
            .string()
            .min(8, "Este campo é obrigatório")
            .regex(/[a-z]+/, "É necessário conter pelo menos uma letra minúscula")
            .regex(/[A-Z]+/, "É necessário conter pelo menos uma letra maiúscula")
            .regex(/[0-9]+/, "É necessário conter pelo menos um número")
            .regex(/[!@#$%&*()]+/, "É necessário ter pelo menos um caractere especial"),
        confirmPassword: z
            .string()
            .min(1, "Confirmar a senha é obrigatório"),
        bio: z
            .string()
            .min(1, "Este campo é obrigatório"),
        contact: z
            .string()
            .min(1, "Este campo é obrigatório"),
        course_module: z
            .string()
            .min(1, "Este campo é obrigatório"),

    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
        message: "As senhas não correspondem.", path: ["confirmPassword"]
    });