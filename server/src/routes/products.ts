import { getItemsByQuery, getItemById } from "../controllers/products";
import { Router } from "express";

const router = Router();

router.get("/:items", getItemsByQuery);
router.get("/items/:id", getItemById);

export default router;
