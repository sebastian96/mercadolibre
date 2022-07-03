import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks";
import "../styles/components/Breadcrumb.scss";

const Breadcrumb = () => {
  const { categories } = useAppSelector((state) => state.products);

  if (categories.length > 0) {
    return (
      <nav className="breadcrumbs">
        <ul className="breadcrumbs-nav">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <span>{"-"}</span>
          {categories.map((category: any, i: number) => (
            <>
              <li>
                <Link to="/">{category}</Link>
              </li>
              {i !== categories.length - 1 && <span>{"-"}</span>}
            </>
          ))}
        </ul>
      </nav>
    );
  }

  return null;
};

export default Breadcrumb;
