import styled, { createGlobalStyle } from 'styled-components';

import { Engagespot } from '@engagespot/react-component';

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

export function SimpleNotification() {
  return (
    <>
      <GlobalStyles />
      <NavBar>
        <NavList>
          <NavItem>Home</NavItem>
          <NavItem>About</NavItem>
          <NavItem style={{ marginRight: '10rem' }}>Login</NavItem>
          <NavItem>
            <Engagespot
              apiKey="3tw99j2oeeggfuk5uoow7l"
              userId="anand"
              endPointOverride="https://api.staging.engagespot.co/v3/"
              debug={true}
              placementOptions={{
                placement: 'auto',
                enableArrow: true,
              }}
              mode="auto"
              onFeedItemClick={(_, options) => {
                console.log('options', options);
              }}
              panelOpenByDefault={false}
              theme={{
                notificationButton: {
                  // iconFill: '#000',
                },
              }}
              //placeholderImage="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICAgIDxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjUwIiBmaWxsPSJwYXBheWF3aGlwIiAvPgo8L3N2Zz4="
              // formatDate={(dateString, ) => {
              //   return new Date().toString();
              // }}
              // theme={{
              //   colors: {
              //     brandingPrimary: '#1d3c78',
              //   },
              //   panel: {
              //     boxShadow: 'none',
              //     borderBottomRightRadius: '0',
              //     borderBottomLeftRadius: '0',
              //     height: '90vh',
              //   },
              // }}
            />
          </NavItem>
        </NavList>
      </NavBar>
    </>
  );
}
