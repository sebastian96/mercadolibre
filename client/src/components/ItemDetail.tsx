import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchItem } from "../reducers/product";
import "../styles/components/ItemDetails.scss";

const ItemDetail = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { item }: any = useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchItem(id ? id : ""));
  }, [dispatch, id]);

  if (Object.keys(item).length > 0) {
    return (
      <div className="item-detail">
        <img className="item-detail__picture" src={item.picture} alt="" />
        <div className="item-detail__info">
          <p>{`${item.condition} - ${item.sold_quantity} vendidos`}</p>
          <h3>{item.title}</h3>
          <h2 className="item-detail__price">
            {`$ ${item.price.amount}`}
            <small>{item.price.decimals}</small>
          </h2>
          <button>Comprar</button>
        </div>

        <div className="item-detail__description">
          <h3>Descripción del producto</h3>
          <p>{item.description}</p>
        </div>
      </div>
    );
  }

  return null;
};

export default ItemDetail;
