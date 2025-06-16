import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { useEffect } from "react";

export default function AddItemModal({
  onClose,
  isOpen,
  activeModal,
  onAddItemModalSubmit,
  isLoading,
}) {
  const { values, handleChange, errors, isValid, resetForm, setValues } =
    useFormAndValidation({
      name: "",
      imageUrl: "",
      weather: "",
    });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isValid && Object.values(errors).every((error) => error === "")) {
      onAddItemModalSubmit(values)
        .then(() => {
          resetForm();
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
  useEffect(() => {
    setValues({
      name: "",
      imageUrl: "",
      weather: "",
    });
  }, [isOpen, setValues]);

  return (
    <ModalWithForm
      title="New garment"
      buttonText={isLoading ? "Saving..." : "Add garment"}
      activeModal={activeModal}
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      disabled={!isValid || Object.keys(errors).length > 0}
      isLoading={isLoading}
    >
      <label htmlFor="name" className="form__label">
        Name
        <input
          type="text"
          className="modal__input"
          id="name"
          name="name"
          placeholder="Name"
          minLength="2"
          maxLength="30"
          required
          onChange={handleChange}
          value={values.name}
        />
        {errors.name && <span className="modal__error">{errors.name}</span>}
      </label>
      <label htmlFor="imageUrl" className="form__label">
        Image
        <input
          name="imageUrl"
          type="url"
          className="modal__input"
          id="imageUrl"
          placeholder="Image URL"
          onChange={handleChange}
          value={values.imageUrl}
          required
        />
      </label>
      {errors.imageUrl && (
        <span className="modal__error">{errors.imageUrl}</span>
      )}
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            id="hot"
            name="weather"
            type="radio"
            className="modal__radio-input"
            onChange={handleChange}
            value="hot"
            checked={values.weather === "hot"}
          />
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            id="warm"
            name="weather"
            type="radio"
            className="modal__radio-input"
            onChange={handleChange}
            value="warm"
            checked={values.weather === "warm"}
          />
          Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            id="cold"
            name="weather"
            type="radio"
            className="modal__radio-input"
            onChange={handleChange}
            value="cold"
            checked={values.weather === "cold"}
          />
          Cold
        </label>
        {errors.weather && (
          <span className="radio-group__error">{errors.weather}</span>
        )}
      </fieldset>
    </ModalWithForm>
  );
}
