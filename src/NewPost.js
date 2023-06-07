import React, { useState } from 'react';

class UserPost {
  constructor(feeling) {
    this._feeling = feeling;
    this._updates = '';
  }
  get feeling() {
    return this._feeling;
  }
  get updates() {
    return this._updates;
  }
  set updates(news) {
    this._updates = news;
  }
}

function NewPost() {
  const [feeling, setFeeling] = useState('');
  const [news, setNews] = useState('');

  const handleFeelingChange = (e) => {
    setFeeling(e.target.value);
  };

  const handleNewsChange = (e) => {
    setNews(e.target.value);
  };

  const handlePost = () => {
    const post = new UserPost(feeling);
    post.updates = news;

    fetch('http://localhost:3001/Users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Post sent successfully');
          console.log('Error sending the post');
        }
      })
      .catch((error) => {
        console.log('Error sending the post:', error);
      });
  };

  return (
    <div className='statusUpdate'>
      <input type="text" value={feeling} onChange={handleFeelingChange} placeholder="Tell us how your feeling" />
      <textarea value={news} onChange={handleNewsChange} placeholder="What's new?" />
      <button onClick={handlePost}>Post</button>

    </div>
  );
}

export default NewPost;
