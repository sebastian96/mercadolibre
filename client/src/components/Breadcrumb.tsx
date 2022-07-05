import { useLayoutEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../hooks";
import "../styles/components/Breadcrumb.scss";

const Breadcrumb = () => {
  const location = useLocation();
  const { categories, items } = useAppSelector((state) => state.products);
  const [showBreadCrumb, setShowBreadcrumb] = useState(true);

  useLayoutEffect(() => {
    if (location.pathname === "/" && items.length === 0) {
      setShowBreadcrumb(false);
    } else {
      setShowBreadcrumb(true);
    }
  }, [location, items]);

  if (categories.length > 0 && showBreadCrumb) {
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
