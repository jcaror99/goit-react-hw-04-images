import { Component } from 'react';
import css from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
// import Modal from './Modal/Modal';
import Button from './Button/Button';
// import Loader from './Loader/Loader';

import { getMovies } from '../services/getMovies';

class App extends Component {
  state = {
    hits: [],
    loader: false,
  };

  handlerSearch = word => {
    getMovies(word)
      .then(response => {
        this.setState({ hits: response });
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <div className={css.app}>
        <Searchbar handlerSearch={this.handlerSearch} />

        <ImageGallery hits={this.state.hits} />
        {this.state.hits.length > 0 && <Button />}
        {/* 
        <Modal />
        
        <Loader /> */}
      </div>
    );
  }
}

export { App };
