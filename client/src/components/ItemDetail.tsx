import "../styles/components/ItemDetails.scss";

const ItemDetail = () => {
  const item = {
    id: "MLA1130612038",
    title: "iPhone Se3 Generacion 2022 128gb-nuevo Caja Sellada-garantia",
    picture: "http://http2.mlstatic.com/D_873514-MLA49565385326_042022-I.jpg",
    condition: "new",
    free_shipping: true,
    sold_quantity: 0,
    price: {
      currency: "ARS",
      amount: "189.990",
      decimals: "00",
    },
    description:
      "INCLUYE CARGADOR ORGINAL APPLE USB-C\nCAJA SELLADA\nTODOS LOS COLORES\n\nSOMOS MIAMI ELECTRO\n\niPhone 13 Pro. El mayor avance en el sistema de cámaras Pro de Apple hasta ahora. Pantalla Super Retina XDR con ProMotion que brinda una respuesta más rápida y fluida. Chip A15 Bionic para un rendimiento fuera de serie. Diseño resistente y un gran salto en duración de batería.\n\nAvisos Legales\n(1) La pantalla tiene esquinas redondeadas que siguen el elegante diseño curvo del teléfono, y las esquinas se encuentran dentro de un rectángulo estándar. Si se mide en forma de rectángulo estándar, la pantalla tiene 6.06 pulgadas en diagonal. El área real de visualización es menor.\n(2) Disponible más adelante en 2021.\n(3) La duración de la batería varía según el uso y la configuración.\n(4) El iPhone 13 Pro es resistente a los derrames, a las salpicaduras y al polvo, y fue probado en condiciones de laboratorio controladas, con una clasificación IP68 según la norma IEC 60529. La resistencia a los derrames, a las salpicaduras y al polvo no es una condición permanente, y podría disminuir como consecuencia del uso normal. No intentes cargar un iPhone mojado; consulta el manual del usuario para ver las instrucciones de limpieza y secado. La garantía no cubre daños producidos por líquidos.\n(5) Algunas funcionalidades podrían no estar disponibles en todos los países o áreas.\n(6) Los accesorios se venden por separado.",
  };
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
};

export default ItemDetail;
