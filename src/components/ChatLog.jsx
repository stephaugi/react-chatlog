import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({entries, onToggleLike}) => {
  const getChatLogJSX = (entries) => {
    return entries.map(chat => {
      return (
        <li key={chat.id}>
          <ChatEntry
            key={chat.id}
            id={chat.id}
            sender={chat.sender}
            body={chat.body}
            timeStamp={chat.timeStamp}
            liked={chat.liked}
            onToggleLike={onToggleLike} />
        </li>
      );
    });
  };

  return <section className='chat-log'>
    <ul>{getChatLogJSX(entries)}</ul>
  </section>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool,
  })),
  onToggleLike: PropTypes.func.isRequired,
};

export default ChatLog;