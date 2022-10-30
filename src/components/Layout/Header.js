import "./Header.css";
import logo from "../../images/logo-no-bg.png";

function Header() {
  return (
    <>
      <header className="header">
        <figure className="logo">
          <img src={logo} alt="logo-img" />
        </figure>
        
        <div class="flex">
          <label class="s">
            <input type="checkbox"/>
            <span class="s1"></span>
          </label>
            
        </div>
      </header>
    </>
  );
}

export default Header;