import React, { useState, useEffect } from 'react';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await fetch('http://localhost:3001/Users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  return (
    <div className='App'>
      <input
        type="text"
        placeholder="Searching for..."
        onChange={event => { setSearchTerm(event.target.value) }}
      />
      {users
        .filter((val) => {
          if (searchTerm === '') {
            return false;
          } else {
            return val.username.toLowerCase().includes(searchTerm.toLowerCase());
          }
        })
        .map((val, key) => (
          <div className="user" key={key} style={{ display: 'flex', alignItems: 'center' }}>
            <p>{val.username}</p>
            <img
              src={val.profile_picture}
              alt={val.username}
              style={{ width: '100px', height: '100px' }}
            />
          </div>
        ))}
    </div>
  );
}
export default Search;

