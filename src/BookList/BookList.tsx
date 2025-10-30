import { useEffect, useState } from "react";
import { getBooks } from "../api"
import type { Book } from "../api"
import BookCard from "../BookCard/BookCard";

export default function BookList() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    getBooks()
      .then(setBooks)
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

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