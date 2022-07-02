import "../styles/components/Items.scss";

const Items = () => {
  const items = [
    {
      id: "MLA1132423520",
      title: "iPhone SE (2nd Generación) 128 Gb - Negro",
      picture: "http://http2.mlstatic.com/D_783252-MLA45720346023_042021-I.jpg",
      condition: "new",
      free_shipping: true,
      price: {
        currency: "ARS",
        amount: 279990,
        decimals: 0,
      },
    },
    {
      id: "MLA1132423520",
      title: "Apple iPhone 13 Pro 128gb-incluye Cargador-todos Los Colores",
      picture: "http://http2.mlstatic.com/D_753104-MLA47778455981_102021-O.jpg",
      condition: "new",
      free_shipping: true,
      price: {
        currency: "ARS",
        amount: 279990,
        decimals: 0,
      },
    },
  ];
  return (
    <div className="search-result">
      {items.map((item) => (
        <div className="item" key={item.id}>
          <img className="item-picture" src={item.picture} alt="" />
          <div className="item-info">
            <h2 className="item-info__price">{`$ ${item.price.amount}`}</h2>
            <p className="item-info__description">{item.title}</p>
          </div>
          <div className="item-action">
            <button>Action</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
