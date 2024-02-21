import classes from "../styles/Illustration.module.css";
function Illustration({ imgIllustration }) {
  return (
    <div className={classes.illustration}>
      <img src={imgIllustration} alt="Signup" />
    </div>
  );
}

export default Illustration;
