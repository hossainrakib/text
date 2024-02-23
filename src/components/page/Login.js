import imgLogin from "../../assets/images/login.svg";
import Illustration from "../Illustration";
import LoginForm from "../LoginFrom";

function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration imgIllustration={imgLogin} />
        <LoginForm></LoginForm>
      </div>
    </>
  );
}

export default Login;
