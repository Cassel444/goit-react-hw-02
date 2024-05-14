import css from "./Feedback.module.css";

function Feedback() {
  return (
    <ul className={css.list}>
      <li className={css.item}>Good:{}</li>
      <li className={css.item}>Neutral:{}</li>
      <li className={css.item}>Bad:{}</li>
      <li className={css.item}>Total:{}</li>
      <li className={css.item}>Positive:{}</li>
    </ul>
  );
}

export default Feedback;
