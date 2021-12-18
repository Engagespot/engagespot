import styled, { css } from 'styled-components';

export const JumpToTopStyled = styled.button`
  ${({ theme: { jumpToTop } }) => css`
    display: flex;
    position: fixed;
    justify-items: center;
    align-content: center;
    box-shadow: ${jumpToTop.shadow};
    border-width: 0;
    border-radius: ${jumpToTop.borderRadius};
    margin: ${jumpToTop.margin};
    padding: ${jumpToTop.padding};
    box-sizing: border-box;
    outline: none;
    user-select: none;
    cursor: pointer;
    background-color: ${jumpToTop.background};
    transition: ${jumpToTop.transition};
    &:hover {
    }

    svg {
      height: ${jumpToTop.iconSize};
      width: ${jumpToTop.iconSize};
      fill: ${jumpToTop.iconFill};
    }
  `}
`;
