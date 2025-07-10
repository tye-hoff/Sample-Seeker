import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// COMPONENTS
import Header from "../Header/Header";
import Main from "../Main/Main";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";

// CONTEXT
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleRegisterClick = () => {
    setActiveModal("register-user");
  };

  const handleLoginClick = () => {
    setActiveModal("login-user");
  };

  const handleEditProfileClick = () => {
    setActiveModal("edit-profile");
  };

  return (
    <CurrentUserContext.Provider value={{ currentUser, isLoggedIn }}>
      <div className="page">
        <div className="page__content">
          <Header></Header>
          <Routes>
            <Route path="/" element={<Main></Main>} />
          </Routes>
        </div>
        <RegisterModal
          isOpen={activeModal === "register-user"}
          onClose={closeActiveModal}
          onRegisterClick={handleRegisterClick}
        />
        <LoginModal
          isOpen={activeModal === "register-user"}
          onClose={closeActiveModal}
          onLoginClick={handleLoginClick}
        />
        <EditProfileModal
          isOpen={activeModal === "edit-profile"}
          onClose={closeActiveModal}
          onEditProfileClick={handleEditProfileClick}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
