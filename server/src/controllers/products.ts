import { Request, Response } from "express";
import { IFormatedItems, IFormatedItem } from "interfaces/products";
import { formatItems, formatItem } from "../helpers/formatItems";
import axios from "axios";
const apiRoute = "https://api.mercadolibre.com/";

export const getItemsByQuery = async (req: Request, res: Response) => {
  try {
    const { q } = req.query;
    let products: Array<IFormatedItems> = [];
    const response = await axios.get(`${apiRoute}/sites/MLA/search`, {
      params: { q },
    });

    for (let i = 0; i <= 3; i++) {
      let randomProduct =
        response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ];
      products.push(randomProduct);
    }

    const getNameCategory = async (products: Array<any>) => {
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

    const items = {
      author: {
        name: "Sebastian",
        lastname: "Miranda",
      },
      categories: await getNameCategory(products),
      items: formatItems(products),
    };

    res.send(items);
  } catch (error) {
    res.status(500).send("Error");
  }
};

export const getItemById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const apiItem = await axios.get(`${apiRoute}/items/${id}`);
    const description = await axios.get(`${apiRoute}/items/${id}/description`);
    const formatedItem: IFormatedItem = formatItem(apiItem.data);

    formatedItem.description = description.data.plain_text;

    const item = {
      author: {
        name: "Sebastian",
        lastname: "Miranda",
      },
      item: formatedItem,
    };

    res.send(item);
  } catch (error) {
    res.status(500).send("Error");
  }
};
