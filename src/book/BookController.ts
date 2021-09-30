import { Router, Request } from "express";
import { autoInjectable } from "tsyringe";
import BookService from "./BookService";

@autoInjectable()
export default class BookController {
  bookService: BookService;
  router: Router;

  constructor(bookService: BookService) {
    this.bookService = bookService;
    this.router = new Router();
  }

  getBookRoute() {
    return this.bookService.getBooks();
  }

  getBookByIdRoute(id: number) {
    return this.bookService.getBookById(id);
  }

  routes() {
    this.router.get("/", (req: Request, res:Request) => res.send(this.getBookRoute()));
    this.router.get("/:id", (req: Request, res:Request) => {
      const { id } = req.params;
      res.send(this.getBookByIdRoute(id));
    });

    return this.router;
  }
}
