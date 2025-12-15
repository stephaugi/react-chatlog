import { useState } from 'react';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = ({id, sender, body, timeStamp, liked, onToggleLike}) => {
  const [isLiked, setIsLiked] = useState(liked);
  const likedToggle = isLiked ? '❤️' : '🤍';
  const toggleLike = (event) => {
    setIsLiked(!isLiked);
    onToggleLike();
  }
  return (
    // Replace the outer tag name with a semantic element that fits our use case
    <article className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp}></TimeStamp></p>
        <button
          className="like"
          onClick={toggleLike}
        >
          {likedToggle}
        </button>
      </section>
    </article>
  );
};

ChatEntry.propTypes = {
  // Fill with correct proptypes
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  onToggleLike: PropTypes.func.isRequired,
};

export default ChatEntry;