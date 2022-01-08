import styled, { css } from 'styled-components';

interface DropdownMenuStyledProps {
  visible: boolean;
}

export const DropdownButton = styled.button`
  && {
    ${({ theme: { dropdown, colors } }) => css`
      display: flex;
      border-width: ${dropdown.borderWidth};
      margin: ${dropdown.margin};
      padding: ${dropdown.padding};
      box-sizing: border-box;
      outline: ${dropdown.outline};
      user-select: none;
      cursor: pointer;
      background-color: ${dropdown.background};

      svg {
        fill: ${dropdown.iconFill};
        stroke: ${dropdown.iconFill};
        height: ${dropdown.iconHeight};
        width: ${dropdown.iconWidth};
      }

      &:hover {
        transition: ${dropdown.transition};
        fill: ${colors.brandingPrimary};
        stroke: ${colors.brandingPrimary};
        background: ${dropdown.hoverBackground};
      }
    `}
  }
`;

export const DropdownOverlay = styled.div``;

export const DropdownMenuContainer = styled.div<DropdownMenuStyledProps>`
  && {
    ${({ theme: { dropdown }, visible }) => css`
      display: ${visible ? 'flex' : 'none'};
      flex-direction: column;
      background: ${dropdown.menuBackground};
      border-radius: ${dropdown.menuBorderRadius};
      font-family: sans-serif;
      box-shadow: ${dropdown.menuShadow}; ;
    `}
  }
`;

export const DropdownMenuItem = styled.div`
  && {
    ${({ theme: { dropdown } }) => css`
      justify-content: flex-start;
      color: ${dropdown.menuItemTextColor};
      display: flex;
      cursor: pointer;
      padding: ${dropdown.menuItemPadding};
      align-items: center;
      font-size: 0.9rem;

      &:hover {
        background-color: ${dropdown.menuItemHoverBackground};
      }
    `}
  }
`;
