import css from "./Button.module.css";

const Button = (props) => {
  const { handlerLoader } = props;
  return (
    <button type="submit" className={css.button} onClick={handlerLoader}>
      Load more
    </button>
  );
};

export default Button;
