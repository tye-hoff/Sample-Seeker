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
import {
  processSampleResults,
  postSound,
  getSampleInstanceAudio,
  getSampleInstanceData,
  getSoundListData,
  getSoundListSound,
  processSampleData,
} from "../../utils/FreeSoundApi";

// CONTEXT
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [samples, setSamples] = useState();
  const [samplesList, setSamplesList] = useState([]);
  const [listAudio, setListAudio] = useState([]);
  // const [sampleAudio, setSampleAudio] = useState();

  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    getSampleInstanceAudio()
      .then((res) => {
        const processedSampleAudio = processSampleData(res);
        setSamples(processedSampleAudio);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getSampleInstanceData()
      .then((res) => {
        const processedData = processSampleData(res);
        setSamples(processedData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getSoundListData()
      .then((results) => {
        setSamplesList(results.results);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getSoundListSound()
      .then((res) => {
        console.log(res);
        const processedSoundList = processSampleData(res);
        setListAudio(processedSoundList);
      })
      .catch(console.error);
  }, []);

  const handleSeekSubmit = () => {
    return postSound()
      .then((data) => {
        const processedSearchResults = processSampleResults(data);
        setSamples([processedSearchResults]);
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
                  samples={samples}
                  listAudio={listAudio}
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
          onSeekSubmit={handleSeekSubmit}
          onEscPress={handleEscPress}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
