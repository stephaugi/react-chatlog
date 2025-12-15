import './App.css';
import ChatLog from './components/ChatLog';
import chatEntries from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [chatEntriesData, setChatEntriesData] = useState(chatEntries);
  const [numberOfLikes, setNumberOfLikes] = useState(0);
  const countLikes = () => {
    console.log('counting the likes');
    setNumberOfLikes((previousNumberOfLikes) => previousNumberOfLikes + 1);
  };

  console.log(chatEntriesData[0].liked);
  return (
    <div id="App">
      <header>
        <h1>Chatty</h1>
      </header>
      <main>
        <span>{numberOfLikes}</span>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog
          entries={chatEntriesData}
          onToggleLike={countLikes}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
