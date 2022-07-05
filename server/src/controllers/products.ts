import { Request, Response } from "express";
import { IFormatedItems, IFormatedItem } from "interfaces/products";
import { formatItems, formatItem } from "../helpers/formatItems";
import { getNameCategory } from "../helpers/nameCategory";
import axios from "axios";
const apiRoute = "https://api.mercadolibre.com/";

/**
 * Function for get the data about the query send in the params and format to response
 * @param req.query q: string, world to consume api ML, eg. "Iphone"
 * @param res json: data, eg. {{author: {}, category: [], items: {}}}
 */
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

    const items = {
      author: {
        name: "Sebastian",
        lastname: "Miranda",
      },
      categories: await getNameCategory(products, apiRoute),
      items: formatItems(products),
    };

    res.status(200).json(items);
  } catch (error) {
    res.status(400).send("error");
  }
};

/**
 * Function for get the data about the {id} send in the params and format to response
 * @param req.params id: string: id related to any product, eg. "MLA907539210"
 * @param res json: data, eg. {{author: {}, category: [], item: {}}}
 */
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
      category: await getNameCategory([apiItem.data], apiRoute),
    };

    res.status(200).json(item);
  } catch (error) {
    res.status(400).send("error");
  }
};
