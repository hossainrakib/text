import imgVideo from "../assets/images/3.jpg";
import classes from "../styles/Video.module.css";
function Video() {
  return (
    <div className={classes.video}>
      <img src={imgVideo} alt="videos title" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
      <div className={classes.qmeta}>
        <p>10 Questions</p>
        <p>Score : Not taken yet</p>
      </div>
    </div>
  );
}

export default Video;
