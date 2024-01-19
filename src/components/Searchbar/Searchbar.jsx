import { Component } from 'react';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  handlerFilterWord = e => {
    e.preventDefault();
    const filterWord = document.querySelector('input');
    this.props.handlerSearch(filterWord.value);
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.handlerFilterWord}>
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
  }
}

export default Searchbar;
