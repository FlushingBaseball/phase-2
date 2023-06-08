import React from 'react';
import {Link} from 'react-router-dom'

function Posts({ usersArray }) {
  return (
    <div>
      {usersArray.map((user) => (
        <div key={user.username} className="posts-container">
          <h4 className="username">- {user.username}</h4>
          <img className="images" src={user.profile_picture} alt='profile pic'/>
          <h3>Posts:</h3>
          {user.posts.map((post, i) => (
            <p key={i} className="post">
              {post}
            </p>
          ))}
          <Link to={`/posts/${user.id}`}>see more</Link>
        </div>
      ))}
    </div>
  );
}

export default Posts;
