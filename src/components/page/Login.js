import imgLogin from "../../assets/images/login.svg";
import classes from "../../styles/Singup.module.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import Info from "../Info";
import TextInput from "../TextInput";

function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration imgIllustration={imgLogin} />
        <Form className={`${classes.signup}`}>
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          ></TextInput>
          <TextInput
            type="password"
            placeholder="Enter password"
            icon="lock"
          ></TextInput>

          <Button><span>Submit now</span></Button>

          <Info text="Don't have an account?" link="singup.html">
            SignUp
          </Info>
        </Form>
      </div>
    </>
  );
}

export default Login;
