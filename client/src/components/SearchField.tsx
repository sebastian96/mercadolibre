import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../styles/components/Header.scss";

const SearchField = () => {
  return (
    <form className="header-box__search-bar">
      <input type="text" placeholder="Nunca dejes de buscar" />
      <button>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
};

export default SearchField;
