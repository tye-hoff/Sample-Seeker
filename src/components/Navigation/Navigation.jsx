import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="nav__link">
      <Link to="/">
        <img className="header__logo" alt="logo" src={logo} />
      </Link>
    </div>
  );
}

export default Navigation;
