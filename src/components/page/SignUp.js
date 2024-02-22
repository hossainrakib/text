import imgsignup from "../../assets/images/signup.svg";
import Illustration from "../Illustration";
import SignupFrom from "../SignupFrom";

function SingUp() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration imgIllustration={imgsignup} />
        <SignupFrom></SignupFrom>
      </div>
    </>
  );
}

export default SingUp;
