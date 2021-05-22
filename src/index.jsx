import React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => {
  const [likeNumber, setLikeNumber] = useState(0);
  const [dislikeNumber, setDislikeNumber] = useState(0);

  return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img
              className="user-avatar"
              src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png"
            />
            <p className="user-name">Neroxx</p>
          </div>

          <p className="joke__text">
            The secret service isn't allowed to yell "Get down!" anymore when
            the president is about to be attacked. Now they have to yell
            "Donald, duck!"
          </p>
        </div>
        <div className="joke__likes">
          <button
            onClick={() => setLikeNumber(likeNumber + 1)}
            id="btn-up"
            class="btn-like btn-like--up"
          ></button>
          <span id="likes-up" class="likes-count likes-count--up">
            {likeNumber}
          </span>
          <button
            onClick={() => setDislikeNumber(dislikeNumber + 1)}
            id="btn-down"
            class="btn-like btn-like--down"
          ></button>
          <span id="likes-down" class="likes-count likes-count--down">
            {dislikeNumber}
          </span>
        </div>
      </div>
    </div>
  );
};

render(<App />, document.querySelector('#app'));
