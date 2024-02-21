import imgsignup from "../../assets/images/signup.svg";
import classes from "../../styles/Singup.module.css";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import Info from "../Info";
import TextInput from "../TextInput";

function SingUp() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration imgIllustration={imgsignup} />
        <Form className={`${classes.signup}`}>
          <TextInput type="text" placeholder="Enter name" icon="person" />
          <TextInput
            type="text"
            placeholder="Enter Email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter Password" icon="lock" />
          <TextInput
            type="password"
            placeholder="Comfirm password"
            icon="lock_clock"
          />
          <Checkbox
            type="checkbox"
            text="I agree to the Terms &amp; Conditions"
          />
          <Button><span>Submit Now</span></Button>

          <Info text='Already have an account?' link="login.html">Login</Info>
        </Form>
      </div>
    </>
  );
}

export default SingUp;
