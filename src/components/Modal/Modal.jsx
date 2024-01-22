import { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.handlerView('');
    }
  };

  handlerClose = e => {
    if (e.target.nodeName !== 'IMG') {
      this.props.handlerView('');
    }
  };

  render() {
    const { clickedImage } = this.props;
    return (
      <div className={css.overlay} onClick={this.handlerClose}>
        <div className={css.modal}>
          <img src={clickedImage} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
