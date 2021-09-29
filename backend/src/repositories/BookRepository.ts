import { EntityRepository, Repository } from "typeorm";
import { Book } from "../database/entities/Book";

@EntityRepository(Book)
class BookRepository extends Repository<Book> {}

export { BookRepository };
