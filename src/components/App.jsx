import { Component } from 'react';
import css from './App.module.css';
// import Searchbar from './Searchbar/Searchbar';
// import ImageGallery from './ImageGallery/ImageGallery';
// import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
// import Modal from './Modal/Modal';
// import Button from './Button/Button';
// import Loader from './Loader/Loader';

import { getMovies } from 'services/getMovies';

class App extends Component {
  state = {};

  componentDidMount() {
    getMovies();
    console.log('montaje en el Dom');
    // this.setState(getMovies());
  }

  render() {
    return (
      <div className={css.app}>
        {/* <Searchbar />
        <ImageGallery />
        <ImageGalleryItem />
        <Modal />
        <Button />
        <Loader /> */}
        {/* {console.log(this.state)} */}
      </div>
    );
  }
}

export { App };
