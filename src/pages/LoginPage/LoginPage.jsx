import { ButtonLogin } from "../../components/index";
import { HeaderLogin } from "../../components/Header/Header";
import { LoginForm } from "../../components/forms/LoginForm";



export const LoginPage = ({ setUser }) => {
  return (
    <>
      <HeaderLogin />
      <main className="div-inputs">
        <h2 className="login-title">Login</h2>
        <LoginForm setUser={setUser} />

      </main>
    </>
  )
}

