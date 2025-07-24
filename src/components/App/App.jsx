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
import AddSampleModal from "../AddSampleModal/AddSampleModal";
import Profile from "../Profile/Profile";

// CONSTANTS & API
import {
  getSoundListData,
  getSearchResults,
  postSample,
} from "../../utils/FreeSoundApi";

// CONTEXT
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [activeModal, setActiveModal] = useState("");
  const [upload, setUpload] = useState();
  const [samplesList, setSamplesList] = useState([]);

  const [mainHeader, setMainHeader] = useState("Our most recent samples:");

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
        setMainHeader("Your search results:");
      })
      .catch(console.error);
  };

  const handleAddSampleSubmit = (bst_category, tags, description, license) => {
    return postSample(bst_category, tags, description, license)
      .then((newUpload) => {
        setUpload(newUpload);
        closeActiveModal();
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

  const handleAddSampleClick = () => {
    setActiveModal("post-sample");
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
            isLoggedIn={isLoggedIn}
          />

          <Routes>
            <Route
              path="/"
              element={
                <Main samplesList={samplesList} mainHeader={mainHeader} />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  onEditProfileClick={handleEditProfileClick}
                  onLogoutClick={handleLogoutClick}
                  samplesList={samplesList}
                  onAddSampleClick={handleAddSampleClick}
                  mainHeader={mainHeader}
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
        />
        <LoginModal
          isOpen={activeModal === "login-user"}
          onClose={closeActiveModal}
          onLoginClick={handleLoginClick}
          onRedirect={handleRegisterClick}
        />
        <EditProfileModal
          isOpen={activeModal === "edit-profile"}
          onClose={closeActiveModal}
          onEditProfileClick={handleEditProfileClick}
        />
        <SeekSampleModal
          isOpen={activeModal === "seek-sample"}
          onClose={closeActiveModal}
          onSeekClick={handleSeekClick}
          onSearchModalSubmit={handleSearchModalSubmit}
        />
        <AddSampleModal
          isOpen={activeModal === "post-sample"}
          onClose={closeActiveModal}
          onAddSampleClick={handleAddSampleClick}
          onAddSampleSubmit={handleAddSampleSubmit}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
