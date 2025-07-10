import "./ModalWithForm.css";

function ModalWithForm({ isOpen, onClose }) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">modal</h2>
        <button onClick={onClose} type="button" className="modal__close" />
        <form className="modal__form">
          {/* {children}
          <div className="modal__btn-container">
            <button type="submit" className="modal__submit">
              {buttonText}
            </button>

            {hasSecondButton && (
              <button
                type="button"
                className="modal__redirect"
                onClick={registrationRedirect || loginRedirect}
              >
                {buttonText2}
              </button>
            )}
          </div> */}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;

{
  /* <form onSubmit={onSubmit} className="modal__form"></form> */
}
