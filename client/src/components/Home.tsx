import { useAppSelector } from "../hooks";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { formatCurrency } from "../utils";

import "../styles/components/Home.scss";
import "../styles/components/Items.scss";

const Home = () => {
  const { items } = useAppSelector((state) => state.products);

  const freeShipping = (free_shipping: boolean) => {
    if (free_shipping) {
      return (
        <small>
          <FontAwesomeIcon icon={faTruckFast}></FontAwesomeIcon>
        </small>
      );
    }

    return null;
  };

  if (items.length > 0) {
    return (
      <div className="search-result">
        {items.map((item: any) => (
          <Link to={`/${item.id}`} key={`${item.title}-${item.id}`}>
            <div className="item">
              <img className="item-picture" src={item.picture} alt="" />
              <div className="item-info">
                <h2 className="item-info__price">
                  {formatCurrency(item.price.amount)}{" "}
                  {freeShipping(item.free_shipping)}
                </h2>
                <p className="item-info__description">{item.title}</p>
              </div>
              <div className="item-city">
                <p>{item.city}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }

  return null;
};

export default Home;
