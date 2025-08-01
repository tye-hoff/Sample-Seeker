import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function SeekSampleModal({
  isOpen,
  onClose,
  onSeekClick,
  onRedirect,

  onSearchModalSubmit,
}) {
  const [searchTag, setSearchTag] = useState("");

  const handleInputChange = (e) => {
    if (e.target.id === "sample-tag") {
      setSearchTag(e.target.value);
    }
  };

  const registerRedirect = () => {
    onRedirect();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchModalSubmit(searchTag);
    onClose();
  };

  return (
    <ModalWithForm
      buttonText="Search"
      buttonText2="or sign up"
      hasSecondButton={true}
      title="Seek your sample"
      isOpen={isOpen}
      onClose={onClose}
      registerRedirect={registerRedirect}
      onSeekClick={onSeekClick}
      onSubmit={handleSubmit}
    >
      <label htmlFor="sample-tag" className="modal__label">
        Seek by tag, mood, or genre{" "}
        <input
          type="text"
          className="modal__input"
          id="sample-tag"
          placeholder="Ex: (warm, happy, jazz, etc.)"
          onChange={handleInputChange}
          value={searchTag}
        />
      </label>
    </ModalWithForm>
  );
}
