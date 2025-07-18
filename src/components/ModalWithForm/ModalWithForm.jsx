import "./ModalWithForm.css";

function ModalWithForm({
  isOpen,
  onClose,
  onSubmit,
  buttonText,
  buttonText2,
  hasSecondButton,
  loginRedirect,
  registerRedirect,
  children,
  title,
  onEscPress,
}) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close" />
        <form
          onEscPress={onEscPress}
          onSubmit={onSubmit}
          className="modal__form"
        >
          {children}
          <div className="modal__btn-container">
            <button type="submit" className="modal__submit">
              {buttonText}
            </button>
            {hasSecondButton && (
              <button
                type="button"
                className="modal__redirect"
                onClick={registerRedirect || loginRedirect}
              >
                {buttonText2}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;

{
  /* <form onSubmit={onSubmit} className="modal__form"></form> */
}
