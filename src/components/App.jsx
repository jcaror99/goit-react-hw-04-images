import css from "./App.module.css";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Modal from "./Modal/Modal";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";

import { getMovies } from "../services/getMovies";
import { useState } from "react";

const App = () => {
  const [hits, setHits] = useState([]);
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);
  const [searchWorld, setSearchWorld] = useState("");
  const [clickedImage, setClickedImage] = useState("");

  const handlerSearch = (word) => {
    setLoader(true);
    getMovies(word)
      .then((response) => {
        setHits(response);
        setSearchWorld(word);
        setLoader(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handlerLoader = () => {
    getMovies(searchWorld, page + 1).then((newHits) => {
      setHits((prevState) => [...hits, ...newHits]);
      setPage((prevState) => page + 1);
    });
  };

  const handlerView = (image) => {
    setClickedImage(image);
  };

  return (
    <div className={css.app}>
      <Searchbar handlerSearch={handlerSearch} />
      {loader && <Loader />}
      <ImageGallery hits={hits} handlerView={handlerView} />
      {hits.length > 0 && <Button handlerLoader={handlerLoader} />}
      {clickedImage !== "" && (
        <Modal clickedImage={clickedImage} handlerView={handlerView} />
      )}
    </div>
  );
};

export { App };
