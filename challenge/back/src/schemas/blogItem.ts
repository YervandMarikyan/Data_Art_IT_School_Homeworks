import { Schema, model } from "mongoose";

const BlogSchemaItem = new Schema({
    id: Number,
    name: String,
    price: Number,
    description: String,
    image: String,
});

export default model("postItem", BlogSchemaItem);