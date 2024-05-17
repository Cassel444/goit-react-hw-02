import css from "./Options.module.css";

function Options({ onClick, children }) {
  return (
    <button className={css.btn} onClick={onClick}>
      {children}
    </button>
  );
}

export default Options;
