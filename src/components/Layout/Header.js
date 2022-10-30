import "./Header.css";
import logo from "../../images/logo-no-bg.png";

function Header() {
  return (
    <>
      <header className="header">
        <figure className="logo">
          <img src={logo} alt="logo-img" />
        </figure>
      </header>
    </>
  );
}

export default Header;
