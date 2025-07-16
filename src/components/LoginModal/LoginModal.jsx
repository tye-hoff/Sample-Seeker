import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function LoginModal({
  isOpen,
  onClose,
  onLoginClick,
  onRedirect,
  onEscPress,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const registerRedirect = () => {
    onRedirect();
  };

  return (
    <ModalWithForm
      buttonText="Log in"
      buttonText2="or sign up"
      title="Log in"
      isOpen={isOpen}
      onClose={onClose}
      onEscPress={onEscPress}
      registerRedirect={registerRedirect}
      onLoginClick={onLoginClick}
    >
      <label htmlFor="email" className="modal__label">
        Email{" "}
        <input
          type="email"
          className="modal__input"
          id="email"
          placeholder="Email"
          required
          minLength="1"
          maxLength="30"
          onChange={handleEmailChange}
          value={email}
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password{" "}
        <input
          type="password"
          className="modal__input"
          id="password"
          placeholder="Password"
          required
          onChange={handlePasswordChange}
          value={password}
        />
      </label>
    </ModalWithForm>
  );
}
