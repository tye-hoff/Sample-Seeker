// IMPORTS: ->

// REACT & STYLING
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// COMPONENTS
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import SeekSampleModal from "../seekSampleModal/SeekSampleModal";

// CONSTANTS & API
// import { registerUser } from "../../utils/Auth";
import {
  getSoundListData,
  getSampleInstanceData,
  processSampleResults,
  processSampleData,
} from "../../utils/FreeSoundApi";

// CONTEXT
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [sample, setSample] = useState();

  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [samplesList, setSamplesList] = useState([]);

  useEffect(() => {
    getSoundListData()
      .then((results) => {
        setSamplesList(results.results.slice(0, 6));
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getSampleInstanceData(70670)
      .then((res) => {
        setSample(res);
      })
      .catch(console.error);
  });

  const handleRegisterModalSubmit = ({ name, avatar, email, password }) => {
    return registerUser({ name, avatar, email, password })
      .then((res) => {
        setCurrentUser(res.userObject);
        setIsLoggedIn(true);
        localStorage.setItem("jwt", res.token);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleEscPress = (event) => {
    if (event.key === "Escape") {
      closeActiveModal("");
    }
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleSeekClick = () => {
    setActiveModal("seek-sample");
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
          <Header
            onRegisterClick={handleRegisterClick}
            onLoginClick={handleLoginClick}
            onSeekClick={handleSeekClick}
          />

          <Routes>
            <Route
              path="/"
              element={
                <Main
                  isOpen={activeModal === "seek-sample"}
                  onSeekClick={handleSeekClick}
                  samplesList={samplesList}
                  sample={sample}
                />
              }
            />
          </Routes>

          <Footer />
        </div>
        <RegisterModal
          isOpen={activeModal === "register-user"}
          onClose={closeActiveModal}
          onRegisterClick={handleRegisterClick}
          onRegisterModalSubmit={handleRegisterModalSubmit}
          onRedirect={handleLoginClick}
          onEscPress={handleEscPress}
        />
        <LoginModal
          isOpen={activeModal === "login-user"}
          onClose={closeActiveModal}
          onLoginClick={handleLoginClick}
          onRedirect={handleRegisterClick}
          onEscPress={handleEscPress}
        />
        <EditProfileModal
          isOpen={activeModal === "edit-profile"}
          onClose={closeActiveModal}
          onEditProfileClick={handleEditProfileClick}
          onEscPress={handleEscPress}
        />
        <SeekSampleModal
          isOpen={activeModal === "seek-sample"}
          onClose={closeActiveModal}
          onSeekClick={handleSeekClick}
          // onSeekSubmit={handleSeekSubmit}
          onEscPress={handleEscPress}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
