import {getCustomRepository} from "typeorm";
import {BookRepository} from "../repositories/BookRepository"

interface IBook {
    id: string;
    booktitle: string;
    author: string;
    description: string;
    evaluations: string;
    categories: Array<string>;
    pages: number;
    timeInSeconds: number;
    cover: string;
    audio: string;
    text: string;
  }
class BookService {
  private bookRepository: BookRepository; 

  async create(book: IBook) {
    this.bookRepository = await getCustomRepository(BookRepository);

    const newBook = await this.bookRepository.create(book);

    await this.bookRepository.save(newBook);
    return newBook;
  }
}
