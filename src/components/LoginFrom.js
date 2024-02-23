import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseAuthor } from "../contexts/AuthorContext";
import Button from "./Button";
import Form from "./Form";
import Info from "./Info";
import TextInput from "./TextInput";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState("");

  const { login } = UseAuthor();
  const navigate = useNavigate();

  // Function to validate email format
  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    // Validation: Check if email is in valid format
    if (!isEmailValid(email)) {
      return setErro("Invalid email format");
    }

    try {
      setErro("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setErro("Failed to create an account!");
    }
  }

  return (
    <Form style={{ height: "350px" }} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></TextInput>
      <TextInput
        type="password"
        placeholder="Enter password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></TextInput>

      <Button disabled={loading} type="submit">
        <span>Submit now</span>
      </Button>

      {erro && <p className="error">{erro}</p>}

      <Info text="Don't have an account?" link="singup.html">
        SignUp
      </Info>
    </Form>
  );
}

export default LoginForm;
