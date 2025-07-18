import "../ModalWithForm/ModalWithForm.css";
import Modal from "../Modal/Modal.jsx";

export default function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  onClose,
  onSubmit,
  isLoading,
  disabled,
  secondaryButtonText,
  secondaryButtonAction,
}) {
  return (
    isOpen && (
      <Modal onClose={onClose} isOpen={isOpen}>
        <h2 className="modal__title">{title}</h2>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <div className="modal__buttons-container">
            <button
              type="submit"
              className="modal__submit"
              disabled={isLoading || disabled}
            >
              {buttonText}
            </button>
            {secondaryButtonText && (
              <button
                type="button"
                className="modal__secondary-btn"
                onClick={secondaryButtonAction}
              >
                {secondaryButtonText}
              </button>
            )}
          </div>
        </form>
      </Modal>
    )
  );
}
