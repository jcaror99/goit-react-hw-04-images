import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={css.imageGalleryItem}>
        <img className={css.imageGalleryItemImage} src="" alt="" />
      </li>
    );
  }
}

export default ImageGalleryItem;
