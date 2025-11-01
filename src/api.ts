import axios from "axios";

const api = axios.create({
  baseURL: "https://www.googleapis.com/books/v1", 
  headers: {
    "Content-Type": "application/json",
  },
});

export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  imageUrl: string;
  rating: number;
}

// GET request
export async function getBooks(query: string) {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`
  );
  const data = await response.json();

  if (!data.items) return [];

  return data.items.map((item: any) => ({
    id: item.id,
    title: item.volumeInfo.title || "No title",
    author: item.volumeInfo.authors?.[0] || "Unknown",
    genre: item.volumeInfo.categories?.[0] || "Uncategorized",
    imageUrl: item.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/128x195?text=No+Cover",
    rating: Math.floor(Math.random() * 5) + 1,
  }));
}

//  POST request
export const createBook = async (book: Omit<Book, "id">): Promise<Book> => {
  const response = await api.post<Book>("/books", book);
  return response.data;
};

// DELETE request
export const deleteBook = async (id: string): Promise<void> => {
  await api.delete(`/books/${id}`);
};

// Search books
export const searchBooks = async (query: string) => {
  const response = await api.get(`/volumes?q=${query}`);
  return response.data;
};

export default api;