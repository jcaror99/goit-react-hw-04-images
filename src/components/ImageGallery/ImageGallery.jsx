import css from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem.jsx";

const ImageGallery = (props) => {
  const { hits, handlerView } = props;

  return (
    <ul className={css.imageGallery}>
      <ImageGalleryItem hits={hits} handlerView={handlerView} />
    </ul>
  );
};

export default ImageGallery;
