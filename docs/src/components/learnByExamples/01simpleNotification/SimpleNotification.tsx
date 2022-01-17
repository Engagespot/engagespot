import styled from 'styled-components';
import React from 'react';
import { Engagespot } from '@engagespot/react-component';

const NavBar = styled.nav`
  width: 100%;
  height: 56px;
  color: white;
  border-radius: 5%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: orangered;
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
  cursor: pointer;

  &:hover {
    transition: all 0.5s;
  }
`;

export default function SimpleNotification() {
  return (
    <>
      <div style={{ height: '800px' }}>
        <NavBar>
          <NavList>
            <NavItem>Home</NavItem>
            <NavItem>About</NavItem>
            <NavItem style={{ marginRight: '10rem' }}>Login</NavItem>
            <NavItem>
              <Engagespot
                apiKey="shiynklpz18l3ktqyy6d9a"
                userId="anand"
                endPointOverride="https://api.staging.engagespot.co/v3/"
              />
            </NavItem>
          </NavList>
        </NavBar>
      </div>
    </>
  );
}
