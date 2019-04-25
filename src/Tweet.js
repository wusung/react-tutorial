import React from 'react';
import './App.css';

const Tweet = ({name, message, numberOfLikes}) => {
  return (
    <div className="tweet">
      <h3>{name}</h3>
      <p>{message}</p>
      <h3>{numberOfLikes}</h3>
    </div>
  );
};

export default Tweet;
