import { useState } from 'react';
import './App.css';
import { useEngagespot } from './useEngagespot';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [page, setPage] = useState(1);
  const {
    notifications,
    getNotifications,
    removeNotification,
    isLoading,
    notif,
  } = useEngagespot({
    apiKey: '14b90lje36icbm6of8f64a',
    userId: 'hemanditwiz@gmail.com',
    debug: false,
    allowNonHttpsWebPush: true,
  });

  console.log('notif', notif());

  return (
    <div className="App">
      <h2>{`isLoading... ${isLoading}`}</h2>
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
          await getNotifications({ page });
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
        {notif().map(notification => (
          <li
            onClick={() => {
              setInputValue(notification.id);
            }}
            key={notification.id}
          >
            {notification.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
