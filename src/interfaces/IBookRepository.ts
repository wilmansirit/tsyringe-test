interface Books  {
    id: number;
    name: string;
  }
  

export default interface IBookRepository {
  books: Array<Books>;

  getBook(): Books[];

  getBookById(id : number): Books;
}
