import React, { useState, useEffect } from 'react';
import MemeLeaderboard from '../components/MemeLeaderboard';
import UserLeaderboard from '../components/UserLeaderboard';

const LeaderboardPage = () => {
  const [topMemes, setTopMemes] = useState([]);
  const [userRankings, setUserRankings] = useState([]);

  useEffect(() => {
    // Fetch meme data from localStorage (or API) and calculate rankings
    const allMemes = JSON.parse(localStorage.getItem('allMemes')) || [];
    const allUsers = JSON.parse(localStorage.getItem('allUsers')) || [];

    // Sort memes by likes and get top 10
    const sortedMemes = allMemes.sort((a, b) => b.likes - a.likes).slice(0, 10);
    setTopMemes(sortedMemes);

    // Sort users by total engagement (likes + comments + shares)
    const sortedUsers = allUsers
      .map((user) => ({
        ...user,
        totalEngagement: user.likes + user.comments + user.shares,
      }))
      .sort((a, b) => b.totalEngagement - a.totalEngagement);

    setUserRankings(sortedUsers);
  }, []);

  return (
    <div className="leaderboard-page">
      <h1>Leaderboard</h1>

      <h2>Top 10 Most Liked Memes</h2>
      <MemeLeaderboard memes={topMemes} />

      <h2>User Rankings</h2>
      <UserLeaderboard users={userRankings} />
    </div>
  );
};

export default LeaderboardPage;
