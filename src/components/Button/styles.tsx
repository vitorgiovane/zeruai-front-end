import styled from 'styled-components'
import { lighten } from 'polished'

interface ContainerProps {
  backgroundColor: string
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  margin-top: 1em;
  align-self: center;
  padding: 16px 60px;
  border-radius: 10px;
  border: none;
  background: ${(props) => props.backgroundColor};
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${(props) =>
      props.backgroundColor && lighten(0.1, props.backgroundColor)};
  }

  svg {
    margin-left: 10px;
  }
`
