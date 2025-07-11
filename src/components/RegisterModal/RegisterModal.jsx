import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function RegisterModal({ isOpen, onClose, onRegisterClick }) {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = (e) => {
    if (e.target.id === "register-name") {
      setName(e.target.value);
    }
    if (e.target.id === "register-avatar-url") {
      setAvatar(e.target.value);
    }
    if (e.target.id === "register-email") {
      setEmail(e.target.value);
    }
    if (e.target.id === "register-password") {
      setPassword(e.target.value);
    }
  };

  return (
    <ModalWithForm>
      <label htmlFor="register-name" className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="register-name"
          placeholder="Your Name"
          required
          minLength="1"
          maxLength="30"
          onChange={handleRegistration}
          value={name}
        />
      </label>
      <label htmlFor="register-avatar-url" className="modal__label">
        Avatar{" "}
        <input
          type="url"
          className="modal__input"
          id="register-avatar-url"
          placeholder="Your avatar"
          required
          minLength="1"
          onChange={handleRegistration}
          value={avatar}
        />
      </label>
      <label htmlFor="register-email" className="modal__label">
        Email{" "}
        <input
          type="email"
          className="modal__input"
          id="register-email"
          placeholder="Email"
          required
          minLength="1"
          maxLength="30"
          onChange={handleRegistration}
          value={email}
        />
      </label>
      <label htmlFor="register-password" className="modal__label">
        Password{" "}
        <input
          type="password"
          className="modal__input"
          id="register-password"
          placeholder="Password"
          required
          onChange={handleRegistration}
          value={password}
        />
      </label>
    </ModalWithForm>
  );
}
