import React, { useState } from 'react';
import debounce from 'lodash.debounce';

const Filters = ({ onSearch, onCategoryChange, onSortChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = debounce((e) => {
    onSearch(e.target.value);
  }, 500); // Debounce for 500ms

  const handleCategoryChange = (e) => {
    onCategoryChange(e.target.value);
  };

  const handleSortChange = (e) => {
    onSortChange(e.target.value);
  };

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search Memes"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleSearchChange(e);
        }}
      />

      <select onChange={handleCategoryChange}>
        <option value="trending">Trending</option>
        <option value="new">New</option>
        <option value="classic">Classic</option>
        <option value="random">Random</option>
      </select>

      <select onChange={handleSortChange}>
        <option value="likes">Sort by Likes</option>
        <option value="date">Sort by Date</option>
        <option value="comments">Sort by Comments</option>
      </select>
    </div>
  );
};

export default Filters;
