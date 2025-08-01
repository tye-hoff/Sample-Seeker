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
import ProtectedRoute from "../../ProtectedRoute";

// CONSTANTS & API
import { BASE_URL, CLIENT_ID } from "../../utils/constants";
import {
  getSoundListData,
  getSearchResults,
  postSample,
  checkResponse,
} from "../../utils/FreeSoundApi";

// CONTEXT
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [samplesList, setSamplesList] = useState([]);
  const [mainHeader, setMainHeader] = useState("Our most recent samples:");

  useEffect(() => {
    if (localStorage.getItem("access token")) {
      return setIsLoggedIn(true);
    }

    const searchParamsObj = new URLSearchParams(location.search);
    for (const [key, value] of searchParamsObj) {
      const client_id = "SOmNWsRRmNrl67WsoLRt";
      const client_secret = "MaFoIgSXeUpXNsLkJWOo6EsvpxSN5owEB1D0VEPB";
      const code = value;
      if (key === "code") {
        const body = new URLSearchParams({
          client_id,
          client_secret,
          code,
          grant_type: "authorization_code",
        });
        localStorage.setItem("Code", value);
        setIsLoggedIn(true);
        fetch(
          `${BASE_URL}/oauth2/access_token/`, //
          {
            method: "POST",
            body,
          }
        )
          .then(checkResponse)
          .then((data) => {
            console.log(data);
            localStorage.setItem("access token", data.access_token);
            localStorage.setItem("expiresIn", "date");
          })
          .catch(console.error);
      }
    }
  }, []);

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

  const handleLogin = () => {
    const redirectUrl = "http://localhost:3000/";
    const STATE = "";
    const authUrl = `https://freesound.org/apiv2/oauth2/authorize/?client_id=${CLIENT_ID}&response_type=code&state=${STATE}redirect_uri=${redirectUrl}`;
    window.location.href = authUrl;
  };

  const handleLoginModalSubmit = () => {
    handleLogin();
    setCurrentUser(true);
  };

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
    localStorage.removeItem("access token");
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
            <Route path="/callback" Component={handleLoginModalSubmit} />
            <Route
              path="/"
              element={
                <Main
                  samplesList={samplesList}
                  mainHeader={mainHeader}
                  isLoggedIn={isLoggedIn}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Profile
                    onEditProfileClick={handleEditProfileClick}
                    onLogoutClick={handleLogoutClick}
                    samplesList={samplesList}
                    onAddSampleClick={handleAddSampleClick}
                    mainHeader={mainHeader}
                  />
                </ProtectedRoute>
              }
            />
          </Routes>

          <Footer />
        </div>
        <RegisterModal
          isOpen={activeModal === "register-user"}
          onClose={closeActiveModal}
          onRegisterClick={handleRegisterClick}
          onLoginModalSubmit={handleLoginModalSubmit}
          onRedirect={handleLoginClick}
        />
        <LoginModal
          isOpen={activeModal === "login-user"}
          onClose={closeActiveModal}
          onLoginClick={handleLoginClick}
          onRedirect={handleRegisterClick}
          onLoginModalSubmit={handleLoginModalSubmit}
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
