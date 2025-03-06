import React, { useState, useEffect } from 'react';
import UploadedMemesGallery from '../components/UploadedMemesGallery';
import LikedMemesGallery from '../components/LikedMemesGallery';
import ProfileEditForm from '../components/ProfileEditForm';

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: 'User Name',
    bio: 'This is the user bio.',
    profilePicture: '',
  });
  const [uploadedMemes, setUploadedMemes] = useState([]);
  const [likedMemes, setLikedMemes] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch uploaded memes and liked memes from localStorage or API
    const uploadedMemes = JSON.parse(localStorage.getItem('uploadedMemes')) || [];
    const likedMemes = JSON.parse(localStorage.getItem('likedMemes')) || [];
    const savedUser = JSON.parse(localStorage.getItem('userProfile')) || user;

    setUploadedMemes(uploadedMemes);
    setLikedMemes(likedMemes);
    setUser(savedUser);
  }, []);

  const handleProfileEdit = (newUserData) => {
    setUser(newUserData);
    localStorage.setItem('userProfile', JSON.stringify(newUserData));
    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      <h1>User Profile</h1>

      {/* Profile Edit Form */}
      {isEditing ? (
        <ProfileEditForm user={user} onSave={handleProfileEdit} />
      ) : (
        <div className="profile-info">
          <div className="profile-picture">
            <img src={user.profilePicture || '2.jpeg'} alt="Profile" />
          </div>
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        </div>
      )}

      <h3>Your Uploaded Memes</h3>
      <UploadedMemesGallery memes={uploadedMemes} />

      <h3>Your Liked Memes</h3>
      <LikedMemesGallery memes={likedMemes} />
    </div>
  );
};

export default ProfilePage;
