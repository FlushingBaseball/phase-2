import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    <div id='searchPage'>
    <div id="search">
        <input
        type="text"
        placeholder="Who are you searching for..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      </div>
      {users
        .filter((val) => {
          if (searchTerm === '') {
            return false;
          } else {
            return val.username.toLowerCase().includes(searchTerm.toLowerCase());
          }
        })
        .map((val, key) => (
          <div id="userInfo" key={key} >
            <p>{val.username}</p>
            <Link to={`/userUniverse/${val.id}`}>
              <img
                src={val.profile_picture}
                alt={val.username}
                style={{ width: '300px', height: '300px' }}
              />
            </Link>
          </div>
        ))}
    </div>
  );
}
export default Search;

