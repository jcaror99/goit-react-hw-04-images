import { Component } from 'react';
import css from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
// import ImageGallery from './ImageGallery/ImageGallery';
// import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
// import Modal from './Modal/Modal';
// import Button from './Button/Button';
// import Loader from './Loader/Loader';

import { getMovies } from 'services/getMovies';

class App extends Component {
  state = {
    data: {},
    loader: false,
    filter: '',
  };

  handlerSearch = word => {
    this.setState({ filter: word });
  };

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('componentDidUpdate');
  //   if (prevState.filter !== this.props.filter) {
  //     getMovies(this.props.filter).then(function (response) {
  //       console.log(response);
  //     });
  //   }
  // }

  render() {
    console.log('render', this.state);
    return (
      <div className={css.app}>
        <Searchbar handlerSearch={this.handlerSearch} />
        {/* <ImageGallery />
        <ImageGalleryItem />
        <Modal />
        <Button />
        <Loader /> */}
      </div>
    );
  }
}

export { App };
