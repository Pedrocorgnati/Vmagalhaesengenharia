import { HeaderLogin } from "../../components/Header/Header";
import { RegisterForm } from "../../components/index";


export const RegisterPage = () => {

  return (
    <>
      <HeaderLogin />
      <main className="div-inputs div-register">
        <section>
          <h2 className="login-title">Crie sua conta</h2>
          <p className="p-have-account">Rápido e grátis, vamos nessa</p>
        </section>
        <RegisterForm />

      </main>
    </>
  )
}

