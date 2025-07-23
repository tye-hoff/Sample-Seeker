import { Link } from "react-router-dom";
import waveformLogo from "../../assets/waveformLogo.avif";
import profileLogo from "../../assets/musicAvatar.avif";
// import exploreSoundBtn from "../../assets/addSoundBtn.avif";
// import { useContext } from "react";
import "./Header.css";
function Header({ onRegisterClick, onLoginClick, onSeekClick }) {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img className="header__logo" alt="logo" src={waveformLogo} />
          <p className="header__title">Sample Seeker</p>
        </Link>

        <button onClick={onSeekClick} className="header__sound-btn">
          Seek samples
        </button>
        <button onClick={onLoginClick} className="header__login-btn">
          Log in
        </button>
        <button onClick={onRegisterClick} className="header__signup-btn">
          Sign up
        </button>
        <Link to="/profile">
          <img src={profileLogo} alt="" className="header__logo" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
