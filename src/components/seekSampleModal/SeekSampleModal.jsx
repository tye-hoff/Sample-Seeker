import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function SeekSampleModal({
  isOpen,
  onClose,
  onSeekClick,
  onRedirect,
  onEscPress,
  onSearchModalSubmit,
}) {
  const [searchTag, setSearchTag] = useState("");
  const [searchName, setSearchName] = useState("");

  const handleInputChange = (e) => {
    if (e.target.id === "sample-name") {
      setSearchName(e.target.value);
    }
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
  };

  return (
    <ModalWithForm
      buttonText="Search"
      buttonText2="or sign up"
      title="Seek your sample"
      isOpen={isOpen}
      onClose={onClose}
      onEscPress={onEscPress}
      registerRedirect={registerRedirect}
      onSeekClick={onSeekClick}
      onSubmit={handleSubmit}
    >
      <label htmlFor="sample-name" className="modal__label">
        Seek by name{" "}
        <input
          type="text"
          className="modal__input"
          id="sample-name"
          placeholder=" Seek by name"
          required
          minLength="1"
          maxLength="30"
          onChange={handleInputChange}
          value={searchName}
        />
      </label>
      <label htmlFor="sample-tag" className="modal__label">
        Seek by tag{" "}
        <input
          type="text"
          className="modal__input"
          id="sample-tag"
          placeholder=" Seek by tag (warm, digital, analog, etc.)"
          onChange={handleInputChange}
          value={searchTag}
        />
      </label>
    </ModalWithForm>
  );
}
