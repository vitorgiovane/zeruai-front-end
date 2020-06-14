import styled, { css } from 'styled-components'

interface ContainerProps {
  type?: 'info' | 'success' | 'error'
}

const toastTypes = {
  info: css`
    color: #c3e2ff;
    background: #3a546c;
  `,
  success: css`
    color: #8aeaad;
    background: #17402d;
  `,
  error: css`
    color: #ffb1b1;
    background: #4a1e22;
  `
}

export const Container = styled.div<ContainerProps>`
  width: 360px;
  position: relative;
  display: flex;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);

  & + div {
    margin-top: 10px;
  }

  ${(props) => toastTypes[props.type || 'info']}

  > svg {
    margin: 0px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
    }
  }

  button {
    position: absolute;
    right: 10px;
    top: 8px;
    background: none;
    border: none;
    color: inherit;
  }
`
