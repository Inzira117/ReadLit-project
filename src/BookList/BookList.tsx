import { useEffect, useState } from "react";
import { getBooks } from "../api";
import BookCard from "../BookCard/BookCard";

interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  imageUrl: string;
  rating: number;
}

export default function BookList() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    getBooks()
      .then((data) => {
        const mapped = data.map((item: any) => ({
          id: item.id,
          title: item.volumeInfo.title || "No title",
          author: item.volumeInfo.authors?.[0] || "Unknown",
          genre: item.volumeInfo.categories?.[0] || "Uncategorized",
          imageUrl: item.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/128x195?text=No+Cover",
          rating: Math.floor(Math.random() * 5) + 1,
        }));
        setBooks(mapped);
      })
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

  return (
    <div className="container mt-5" style={{ backgroundColor: "rgb(250, 229, 204)" }}>
      <div className="row">
        {books.length === 0 ? (
          <p className="text-light">No books found.</p>
        ) : (
          books.map((book) => <BookCard key={book.id} {...book} />)
        )}
      </div>
    </div>
  );
}