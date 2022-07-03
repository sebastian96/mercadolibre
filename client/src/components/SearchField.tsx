import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { fetchItems } from "../reducers/producst";
import { useAppDispatch } from "../hooks";
import "../styles/components/Header.scss";

const SearchField = () => {
  const dispatch = useAppDispatch();

  const searchProducts = async (e: any) => {
    e.preventDefault();
    const search = document.querySelector("#search") as HTMLInputElement | null;
    if (search) {
      await dispatch(fetchItems(search.value));
      search.value = "";
    }
  };

  return (
    <form className="header-box__search-bar" onSubmit={searchProducts}>
      <input
        type="text"
        placeholder="Nunca dejes de buscar"
        id="search"
        autoComplete="off"
      />
      <button>
        <FontAwesomeIcon icon={faMagnifyingGlass} type="submit" />
      </button>
    </form>
  );
};

export default SearchField;
