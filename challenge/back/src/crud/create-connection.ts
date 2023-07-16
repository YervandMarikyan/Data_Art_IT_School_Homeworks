import mongoose from "mongoose";
import Blog from "../schemas/blogBaseItem";

const db = mongoose.connect("mongodb://127.0.0.1:27017/menu_crud").
    then(() => console.log("db Connected"));

Blog.createCollection().then(function (collection) {
    console.log("Collection is created!");
    process.exit(0);
})