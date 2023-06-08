import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, useHistory } from 'react-router-dom';
import NewUser from './NewUser';

function SignInPage() {
  const [authorized, setAuthorized] = useState(false);
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const auth = users.some((user) => user.username === username && user.password === password);
    setAuthorized(auth);
    if (auth) {
      history.push('/');
    } else {
      alert('Sorry Wrong username or password')
    }
  }

  const login = (
    <form action="#" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        autoComplete="username" 
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value="Log In" />
      <p>Don't have an account?</p>
      <NewUser />
    </form>
  );

  return (
    <div id="authorization" className="container">
        {authorized ? (
          <div>
//testing
          </div>
        ) : (
          <div>
            <h2>Login</h2>
            {login}
          </div>
        )}
    </div>
  );
}

export default SignInPage;
