import React from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) onSearch(query);
  };

  return (
    <Form onSubmit={handleSubmit} className="d-flex justify-content-center mb-4">
      <InputGroup style={{ width: "400px" }}>
        <Form.Control
          type="text"
          placeholder="Search books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit" variant="primary">
          Search
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchBar;