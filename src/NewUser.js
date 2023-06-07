import React, { useState } from 'react';

function NewUser({handleSubmit}) {
    const [revealForm, setRevealForm] = useState(false)
    const [newUser, setNewUser] = useState({
      username: '',
      password: '',
      name: '',
      location: '',
      posts: [],
      favorite_songs: [],
      age: 18,
      hobbies: '',
      profile_picture: '',  
      pictures: []
    })
    function handleInputChange(e) {
      setNewUser((prev) => {
        return {...prev, [e.target.name]: e.target.value}
      })
    }
    function handleArrayInputChange(e) {
      const { name, value } = e.target;
    
      setNewUser((prev) => {
        return { ...prev,  [name]: value.split(',')};
      });
    }
    function handleSignUpclick() {
        setRevealForm(prev => !prev)
    }
    function handleSubmitClick(e) {
        e.preventDefault()
        // handleSubmit(newUser)
        fetch('http://localhost:3001/Users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
          })
            .then(response => response.json())
            .then(newUsr => handleSubmit(newUsr))
            setNewUser({
                username: '',
                password: '',
                name: '',
                location: '',
                posts: [],
                favorite_songs: [],
                age: 18,
                hobbies: '',
                profile_picture: '',  
                pictures: []
            }
            )
      }
    
  return (
    <div>
      <button onClick={handleSignUpclick}>{revealForm ? 'Close' : 'Sign Up'}</button>
      {revealForm ? <form onSubmit={handleSubmitClick}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" onChange={handleInputChange} value={newUser.username} /><br /><br />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" onChange={handleInputChange} value={newUser.password} /><br /><br />

        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" onChange={handleInputChange} value={newUser.name} /><br /><br />

        <label htmlFor="location">Location:</label>
        <input type="text" id="location" name="location" onChange={handleInputChange} value={newUser.location} /><br /><br />

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" onChange={handleInputChange} value={newUser.age} /><br /><br />

        <label htmlFor="hobbies">Hobbies:</label>
        <textarea id="hobbies" name="hobbies" rows="6" cols="50" onChange={handleArrayInputChange} value={newUser.hobbies}></textarea><br /><br />

        <label htmlFor="profile_picture">Profile Picture:</label>
        <input type="text" id="profile_picture" name="profile_picture" onChange={handleInputChange} value={newUser.profile_picture}/><br /><br />

        <input type="submit" value="Submit" />
      </form>: null}
    </div>
  );
}

export default NewUser;
