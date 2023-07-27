import React from 'react';

const SearchForm = ({
  searchQuery,
  setSearchParams, 
 
}) => {
  const handleChange = ({ target: { value } }) => {
    setSearchParams({ search: value });
    
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   getSearchResult(searchQuery);
  // };

  return (
    <form>
      <label>
        name:
        <input onChange={handleChange} type="search" value={searchQuery} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
