// import React, { useState, useEffect } from 'react';
// import {BrowserRouter as Router, useHistory } from 'react-router-dom';
// import NewUser from './NewUser';

// function SignInPage() {
//   const [authorized, setAuthorized] = useState(false);
//   const [users, setUsers] = useState([]);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   async function fetchUsers() {
//     try {
//       const response = await fetch('http://localhost:3001/Users');
//       const data = await response.json();
//       setUsers(data);
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   }

//   const history = useHistory();

//   function handleSubmit(e) {
//     e.preventDefault();
//     const auth = users.some((user) => user.username === username && user.password === password);
//     setAuthorized(auth);
//     if (auth) {
//       history.push('/');
//     } else {
//       alert('Sorry Wrong username or password')
//     }
//   }

//   const login = (
//     <form action="#" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         autoComplete="username"
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <input type="submit" value="Log In" />
//       <p>Don't have an account?</p>
//       <NewUser />
//     </form>
//   );

//   return (
//     <div id="authorization" className="container">
//         {authorized ? (
//           <div>
//           </div>
//         ) : (
//           <div>
//             <h2>Login</h2>
//             {login}
//           </div>
//         )}
//     </div>
//   );
// }

// export default SignInPage;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useHistory, Link } from 'react-router-dom';

function SignInPage() {
  const [authorized, setAuthorized] = useState(false);
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);

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
    const authUser = users.find((user) => user.username === username && user.password === password);
    if (authUser) {
      setAuthorized(true);
      history.push(`/userUniverse/${authUser.id}`);
    } else {
      setShowAlert(true);
    }
  }
  

  const login = (
    <form action="#" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
          className="userPassword"
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          className="userPassword"
        />
      </div>
      <input type="submit" value="Log In" />
      {showAlert && (
        <p style={{ color: 'red' }}>Sorry, wrong username or password</p>
      )}
      <p>
        Don't have an account? <Link to="/sign-Up">Sign up</Link>
      </p>
    </form>
  );

  return (
    <div id="authorization" className="container">
      {authorized ? (
        <div>
          {/* Render authorized content */}
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
