import styled, { css } from 'styled-components'

import Tooltip from '../Tooltip'

interface ContainerProps {
  isFocused: boolean
  isFilled: boolean
  themeColor: string
  isErrored: boolean
}

export const Container = styled.div<ContainerProps>`
  padding: 0 24px;
  margin-bottom: 1rem;
  border-radius: 50px;
  background-color: #0c1722;
  display: flex;
  align-items: center;
  color: #5d7184;
  border: 2px solid #0c1722;

  ${(props) =>
    props.isFilled &&
    css`
      color: ${props.themeColor};
    `}

  ${(props) =>
    props.isErrored &&
    css`
      color: #f42626;
      border-color: #f42626;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${props.themeColor};
      color: ${props.themeColor};
    `}

  input {
    flex-grow: 1;
    padding: 18px 0;
    background-color: transparent;
    border: none;
    color: ${(props) => props.themeColor};
    font-size: 16px;
    font-weight: 500;
    border-radius: 0 30px 30px 0;
    letter-spacing: 0.5px;

    &::placeholder {
      color: #5d7184;
    }
  }

  svg {
    margin-right: 10px;
  }
`

export const Error = styled(Tooltip)`
  svg {
    margin: 0 0 0 10px;
    border-radius: 50%;

    box-shadow: 0 0 0 0 rgba(255, 0, 0, 1);
    transform: scale(1);
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(244, 38, 38, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(244, 38, 38, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(244, 38, 38, 0);
    }
  }

  span {
    background: #f42626;
    color: #eee;

    &::before {
      border-color: #f42626 transparent;
    }
  }
`
