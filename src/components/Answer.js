import classes from "../styles/Answer.module.css";
import Checkbox from "./Checkbox";
function Answers() {
  return (
    <div className={classes.answers}>
      {/* <!-- Option 1 --> */}
      <Checkbox className={classes.answer} type="checkbox" text="A New Hope 1"></Checkbox>
    </div>
  );
}

export default Answers;
