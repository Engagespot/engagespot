import { useState } from 'react';
import './App.css';
import { useEngagespot } from '@engagespot/react-hooks2';
import { createInstance } from '@engagespot/core2';

window.Engagespot = createInstance({
  apiKey: '14b90lje36icbm6of8f64a',
  userId: 'hemanditwiz@gmail.com',
});

function App() {
  const [inputValue, setInputValue] = useState('');

  const {
    notifications,
    loadMore,
    isLoading = false,
    removeNotification,
    currentPage,
  } = useEngagespot({
    apiKey: '14b90lje36icbm6of8f64a',
    userId: 'hemanditwiz@gmail.com',
  });

  console.log('notifications', notifications);

  return (
    <div className="App">
      <h2>{`isLoading... ${isLoading}`}</h2>
      <h2>Current Page: {currentPage}</h2>
      <button
        onClick={() => {
          loadMore();
        }}
      >
        Load more
      </button>
      <input
        type="text"
        value={inputValue}
        onChange={e => {
          setInputValue(e.target.value);
        }}
      />

      <h1>Notifications</h1>
      <button
        onClick={async () => {
          await loadMore();
          setPage(page + 1);
        }}
      >
        get notifications
      </button>
      <button
        onClick={() => {
          removeNotification(inputValue);
        }}
      >
        remove notification
      </button>
      <ul>
        {notifications.map((notification: any) => (
          <li
            onClick={() => {
              setInputValue(notification.id);
            }}
            key={notification.id}
          >
            {notification.id}: {notification.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
