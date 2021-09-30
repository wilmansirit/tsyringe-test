import IBookRepository from "../interfaces/IBookRepository";

export default class BooksRepository implements IBookRepository {
  
  books = [
    { id: 1, name: "The Pragmatic Programmer" },
    { id: 2, name: "Poems that solve Puzzles" }
  ]
  
  getBook() {
    return this.books;
  }
  getBookById(id: number) {
    return this.books[id]
  }
}