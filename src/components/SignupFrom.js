import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseAuthor } from "../contexts/AuthorContext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import Info from "./Info";
import TextInput from "./TextInput";

function SignupFrom() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setcomfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState("");

  const { signin } = UseAuthor();
  const navigate = useNavigate();


  async function handleSubmit(e) {
    e.preventDefault();

    //validition password
    if (password !== comfirmPassword) {
      return setErro("password do not match");
    }

    // Validation: Check if email is in valid format
    if (!isValidEmail(email)) {
      return setErro("Invalid email format");
    }

    try {
      setErro("");
      setLoading(true);
      await signin(email, password, userName);
      navigate.post("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setErro("Failed to create an account!");
    }
  }
  function isValidEmail(email) {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return (
    <Form style={{ height: "500px" }} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="Enter name"
        icon="person"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextInput
        type="text"
        placeholder="Enter Email"
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        type="password"
        placeholder="Enter Password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextInput
        type="password"
        placeholder="Comfirm password"
        icon="lock_clock"
        value={comfirmPassword}
        onChange={(e) => setcomfirmPassword(e.target.value)}
      />
      <Checkbox
        required
        type="checkbox"
        text="I agree to the Terms &amp; Conditions"
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
      />
      <Button disabled={loading} type="submit">
        <span>Submit Now</span>
      </Button>

      {erro && <p className="error">{erro}</p>}

      <Info text="Already have an account?" link="/login">
        Login
      </Info>
    </Form>
  );
}

export default SignupFrom;
