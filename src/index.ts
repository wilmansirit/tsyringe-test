import "reflect-metadata";
import express from "express";

import { container } from "tsyringe";

import BookController from "./book/BookController";

const port = 5000;

const app = express();

app.use("/books", container.resolve(BookController).routes());
app.listen(port, () => console.log(`Listening on port ${port}`));
