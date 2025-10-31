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

// Example GET request
export const getBooks = async (): Promise<Book[]> => {
  const response = await api.get<Book[]>("/books");
  return response.data;
};

// Example POST request
export const createBook = async (book: Omit<Book, "id">): Promise<Book> => {
  const response = await api.post<Book>("/books", book);
  return response.data;
};

// Example DELETE request
export const deleteBook = async (id: string): Promise<void> => {
  await api.delete(`/books/${id}`);
};

// Search books
export const searchBooks = async (query: string) => {
  const response = await api.get(`/volumes?q=${query}`);
  return response.data;
};

export default api;