import React, {useState} from 'react';
import './App.css';
import Tweet from './Tweet';

const App = () => {

  const [users, setUser] = useState([
      {name: "Ed", message: "Hello there"},
      {name: "John Snow", message: "I am a real king"},
      {name: "Ed2", message: "Hello there"},
  ]);

  return (
    <div className="app">
        {users.map((user, i) => (
               <Tweet
                   key={i}
                   message={user.message}
                   name={user.name}
                   numberOfLikes="10"
               />
            ))}
    </div>
  );
};

export default App;
