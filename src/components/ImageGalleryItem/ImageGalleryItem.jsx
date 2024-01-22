import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  handlerImageView = e => {
    const clickedImage = e.target.getAttribute('src');
    if (e.target.nodeName === 'IMG') {
      this.props.handlerView(clickedImage);
    }
  };

  render() {
    const { hits } = this.props;
    return hits.map(element => (
      <li
        className={css.imageGalleryItem}
        key={element.id}
        onClick={this.handlerImageView}
      >
        <img
          className={css.imageGalleryItemImage}
          src={element.webformatURL}
          alt=""
        />
      </li>
    ));
  }
}

export default ImageGalleryItem;
