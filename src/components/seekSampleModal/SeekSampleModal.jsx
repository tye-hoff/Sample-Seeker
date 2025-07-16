import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function SeekSampleModal({
  isOpen,
  onClose,
  onSeekClick,
  onRedirect,
  onSeekSubmit,
  onEscPress,
}) {
  const registerRedirect = () => {
    onRedirect();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSeekSubmit();
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
          type="sample-name"
          className="modal__input"
          id="sample-name"
          placeholder="Seek by name"
          required
          minLength="1"
          maxLength="30"
        />
      </label>
      <label htmlFor="sample-tag" className="modal__label">
        Seek by tag{" "}
        <input
          type="sample-tag"
          className="modal__input"
          id="sample-tag"
          placeholder="Seek by tag (warm, digital, analog, etc.)"
        />
      </label>
    </ModalWithForm>
  );
}
