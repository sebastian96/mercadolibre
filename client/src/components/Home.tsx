import { useAppSelector } from "../hooks";
import { Link } from "react-router-dom";
import { formatCurrency } from "../utils";

import "../styles/components/Home.scss";
import "../styles/components/Items.scss";

const Home = () => {
  const { items } = useAppSelector((state) => state.products);

  if (items.length > 0) {
    return (
      <div className="search-result">
        {items.map((item: any) => (
          <Link to={`/${item.id}`}>
            <div className="item" key={`${item.title}-${item.id}`}>
              <img className="item-picture" src={item.picture} alt="" />
              <div className="item-info">
                <h2 className="item-info__price">
                  {formatCurrency(item.price.amount)}
                </h2>
                <p className="item-info__description">{item.title}</p>
              </div>
              <div className="item-action">
                <button>Action</button>
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
