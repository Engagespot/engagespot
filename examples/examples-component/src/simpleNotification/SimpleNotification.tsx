import styled, { createGlobalStyle } from 'styled-components';

import { Engagespot } from '@engagespot/react-component';
import { useState } from 'react';

const GlobalStyles = createGlobalStyle`

body {
  margin: 0 !important;
  padding: 0 !important;
}

`;

const NavBar = styled.nav`
  width: 100%;
  height: 56px;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #1d3c78;
`;

const NavList = styled.ul`
  list-style-type: none;
  width: 100%;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
`;

const NavItem = styled.li`
  display: flex;
  padding: 0 2.5rem;

  &:hover {
    transition: all 0.5s;
  }
`;

const users = [
  'ulli.yodhav@gmail.com',
  'hemanditwiz@gmail.com',
  'hemandev@gmail.com',
];

export function SimpleNotification() {
  const [user, setUser] = useState(users[1]);
  return (
    <>
      <GlobalStyles />
      <NavBar>
        <NavList>
          <NavItem>Home</NavItem>
          <NavItem>{user}</NavItem>
          <NavItem>
            <button
              onClick={() => {
                const index = Math.floor(Math.random() * users.length);
                setUser(users[index]);
              }}
            >
              Change User
            </button>
          </NavItem>
          <NavItem style={{ marginRight: '10rem' }}>Login</NavItem>
          <NavItem>
            <Engagespot
              apiKey="ywxewq2tbc7mytcda4btye"
              headerDropdownItems={[
                { name: 'Open All Notifications', action: () => true },
              ]}
              userId={user}
              endPointOverride={'http://localhost:3002/v3/'}
              onFeedItemClick={(evt, options) => {
                options.markAsClicked();
              }}
              renderNotificationBody={res => {
                if (res.data && res.data.type === 'invoice') {
                  const url = res.data.url;
                  return `<p>
                      ${res.heading} <a href="${url}">Download</a>
                    </p>`;
                }
              }}
              debug={true}
            />
          </NavItem>
        </NavList>
      </NavBar>
    </>
  );
}
