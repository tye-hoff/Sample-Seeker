import { Link } from "react-router-dom";
// import { useContext } from "react";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <p className="header__title">Sup Foo</p>
        <Link to="/">
          <img src="" alt="" className="header__logo" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
