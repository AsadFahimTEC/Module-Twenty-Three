import express, { type Application } from "express";
import { PostRouter } from "./modules/post/post.router";
import { getRouter } from "./modules/get/get.router";

const app: Application = express();

app.use(express.json());

app.use("/posts", PostRouter);
app.use("/posts", getRouter);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

export default app;