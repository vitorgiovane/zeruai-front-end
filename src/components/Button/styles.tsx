import styled from 'styled-components'
import { lighten } from 'polished'

export const Container = styled.button`
  margin-top: 1em;
  align-self: center;
  padding: 16px 60px;
  border-radius: 10px;
  border: none;
  background: #753a64;
  color: #ffffff;
  font-weight: 500;
  font-size: 18px;
  transition: background-color 0.2s;

  &:hover {
    background: ${lighten(0.1, '#753a64')};
  }

  svg {
    margin-left: 10px;
  }
`
