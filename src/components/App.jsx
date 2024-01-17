import { Component } from 'react';
import css from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import Loader from './Loader/Loader';

class App extends Component {
  render() {
    return (
      <div className={css.app}>
        <Searchbar />
        <ImageGallery />
        <ImageGalleryItem />
        <Modal />
        <Button />
        <Loader />
      </div>
    );
  }
}

export { App };
