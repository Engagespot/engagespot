import styled from 'styled-components';

export const JumpToTopStyled = styled.button`
  display: flex;
  position: fixed;
  justify-items: center;
  align-content: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-width: 0;
  border-radius: 50%;
  margin: 0;
  padding: 0.7rem;
  box-sizing: border-box;
  outline: none;
  user-select: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.jumpToTop.background};
  transition: all ease-in-out 0.5s;
  &:hover {
  }

  svg {
    height: ${({ theme }) => theme.jumpToTop.iconSize};
    width: ${({ theme }) => theme.jumpToTop.iconSize};
    fill: ${({ theme }) => theme.jumpToTop.iconFill};
  }
`;
