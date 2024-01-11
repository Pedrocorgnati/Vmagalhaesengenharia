import { ButtonLogin, ButtonSignUp } from "../../components/index";
import { HeaderLogin, HeaderRegister } from "../../components/Header/Header";
import { LoginForm } from "../../components/forms/LoginForm";



export const LoginPage = ({ setUser }) => {
  return (
    <>
      <HeaderRegister />
      <main className="div-inputs">
        <h2 className="login-title">Login</h2>
        <LoginForm setUser={setUser} />
        <p>Ainda não possui uma conta?</p>
        <ButtonSignUp />
      </main>
    </>
  )
}

