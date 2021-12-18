import styled, { createGlobalStyle } from 'styled-components';
import { useEngagespot } from '@engagespot/react-hooks';

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

export function NotificationHook() {
  const apiKey = 'shiynklpz18l3ktqyy6d9a';
  const userId = 'anand';

  const {
    isValid,
    page,
    notifications,
    notificationPermissionState,
    panelVisibility,
    getButtonProps,
    getPanelProps,
    scroll,
    getPanelOffsetProps,
    togglePanelVisibility,
    useJumpToTop,
  } = useEngagespot({ apiKey, userId });

  console.log(getButtonProps());
  console.log('data is ', notifications);

  return (
    <>
      <GlobalStyles />
      <NavBar>
        <NavList>
          <NavItem>Home</NavItem>
          <NavItem>About</NavItem>
          <NavItem style={{ marginRight: 'auto' }}>Login</NavItem>
          <NavItem>
            <button {...getButtonProps()}>Click</button>
          </NavItem>
        </NavList>
      </NavBar>
      <div {...getPanelProps()}>Hello</div>
    </>
  );
}
