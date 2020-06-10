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
  border: 1px solid #bbbbbb;
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
    padding: 14px 24px 14px 0;
    background-color: transparent;
    border: none;
    color: ${(props) => props.themeColor};
    font-size: 16px;
    font-weight: 500;
    border-radius: 0 30px 30px 0;
  }

  svg {
    margin-right: 10px;
  }
`
