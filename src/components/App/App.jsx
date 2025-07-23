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
import Profile from "../Profile/Profile";

// CONSTANTS & API
import { getSoundListData, getSearchResults } from "../../utils/FreeSoundApi";

// CONTEXT
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [samplesList, setSamplesList] = useState([]);
  const [header, setHeader] = useState("Our most recent sounds:");

  useEffect(() => {
    getSoundListData()
      .then((res) => {
        setSamplesList(res.results.slice(0, 6));
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleEscPress);
  }, []);

  const handleSearchModalSubmit = (searchTag) => {
    console.log("click");
    getSearchResults(searchTag)
      .then((res) => {
        setSamplesList(res.results.slice(0, 6));
        setHeader("Your search results:");
      })
      .catch(console.error);
  };

  const handleEscPress = (event) => {
    if (event.key === "Escape") {
      setActiveModal("");
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

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    setCurrentUser(false);
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
              element={<Main samplesList={samplesList} header={header} />}
            />
            <Route
              path="/profile"
              element={
                <Profile
                  onEditProfileClick={handleEditProfileClick}
                  onLogoutClick={handleLogoutClick}
                  samplesList={samplesList}
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
          onEscPress={handleEscPress}
          onSearchModalSubmit={handleSearchModalSubmit}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
