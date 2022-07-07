import { useLayoutEffect, useState, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../hooks";
import "../styles/components/Breadcrumb.scss";

const Breadcrumb = () => {
  const location = useLocation();
  const { categories, items, isLoading } = useAppSelector(
    (state) => state.products
  );
  const [showBreadCrumb, setShowBreadcrumb] = useState(true);

  useLayoutEffect(() => {
    const { pathname } = location;
    if (pathname === "/" && items.length === 0) {
      setShowBreadcrumb(false);
    } else if (pathname === "/error") {
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
          {!isLoading &&
            categories.map((category: any, i: number) => (
              <Fragment key={i}>
                <li>
                  <Link to="/">{category}</Link>
                </li>
                {i !== categories.length - 1 && <span>{"-"}</span>}
              </Fragment>
            ))}
        </ul>
      </nav>
    );
  }

  return null;
};

export default Breadcrumb;
