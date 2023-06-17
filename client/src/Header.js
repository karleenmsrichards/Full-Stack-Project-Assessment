import "./Header.css";
import logoIcon from "./play.png";

export const Header = () => {
  return (
    <header>
      <div className="header-wrapper">
        <div className="header-left-wrapper">
          <div className="header-logo-icon-wrapper">
            <a href="/" className="header-logo-text">
              LeeTube
            </a>
            <img src={logoIcon} className="header-logo-icon" alt="logo" />
          </div>
        </div>
        <ul className="header-right-wrapper">
          <li>Home</li>
          <li>Stream/Buy</li>
          <li>Coming Soon</li>
          <li>Catalog</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
};
