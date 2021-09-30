import IBook from "./IBook";

export default interface IBookRepository {
  books: Array<IBook>;

  getBook(): IBook[];

  getBookById(id: number): IBook;
}


