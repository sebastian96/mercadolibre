import { Link } from "react-router-dom";
import SearchField from "./SearchField";
import "../styles/components/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-box">
          <Link to="/">
            <img
              className="header-box__logo"
              src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.0/mercadolibre/logo__large_plus.png"
              alt="logo"
            />
          </Link>
          <SearchField />
        </div>
      </div>
    </header>
  );
};

export default Header;
