import './App.css';
import ChatLog from './components/ChatLog';
import chatEntries from './data/messages.json';
import { useState } from 'react';

const countLikes = chatEntriesData => {
  return chatEntriesData.reduce((acc, chatEntry) => {
    return acc + chatEntry.liked;
  }, 0);
};

const App = () => {
  const [chatEntriesData, setChatEntriesData] = useState(chatEntries);
  const likeEntry = prevChatEntry => {
    return { ...prevChatEntry, liked: !prevChatEntry.liked};
  };
  const handleLike = (id) => {
    setChatEntriesData(prevChatEntriesData => {
      return prevChatEntriesData.map(prevChatEntry => {
        if (prevChatEntry.id === id) {
          return likeEntry(prevChatEntry);
        } else {
          return prevChatEntry;
        }
      } );
    });

  };

  const totalLikes = countLikes(chatEntriesData);

  return (
    <div id="App">
      <header>
        <h1>Chatty</h1>
      </header>
      <main>
        <h2>{totalLikes} ❤️s</h2>
        <ChatLog
          entries={chatEntriesData}
          onToggleLike={handleLike}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
