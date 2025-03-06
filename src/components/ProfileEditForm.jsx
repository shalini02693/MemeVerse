import React, { useState } from 'react';

const ProfileEditForm = ({ user, onSave }) => {
  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState(user.bio);
  const [profilePicture, setProfilePicture] = useState(user.profilePicture);

  const handleNameChange = (e) => setName(e.target.value);
  const handleBioChange = (e) => setBio(e.target.value);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = { name, bio, profilePicture };
    onSave(updatedUser);
  };

  return (
    <form onSubmit={handleSubmit} className="profile-edit-form">
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label>Bio:</label>
        <textarea value={bio} onChange={handleBioChange}></textarea>
      </div>
      <div>
        <label>Profile Picture:</label>
        <input type="file" onChange={handleProfilePictureChange} />
        {profilePicture && <img src={profilePicture} alt="Profile Preview" width="100" />}
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default ProfileEditForm;
