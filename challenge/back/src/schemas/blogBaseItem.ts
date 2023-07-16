import { Schema, model } from "mongoose";
//import { Item, BaseItem } from "../items/item.interface";

const BlogSchemaBaseItem = new Schema({
    name: String,
    price: Number,
    description: String,
    image: String,
});

export default model("postBaseItem", BlogSchemaBaseItem);