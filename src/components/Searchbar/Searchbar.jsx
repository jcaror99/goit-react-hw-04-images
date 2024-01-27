import css from "./Searchbar.module.css";

const Searchbar = (props) => {
  const { handlerSearch } = props;

  const handlerFilterWord = (e) => {
    e.preventDefault();
    const filterWord = document.querySelector("input");
    handlerSearch(filterWord.value);
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handlerFilterWord}>
        <button type="submit" className={css.searchFormButton}>
          <span className={css.searchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
