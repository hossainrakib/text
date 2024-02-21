import Answers from "../Answer";
import ProgressBar from "../ProgressBar";

function Quiz() {
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>

      <Answers></Answers>
      <ProgressBar></ProgressBar>
    </>
  );
}

export default Quiz;