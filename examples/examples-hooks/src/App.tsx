import {
  useBrowserWebPush,
  useEngagespot,
  useFloatingNotification,
  useInfiniteScroll,
  RawNotification,
} from '@engagespot/react-hooks';

import { Notification } from './icons/Notification';
import { Bookmark } from './icons/Bookmark';
import { Profile } from './icons/Profile';
import { useRef } from 'react';
import { Dot } from './icons/Dot';

function App() {
  const scrollRootRef = useRef<HTMLElement | null>();
  scrollRootRef.current = document.getElementById('engagespot-scroll-root');
  const {
    notifications,
    getButtonProps,
    getPanelProps,
    unreadCount,
    markAsRead,
    deleteNotification,
    hasMore,
    setLoaderRef,
    panelVisibility,
  } = useEngagespot<RawNotification>({
    apiKey: 'q7nkhsrgfppexca9aj1nq',
    userId: 'hemanditwiz@gmail.com',
    plugins: [useInfiniteScroll, useBrowserWebPush, useFloatingNotification],
    formatDate(dateString, dateFns) {
      return dateFns.formatDistance(new Date(dateString), new Date(), {
        addSuffix: true,
      });
    },
    scrollRoot: scrollRootRef.current,
  });

  return (
    <div className="container">
      <nav className="mb-2 border border-t-0 border-l-0 border-r-0 border-gray-200">
        <ul className="flex flex-row items-center gap-5 p-3 ">
          <li className="p-2 hover:bg-slate-400">Home</li>
          <input
            className="p-1 mr-auto rounded outline-gray-400 bg-slate-200"
            type="text"
            placeholder="Search"
          ></input>
          <li>
            <button className="p-2 hover:bg-slate-200">
              <Bookmark />
            </button>
          </li>
          <li>
            <button
              className="relative p-2 hover:bg-slate-200"
              {...getButtonProps()}
            >
              <Notification />
              <span className="absolute top-0 right-0 inline-block w-2 h-2 transform -translate-x-1/2 translate-y-1/2 bg-red-600 rounded-full"></span>
            </button>
          </li>
          <li>
            <button className="p-2 hover:bg-slate-200">
              <Profile />
            </button>
          </li>
        </ul>
      </nav>
      {panelVisibility && (
        <div
          id="engagespot-scroll-root"
          className="px-4 py-6 mt-1 overflow-auto rounded-lg shadow-md h-96 w-72"
          {...getPanelProps()}
        >
          <div>
            <h3 className="text-lg font-semibold">Notifications</h3>
            <>
              {notifications.map(notification => {
                return (
                  <div
                    onClick={() => {
                      markAsRead(notification.id);
                    }}
                    className="flex flex-row gap-3 px-1 py-2 border border-t-0 border-l-0 border-r-0 border-gray-200 cursor-pointer hover:bg-gray-50"
                  >
                    <div className="self-center p-5 bg-orange-300 rounded-full"></div>
                    <div>
                      <h5>{notification.title}</h5>
                      <p>{notification.message}</p>
                      <span>{notification.created}</span>
                      {notification.clickedAt == null && (
                        <span className="">
                          <Dot />
                        </span>
                      )}
                      <button
                        onClick={() => deleteNotification(notification.id)}
                        className="p-2 text-lg font-thin text-gray-400 hover:bg-gray-200"
                      >
                        &times;
                      </button>
                    </div>
                  </div>
                );
              })}
              {hasMore && <span ref={setLoaderRef}>Loading...</span>}
            </>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
