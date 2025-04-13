import "./ItemModal.css";

function ItemModal({ activeModal, card, onClose, handleDeleteItem }) {
  const deleteItem = () => {
    handleDeleteItem(card._id);
    onclose();
  };
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
        ></button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <p className="modal__caption">{card.name}</p>
          <button className="modal__delete" type="button" onClick={deleteItem}>
            Delete item
          </button>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
