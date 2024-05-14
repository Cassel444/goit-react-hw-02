import css from "./Options.module.css";

function Options({ updateFeedback }) {
  return (
    <div className={css.buttons}>
      <button className={css.btn} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={css.btn} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={css.btn} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
    </div>
  );
}

export default Options;
