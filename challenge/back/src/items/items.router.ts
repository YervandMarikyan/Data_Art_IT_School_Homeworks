/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import * as ItemService from "./items.service";
import { BaseItem, Item } from "./item.interface";

/**
 * Router Definition
 */

export const itemsRouter = express.Router();

/**
 * Controller Definitions
 */

// GET items

itemsRouter.get("/", async (req: Request, res: Response) => {
    try {
      const items: Item[] | undefined = await ItemService.findAll();
      res.status(200).send(items);
    } catch (e) {
        // @ts-ignore
      res.status(500).send(e.message);
    }
  });

// GET items/:id

itemsRouter.get("/:id", async (req: Request, res: Response) => {
  //const id: number = parseInt(req.params.id, 10);
  const id: number = 1689332724824; //Added
  
  try {
    const item: Item | null = await ItemService.find(id);
    if (item) {
      return res.status(200).send(item);
    }

    res.status(404).send("item not found");
  } catch (e) {
      // @ts-ignore
    res.status(500).send(e.message);
  }
});

// POST items

itemsRouter.post("/", async (req: Request, res: Response) => {
  try {
    const item: BaseItem = req.body;

    const item1: BaseItem = {
      name: "Burger",
      price: 100599,
      description: "Tasty",
      image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
    };

    const newItem = await ItemService.create(item1);
    res.status(201).json(newItem);
  } catch (e) {
      // @ts-ignore
    res.status(500).send(e.message);
  }
});

// PUT items/:id

itemsRouter.put("/:id", async (req: Request, res: Response) => {
  //const id: number = parseInt(req.params.id, 10);
  const id: number = 1689332724824;
  try {
    const itemUpdate: Item = req.body;

    const itemUpdate1 = {
      id: 1,
      name: "new name1",
      price: 122222,
      description: "New desc11",
      image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
    };

    const existingItem: Item | null = await ItemService.find(id);

    if (existingItem) {
      const updatedItem = await ItemService.update(id, itemUpdate1);
      return res.status(200).json(updatedItem);
    }

    const newItem = await ItemService.create(itemUpdate);
    res.status(201).json(newItem);
    // @ts-ignore
  } catch (e: Error) {
    res.status(500).send(e.message);
  }
});

// DELETE items/:id

itemsRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    //const id: number = parseInt(req.params.id, 10);
    const id: number = 1689253038661;
    await ItemService.remove(id);

    res.sendStatus(204);
    // @ts-ignore
  } catch (e: Error) {
    res.status(500).send(e.message);
  }
});