import "./Header.css";
import logo from "../../images/logo-no-bg.png";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

function Header() {
  const authContext = useContext(AuthContext);

  const logoutHandler = () => {
    authContext.logout();
  };
  return (
    <header className="header">
      <figure className="logo">
        <img src={logo} alt="logo-img" />
      </figure>

      {!authContext.isLoggedIn && (
        <div className="flex">
          <label className="s">
            <input type="checkbox" />
            <span className="s1"></span>
          </label>
        </div>
      )}
      {authContext.isLoggedIn && (
        <button type="button" className="btn-logout" onClick={logoutHandler}>
          Logout
        </button>
      )}
    </header>
  );
}

export default Header;
