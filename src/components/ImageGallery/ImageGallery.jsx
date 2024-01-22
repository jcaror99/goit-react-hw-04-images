import { Component } from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem.jsx';

class ImageGallery extends Component {
  render() {
    const { hits, handlerView } = this.props;

    return (
      <ul className={css.imageGallery}>
        <ImageGalleryItem hits={hits} handlerView={handlerView} />
      </ul>
    );
  }
}

export default ImageGallery;
