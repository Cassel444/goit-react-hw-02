import css from "./App.module.css";
import { useState } from "react";

import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

function App() {
  const [feedbackTypes, setFeedbackTypes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setFeedbackTypes({
      ...feedbackTypes,
      [feedbackType]: feedbackTypes[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setFeedbackTypes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback =
    feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;

  const positiveFeedback = Math.round(
    ((feedbackTypes.good + feedbackTypes.neutral) / totalFeedback) * 100
  );

  return (
    <div className={css.container}>
      <Description />
      <div className={css.buttons}>
        <Options onClick={() => updateFeedback("good")}>Good</Options>
        <Options onClick={() => updateFeedback("neutral")}>Neutral</Options>
        <Options onClick={() => updateFeedback("bad")}>Bad</Options>

        {totalFeedback !== 0 ? (
          <Options onClick={resetFeedback}>Reset</Options>
        ) : (
          <></>
        )}
      </div>
      <></>
      <>
        {totalFeedback > 0 ? (
          <>
            <Feedback
              good={feedbackTypes.good}
              neutral={feedbackTypes.neutral}
              bad={feedbackTypes.bad}
              total={totalFeedback}
              positive={positiveFeedback}
            />
          </>
        ) : (
          <Notification />
        )}
      </>
    </div>
  );
}

export default App;
