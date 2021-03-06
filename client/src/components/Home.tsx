import { useAppSelector } from "../hooks";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast, faClock } from "@fortawesome/free-solid-svg-icons";
import { formatCurrency } from "../utils";
import "../styles/components/Home.scss";

const Home = () => {
  const { items, isLoading } = useAppSelector((state) => state.products);

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

  if (isLoading) {
    return (
      <h3 className="loading">
        <FontAwesomeIcon icon={faClock}></FontAwesomeIcon> Loading...
      </h3>
    );
  }

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
                <p className="item-info__title">{item.title}</p>
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
