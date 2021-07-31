import React, { useState } from "react";
import "./App.css";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";
import Notification from "./Notification";

const useStateFeedbacks = (key) => {
  const [state, setState] = useState(0);

  return [state, setState];
};

const App = () => {
  const [good, setGood] = useStateFeedbacks("good");
  const [neutral, setNeutral] = useStateFeedbacks("neutral");
  const [bad, setBad] = useStateFeedbacks("bad");

  const feedbacksObj = { good, neutral, bad };
  const stateKeysArr = Object.keys(feedbacksObj);
  const feedbacksCount = stateKeysArr.reduce(
    (acc, feedback) => acc + feedbacksObj[feedback],
    0
  );
  const positivePercentage = Math.round((good / feedbacksCount) * 100);

  const setFeedbackToState = (evt) => {
    const value = evt.target.textContent;
    switch (value) {
      case "good":
        setGood((prev) => prev + 1);
        break;

      case "neutral":
        setNeutral((prev) => prev + 1);
        break;

      case "bad":
        setBad((prev) => prev + 1);
        break;

      default:
        return;
    }
  };
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={setFeedbackToState}
          stateKeysArr={stateKeysArr}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {!feedbacksCount ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            allFeedbacksObj={feedbacksObj}
            total={feedbacksCount}
            positivePercentage={positivePercentage}
            stateKeysArr={stateKeysArr}
          />
        )}
      </Section>
    </>
  );
};
export default App;
// ________________________________

// const useStateFeedbacks = (key) => {
//   const [state, setState] = useState(0);

//   return [state, setState];
// };

// const App = () => {
//   const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

//   const stateKeysArr = Object.keys(state);
//   const feedbacksCount = stateKeysArr.reduce(
//     (acc, feedback) => acc + state[feedback],
//     0
//   );
//   const positivePercentage = Math.round((state.good / feedbacksCount) * 100);

//   const setFeedbackToState = (feedback) => {
//     setState((prevState) => {
//       return { ...prevState, [feedback]: prevState[feedback] + 1 };
//     });
//   };

//   return (
//     <>
//       <Section title="Please leave feedback">
//         <FeedbackOptions
//           onLeaveFeedback={setFeedbackToState}
//           stateKeysArr={stateKeysArr}
//         ></FeedbackOptions>
//       </Section>

//       <Section title="Statistics">
//         {!feedbacksCount ? <Notification message="No feedback given" />:<Statistics
//             allFeedbacksObj={state}
//             total={feedbacksCount}
//             positivePercentage={positivePercentage}
//             stateKeysArr={stateKeysArr}
//           />}
//       </Section>
//     </>
//   );
// };
// export default App;
