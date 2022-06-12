import styled, { css } from 'styled-components';

export const Toggle = styled.input`
  && {
    ${({ theme: { toggle } }) => css`
      /* Toggle Button */
      & {
        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;
        position: relative;
        border: 0;
        outline: 0;
        cursor: pointer;
        margin: 10px;
        transform: scale(0.7);
      }

      /* To create surface of toggle button */
      &:after {
        content: '';
        width: 60px;
        height: 28px;
        display: inline-block;
        background: ${toggle.background};
        border-radius: 18px;
        clear: both;
      }

      /* Contents before checkbox to create toggle handle */
      &:before {
        content: '';
        width: 32px;
        height: 32px;
        display: block;
        position: absolute;
        left: -1px;
        top: -2px;
        transform: scale(0.7);
        border-radius: 50%;
        background: ${toggle.dotColor};
      }

      /* Shift the handle to left on check event */
      &:checked:before {
        left: 29px;
      }
      /* Background color when toggle button will be active */
      &:checked:after {
        background: ${toggle.activeColor};
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }

      &,
      &:before,
      &:after,
      &:checked:before,
      &:checked:after {
        transition: ease 0.3s;
        -webkit-transition: ease 0.3s;
        -moz-transition: ease 0.3s;
        -o-transition: ease 0.3s;
      }
    `}
  }
`;
