import css from "./ImageGalleryItem.module.css";

const ImageGalleryItem = (props) => {
  const { hits, handlerView } = props;

  const handlerImageView = (e) => {
    const clickedImage = e.target.getAttribute("src");
    if (e.target.nodeName === "IMG") {
      handlerView(clickedImage);
    }
  };

  return hits.map((element) => (
    <li
      className={css.imageGalleryItem}
      key={element.id}
      onClick={handlerImageView}
    >
      <img
        className={css.imageGalleryItemImage}
        src={element.webformatURL}
        alt=""
      />
    </li>
  ));
};

export default ImageGalleryItem;
