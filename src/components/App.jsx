import { Component } from 'react';
import css from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import Loader from './Loader/Loader';

import { getMovies } from '../services/getMovies';

class App extends Component {
  state = {
    hits: [],
    loader: false,
    page: 1,
    searchWorld: '',
    clickedImage: '',
  };

  handlerSearch = word => {
    this.setState({ loader: true });
    getMovies(word)
      .then(response => {
        this.setState({ hits: response, searchWorld: word, loader: false });
      })
      .catch(error => {
        console.error(error);
      });
  };

  handlerLoader = () => {
    const { searchWorld, page } = this.state;
    getMovies(searchWorld, page + 1).then(newHits =>
      this.setState(prevState => ({
        hits: [...prevState.hits, ...newHits],
        page: prevState.page + 1,
      }))
    );
  };

  handlerView = image => {
    this.setState({ clickedImage: image });
  };

  render() {
    console.log(this.state);
    return (
      <div className={css.app}>
        <Searchbar handlerSearch={this.handlerSearch} />
        {this.state.loader && <Loader />}
        <ImageGallery hits={this.state.hits} handlerView={this.handlerView} />
        {this.state.hits.length > 0 && (
          <Button handlerLoader={this.handlerLoader} />
        )}
        {this.state.clickedImage !== '' && (
          <Modal
            clickedImage={this.state.clickedImage}
            handlerView={this.handlerView}
          />
        )}
      </div>
    );
  }
}

export { App };
