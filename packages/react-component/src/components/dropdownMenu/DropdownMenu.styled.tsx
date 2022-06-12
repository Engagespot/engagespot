import styled, { css } from 'styled-components';
import theme from '../../theme/themeConfig';

interface DropdownMenuStyledProps {
  visible?: boolean;
  dropdownTheme: typeof theme['dropdown'];
}

export const DropdownButton = styled.button<DropdownMenuStyledProps>`
  && {
    ${({ theme: { colors }, dropdownTheme }) => css`
      display: flex;
      border-width: ${dropdownTheme.borderWidth};
      margin: ${dropdownTheme.margin};
      padding: ${dropdownTheme.padding};
      box-sizing: border-box;
      outline: ${dropdownTheme.outline};
      user-select: none;
      cursor: pointer;
      background-color: ${dropdownTheme.background};

      svg {
        fill: ${dropdownTheme.iconFill};
        stroke: ${dropdownTheme.iconFill};
        height: ${dropdownTheme.iconHeight};
        width: ${dropdownTheme.iconWidth};
      }

      &:hover {
        transition: ${dropdownTheme.transition};
        fill: ${colors.brandingPrimary};
        stroke: ${colors.brandingPrimary};
        background: ${dropdownTheme.hoverBackground};
      }
    `}
  }
`;

export const DropdownOverlay = styled.div`
  z-index: 1000000;
`;

export const DropdownMenuContainer = styled.div<DropdownMenuStyledProps>`
  && {
    ${({ visible, dropdownTheme }) => css`
      display: ${visible ? 'flex' : 'none'};
      flex-direction: column;
      background: ${dropdownTheme.menuBackground};
      border-radius: ${dropdownTheme.menuBorderRadius};
      font-family: sans-serif;
      box-shadow: ${dropdownTheme.menuShadow}; ;
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
