import styled from 'styled-components';

interface DropdownMenuStyledProps {
  visible: boolean;
}

export const DropdownButton = styled.button`
  display: flex;
  border-width: 0;
  margin: 0;
  margin-right: 0.5rem;
  padding: 0.5rem;
  box-sizing: border-box;
  outline: none;
  user-select: none;
  cursor: pointer;
  background-color: transparent;

  svg {
    fill: ${({ theme }) => theme.colors.colorTertiary};
    stroke: ${({ theme }) => theme.colors.colorTertiary};
    height: 0.6rem;
    width: 0.5rem;
  }

  &:hover {
    transition: all 0.2s;
    fill: ${({ theme }) => theme.colors.brandingPrimary};
    stroke: ${({ theme }) => theme.colors.brandingPrimary};
    background: ${({ theme }) => theme.colors.colorGreyLight};
  }
`;

export const DropdownOverlay = styled.div``;

export const DropdownMenuContainer = styled.div<DropdownMenuStyledProps>`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 2px;
  font-family: sans-serif;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.14);
`;

export const DropdownMenuItem = styled.div`
  justify-content: flex-start;
  display: flex;
  cursor: pointer;
  padding: 0.5rem 0.7rem;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.colorGreyLighter};
  }
`;

export const DropdownArrow = styled.div<DropdownMenuStyledProps>`
  position: absolute;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  width: 10px;
  height: 10px;

  &:after {
    content: ' ';
    position: absolute;
    top: -25px;
    left: 0;
    transform: rotate(45deg);
    width: 10px;
    height: 10px;
    background-color: white;
    box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
  }
`;
