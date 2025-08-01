import { Link } from "react-router-dom";

import waveformLogo from "../../assets/waveformLogo.avif";
import defaultAvatar from "../../assets/defaultAvatar.avif";
import "./Header.css";

function Header({ onRegisterClick, onLoginClick, onSeekClick, isLoggedIn }) {
  return (
    <header className="header">
      {isLoggedIn ? (
        <div className="header__container">
          <Link to="/">
            <img className="header__logo" alt="logo" src={waveformLogo} />
          </Link>
          <p className="header__title">Sample Seeker</p>
          <button onClick={onSeekClick} className="header__sound-btn">
            Seek samples
          </button>
          <Link to="/profile">
            <img src={defaultAvatar} alt="" className="header__logo" />
          </Link>
        </div>
      ) : (
        <div className="header__container">
          <Link to="/">
            <img className="header__logo" alt="logo" src={waveformLogo} />
          </Link>
          <p className="header__title">Sample Seeker</p>
          <button onClick={onLoginClick} className="header__login-btn">
            Log in
          </button>
          <button onClick={onRegisterClick} className="header__signup-btn">
            Sign up
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
