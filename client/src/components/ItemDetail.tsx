import { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchItem, setItem } from "../reducers/product";
import "../styles/components/ItemDetail.scss";
import { formatCurrency } from "../utils";

const ItemDetail = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { item }: any = useAppSelector((state) => state.product);

  const getDataItem = async () => {
    await dispatch(fetchItem(id ? id : ""));
  };

  useLayoutEffect(() => {
    if (Object.keys(item).length > 0) {
      dispatch(setItem({}));
    }
    getDataItem();
  }, [dispatch, id]);

  if (Object.keys(item).length > 0) {
    return (
      <div className="item-detail" key={item.id}>
        <img className="item-detail__picture" src={item.picture} alt="" />
        <div className="item-detail__info">
          <small>{`${item.condition} - ${item.sold_quantity} vendidos`}</small>
          <h3>{item.title}</h3>
          <h2 className="item-detail__price">
            {formatCurrency(item.price.amount)}
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
