import React, { useState } from 'react';

function NewUser() {
    const [revealForm, setRevealForm] = useState(false)
    function handleSignUpclick() {
        setRevealForm(prev => !prev)
    }
  return (
    <div>
      <button onClick={handleSignUpclick}>{revealForm ? 'Close' : 'Sign Up'}</button>
      {revealForm ? <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" /><br /><br />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" /><br /><br />

        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" /><br /><br />

        <label htmlFor="location">Location:</label>
        <input type="text" id="location" name="location" /><br /><br />

        <label htmlFor="favorite_songs">Favorite Songs:</label>
        <textarea id="favorite_songs" name="favorite_songs" rows="4" cols="50"></textarea><br /><br />

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" /><br /><br />

        <label htmlFor="hobbies">Hobbies:</label>
        <textarea id="hobbies" name="hobbies" rows="4" cols="50"></textarea><br /><br />

        <label htmlFor="profile_picture">Profile Picture:</label>
        <input type="text" id="profile_picture" name="profile_picture" /><br /><br />

        <input type="submit" value="Submit" />
      </form>: null}
    </div>
  );
}

export default NewUser;
