import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { postSample } from "../../utils/FreeSoundApi";

export default function AddSampleModal({
  onAddSampleSubmit,
  isOpen,
  onAddSampleClick,
  onClose,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddSampleSubmit();

    const formData = new FormData();
    formData.append("audiofile", selectedFile);
    formData.append("description", description);
    formData.append("tags", tags);

    postSample(formData);
  };

  return (
    <ModalWithForm
      title="Add Sample"
      buttonText="Upload"
      isOpen={isOpen}
      onAddSampleClick={onAddSampleClick}
      onSubmit={handleSubmit}
      onClose={onClose}
    >
      <label htmlFor="audioFile" className="modal__label">
        Your Audio File{" "}
        <input
          type="file"
          id="audioFile"
          className="modal__input modal__input-file"
          name="audioFile"
          accept="audio/*"
          required
        />
      </label>
      <label htmlFor="upload-tags" className="modal__label">
        Your Tags{" "}
        <input
          type="text"
          className="modal__input"
          id="upload-tags"
          placeholder="your sample's tags"
          required
        />
      </label>
      <label htmlFor="upload-description" className="modal__label">
        Description{" "}
        <input
          type="text"
          className="modal__input"
          id="upload-description"
          placeholder="Describe your sound"
          required
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select your License type</legend>
        <label
          htmlFor="attribution-non-commercial"
          className="modal__label modal__label_type_radio"
        >
          <input
            id="attribution-non-commercial"
            name="button"
            type="radio"
            className="modal__radio-input"
            value="Attribution non commercial (free)"
          />{" "}
          Attribution non commercial
        </label>
        <label
          htmlFor="attribution"
          className="modal__label modal__label_type_radio"
        >
          <input
            id="attribution"
            name="button"
            type="radio"
            className="modal__radio-input"
            value="Attribution"
          />{" "}
          Attribution
        </label>
      </fieldset>
    </ModalWithForm>
  );
}
