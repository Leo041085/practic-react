import React from 'react';

const SearchForm = ({
  searchQuery,
  setSearchParams,
  getSearchResult,
  refSearch,
}) => {
  const handleChange = ({ target: { value } }) => {
    setSearchParams({ search: value });
    refSearch.current = false;
  };

  const handleSubmit = e => {
    e.preventDefault();
    getSearchResult(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        name:
        <input onChange={handleChange} type="search" value={searchQuery} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
