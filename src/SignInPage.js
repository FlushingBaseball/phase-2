import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, useHistory } from 'react-router-dom';
import HomeSplash from './HomeSplash';

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
      history.push('/HomeSplash');
    }
  }

  const login = (
    <form action="#" onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="submit" value="Log In" />
    </form>
  );

  return (
    <Router>
      <div id="authorization">
        {authorized ? (
          <div>
            <Route path="/HomeSplash" component={HomeSplash} />
          </div>
        ) : (
          <div>
            {login}
            {/* {alert('Wrong username or password')} */}
          </div>
        )}
      </div>
    </Router>
  );
}

export default SignInPage;

