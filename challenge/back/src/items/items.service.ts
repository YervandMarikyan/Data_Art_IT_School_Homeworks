/**
 * Data Model Interfaces
 */

import { BaseItem, Item } from "./item.interface";
import { Items } from "./items.interface";
import mongoose from "mongoose";
import Blog from "../schemas/blogItem";

const connectionCreate = async (id: number, newItem: BaseItem) => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/menu_crud");
    const article = new Blog({
      id: id,
      name: newItem.name,
      price: newItem.price,
      description: newItem.description,
      image: newItem.image
    });

    await article.save();
    return article;
  } catch (e) {
    // @ts-ignore
    console.log(e.message);
    // @ts-ignore
    return e.message;
  }
};

const connectionGetAll = async (): Promise<Item[] | undefined>  => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/menu_crud");
    return await Blog.find({});
  } catch (e) {
    // @ts-ignore
    console.log(e.message);
  }
};

const connectionGetOne = async (id: number): Promise<Item | null> => {
	try {
		await mongoose.connect('mongodb://127.0.0.1:27017/menu_crud');
    return await Blog.findOne({ id: id });
} catch (e) {
    // @ts-ignore
		console.log( e.message );
    // @ts-ignore
    return e.message;
	}
};

const connectionPutOne = async (id: number, itemUpdate: BaseItem) => {
  console.log("from service put");
	try {
		await mongoose.connect('mongodb://127.0.0.1:27017/menu_crud');

		const articles = await Blog.updateOne({
			id: id
		}, {
			name: itemUpdate.name,
      price: itemUpdate.price,
      description: itemUpdate.description
		});
    console.log("111");
		console.log( articles );
    console.log("222");
	} catch (e) {
    // @ts-ignore
		console.log( e.message );
	}
};

const connectionDeleteOne = async (id: number) => {
	try {
		await mongoose.connect('mongodb://127.0.0.1:27017/menu_crud');
		const articles = await Blog.deleteOne({ id: id });
		console.log( "Article deleted successfully." );
	} catch (e) {
    // @ts-ignore
		console.log( e.message );
	}
};

/**
 * In-Memory Store
 */

/**
 * Service Methods
 */

export const findAll = async (): Promise<Item[] | undefined> => connectionGetAll();

export const find = async (id: number): Promise<Item | null> => connectionGetOne(id);

export const create = async (newItem: BaseItem): Promise<Item> => {
  const id = new Date().valueOf();
  const item = connectionCreate(id, newItem);
  return item;
};

export const update = async (
  id: number,
  itemUpdate: BaseItem
): Promise<Item | null> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  connectionPutOne(id, itemUpdate);
  return await find(id);
};

export const remove = async (id: number): Promise<null | void> => {
  const item = await find(id);
  if (!item) {
    return null;
  }
  connectionDeleteOne(id);
};