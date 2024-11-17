import s from "./ImageModal.module.css";
import Modal from "react-modal";

const ImageModal = ({ image, isOpen, onRequestClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div>
        <img src={image.urls.regular} alt={image.alt_description} />
      </div>
    </Modal>
  );
};

export default ImageModal;
