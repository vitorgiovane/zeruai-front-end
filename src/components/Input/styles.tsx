import styled, { css } from 'styled-components'

interface ContainerProps {
  isFocused: boolean
  isFilled: boolean
  themeColor: string
}

export const Container = styled.div<ContainerProps>`
  padding-left: 24px;
  margin-bottom: 1rem;
  border-radius: 50px;
  background-color: #0c1722;
  display: flex;
  align-items: center;
  color: #bbb;

  ${(props) =>
    props.isFocused &&
    css`
      border: 1px solid ${props.themeColor};
    `}

  ${(props) =>
    (props.isFocused || props.isFilled) &&
    css`
      color: ${props.themeColor};
    `}

  input {
    flex-grow: 1;
    padding: 18px 24px 18px 0;
    background-color: transparent;
    border: none;
    color: ${(props) => props.themeColor};
    font-size: 14px;
    font-weight: 500;
    border-radius: 0 30px 30px 0;
  }

  svg {
    margin-right: 10px;
  }
`
