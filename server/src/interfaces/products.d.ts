export interface IFormatedItems {
  categories: Array<string>;
  items: {
    id: string;
    title: string;
    condition: string;
    picture: string;
    price: {
      decimals: number;
      currency: string;
      amount: number;
    };
    free_shipping: boolean;
  };
}

export interface IFormatedItem {
  id: string;
  title: string;
  condition: string;
  picture: string;
  description?: string;
  sold_quantity: number;
  free_shipping: boolean;
  price: {
    decimals: number;
    currency: string;
    amount: number;
  };
}
