import React, { useState } from "react";
import { InputGroup, Input, Button } from "reactstrap";

const SearchBar = ({ placeholder, onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <>
      <InputGroup>
        <Input
          placeholder={placeholder}
          value={query}
          onChange={handleInputChange}
        />
        <Button onClick={handleSearch}>
          Search <i className="bi bi-search" />
        </Button>
      </InputGroup>

      {/* <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button> */}
    </>
  );
};

export default SearchBar;
