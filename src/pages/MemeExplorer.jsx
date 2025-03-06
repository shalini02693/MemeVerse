import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MemeCard from '../components/MemeCard';
import Filters from '../components/Filters';
import InfiniteScroll from 'react-infinite-scroll-component';

const MemeExplorer = () => {
  const [memes, setMemes] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('trending');
  const [sortBy, setSortBy] = useState('likes');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch memes when the category or search changes
    const fetchMemes = async () => {
      try {
        const response = await axios.get(`https://api.example.com/memes`, {
          params: {
            category,
            search: searchQuery,
            sortBy,
            page,
          },
        });
        setMemes((prevMemes) => [...prevMemes, ...response.data.memes]);
        setHasMore(response.data.hasMore);
      } catch (error) {
        console.error("Error fetching memes", error);
      }
    };

    fetchMemes();
  }, [category, sortBy, searchQuery, page]);

  const fetchMoreData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setMemes([]); // Clear memes when the search query changes
    setPage(1); // Reset to page 1
  };

  const handleCategoryChange = (category) => {
    setCategory(category);
    setMemes([]); // Clear memes when category changes
    setPage(1); // Reset to page 1
  };

  const handleSortChange = (sortBy) => {
    setSortBy(sortBy);
    setMemes([]); // Clear memes when sorting changes
    setPage(1); // Reset to page 1
  };

  return (
    <div className="meme-explorer">
      <Filters
        onSearch={handleSearch}
        onCategoryChange={handleCategoryChange}
        onSortChange={handleSortChange}
      />
      <InfiniteScroll
        dataLength={memes.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <div className="meme-grid">
          {memes.map((meme) => (
            <MemeCard key={meme.id} meme={meme} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default MemeExplorer;
