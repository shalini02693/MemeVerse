import React from 'react';
import MemeGrid from '../components/MemeGrid';
import DarkModeToggle from '../components/DarkModeToggle';

const HomePage = () => {
  return (
    <div className="homepage">
      <header>
        <h1>Trending Memes</h1>
        <DarkModeToggle />
      </header>

      <main>
        <MemeGrid />
      </main>
    </div>
  );
};

export default HomePage;
