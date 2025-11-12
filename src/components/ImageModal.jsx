export default function ImageModal({ imageSrc, onClose }) {
  if (!imageSrc) return null;

  return (
    <div className="image-modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <img src={imageSrc} alt="Full size" />
      </div>
    </div>
  );
}

