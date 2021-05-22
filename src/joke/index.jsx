import React from 'react';
import { useState } from 'react';
import './style.css';

export const Joke = (props) => {
  const [likeNumber, setLikeNumber] = useState(props.likes);
  const [dislikeNumber, setDislikeNumber] = useState(props.dislikes);

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={props.userAvatar} />
          <p className="user-name">{props.userName}</p>
        </div>

        <p className="joke__text">{props.text}</p>
      </div>
      <div className="joke__likes">
        <button
          onClick={() => setLikeNumber(likeNumber + 1)}
          id="btn-up"
          className="btn-like btn-like--up"
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {likeNumber}
        </span>
        <button
          onClick={() => setDislikeNumber(dislikeNumber + 1)}
          id="btn-down"
          className="btn-like btn-like--down"
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {dislikeNumber}
        </span>
      </div>
    </div>
  );
};
