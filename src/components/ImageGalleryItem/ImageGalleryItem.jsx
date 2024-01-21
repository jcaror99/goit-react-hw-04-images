import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  render() {
    const { hits } = this.props;
    return hits.map(element => (
      <li className={css.imageGalleryItem} key={element.id}>
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
