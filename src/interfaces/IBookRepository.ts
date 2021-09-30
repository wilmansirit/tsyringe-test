export default interface IBookRepository {
  books: Array<Books>;

  getBook(): Books[];

  getBookById(id: number): Books;
}

interface Books {
  id: number;
  name: string;
}
