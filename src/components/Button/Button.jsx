import { Component } from 'react';
import css from './Button.module.css';

class Button extends Component {
  render() {
    const { handlerLoader } = this.props;
    return (
      <button type="submit" className={css.button} onClick={handlerLoader}>
        Load more
      </button>
    );
  }
}

export default Button;
