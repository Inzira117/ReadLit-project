import type { Book } from "../api";
import BookCard from "../BookCard/BookCard";

interface BookListProps {
  books: Book[];
}


export default function BookList({ books }: BookListProps) {
  return (
    <div className="container mt-5">
      <div className="row">
        {books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
}

