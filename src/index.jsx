import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { Joke } from './joke';
import { jokes } from './jokes';

const App = () => {
  return (
    <div className="container">
      {jokes.map((joke) => (
        <Joke
          key={joke.id}
          userAvatar={joke.avatar}
          userName={joke.name}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
        ></Joke>
      ))}
    </div>
  );
};

render(<App />, document.querySelector('#app'));
