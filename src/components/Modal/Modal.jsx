import { useEffect } from "react";
import css from "./Modal.module.css";

const Modal = (props) => {
  const { clickedImage, handlerView } = props;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handlerView("");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handlerView]);

  const handlerClose = (e) => {
    if (e.target.nodeName !== "IMG") {
      handlerView("");
    }
  };

  return (
    <div className={css.overlay} onClick={handlerClose}>
      <div className={css.modal}>
        <img src={clickedImage} alt="" />
      </div>
    </div>
  );
};

export default Modal;
