import axios from "axios";

export const getNameCategory = async (
  products: Array<any>,
  apiRoute: string
) => {
  let categories: Array<string> = [];
  for await (const product of products) {
    const response = await axios.get(
      `${apiRoute}/categories/${product.category_id}`
    );

    if (!categories.includes(response.data.name)) {
      categories.push(response.data.name);
    }
  }
  return categories;
};
