import SearchBar from "../SearchBar/SearchBar"
import BookList from "../BookList/BookList"
import { getBooks } from "../api";
import { useState } from "react";

export default function Main() {

    const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (query: string) => {
    try {
      setLoading(true);
      setError(null);
      const results = await getBooks(query);
      setBooks(results);
    } catch (err) {
      setError("Failed to fetch books");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };


    return (
        <main className="main">
            <h1 style={{ color: "rgb(250, 229, 204)", margin: "0 auto" }}>Welcome to ReadLit</h1>
            <h3 style={{ color: "rgb(250, 229, 204)" }}>Your one-stop solution for managing your reading list.</h3>
            <div className="quotes mt-4">
            {/* <p className="text-light">“Books are the mirrors of the soul.” <span className="span">―Virginia Woolf</span></p> */}
            <p className="text-light">“A reader lives a thousand lives before he dies. The man who never reads lives only one.” <span className="span">— George R.R. Martin</span></p>
            </div>
           <SearchBar onSearch={handleSearch} />
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-danger text-center">{error}</p>}
            <BookList books={books}     />
        </main>
    )
}
