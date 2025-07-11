import { Link } from "react-router-dom";
import waveformLogo from "../../assets/waveformLogo.avif";
import profileLogo from "../../assets/musicAvatar.avif";
// import exploreSoundBtn from "../../assets/addSoundBtn.avif";
// import { useContext } from "react";
import "./Header.css";
function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img className="header__logo" alt="logo" src={waveformLogo} />
        </Link>
        <p className="header__title">Sample Seeker</p>

        <button className="header__sound-btn">Seek samples</button>
        <button className="header__login-btn">Log in</button>
        <button className="header__signup-btn">Sign up</button>
        <Link to="/">
          <img src={profileLogo} alt="" className="header__logo" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
