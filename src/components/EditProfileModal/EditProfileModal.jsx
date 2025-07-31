import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function ({ isOpen, onClose, onEscPress, onEditProfileClick }) {
  const { currentUser } = useContext(CurrentUserContext);
  const [updatedName, setUpdatedName] = useState(currentUser?.name);
  const [updatedAvatar, setUpdatedAvatar] = useState(currentUser?.avatar);

  const handleEdit = (e) => {
    if (e.target.id === "edit-name") {
      setUpdatedName(e.target.value);
    }
    if (e.target.id === "edit-avatar-url") {
      setUpdatedAvatar(e.target.value);
    }
  };

  return (
    <ModalWithForm
      title="Edit profile"
      buttonText="Edit"
      isOpen={isOpen}
      onClose={onClose}
      onEscPress={onEscPress}
      onEditProfileClick={onEditProfileClick}
    >
      <label htmlFor="edit-name" className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="edit-name"
          placeholder="name"
          required
          minLength="1"
          maxLength="30"
          onChange={handleEdit}
          value={updatedName}
        />
      </label>
      <label htmlFor="edit-avatar-url" className="modal__label">
        Avatar{" "}
        <input
          type="url"
          className="modal__input"
          id="edit-avatar-url"
          placeholder="image url"
          required
          minLength="1"
          onChange={handleEdit}
          value={updatedAvatar}
        />
      </label>
    </ModalWithForm>
  );
}
