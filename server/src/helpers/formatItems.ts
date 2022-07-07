export const formatItems = (products: any) => {
  let items: Array<Object> = [];
  for (const product of products) {
    items.push({
      id: product.id,
      title: product.title,
      picture: product.thumbnail,
      condition: product.condition,
      free_shipping: product.shipping.free_shipping,
      city: product.address.city_name,
      price: {
        currency: product.currency_id,
        amount: product.price,
        decimals: 0.0,
      },
    });
  }
  return items;
};

export const formatItem = (product: any) => {
  return {
    id: product.id,
    title: product.title,
    picture: product.thumbnail,
    condition: product.condition,
    free_shipping: product.shipping.free_shipping,
    sold_quantity: product.sold_quantity,
    price: {
      currency: product.currency_id,
      amount: product.price,
      decimals: 0.0,
    },
  };
};
