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
          <NavItem style={{ marginRight: 'auto' }}>Login</NavItem>
          <NavItem>
            <Engagespot
              apiKey="shiynklpz18l3ktqyy6d9a"
              userId="anand"
              // formatDate={(dateString) => {
              //   console.log('Date is ', dateString)
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
