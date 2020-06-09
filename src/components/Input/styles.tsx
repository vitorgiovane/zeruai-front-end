import styled from 'styled-components'

export const Container = styled.div`
  padding-left: 24px;
  margin-bottom: 1rem;
  border-radius: 50px;
  border: 1px solid #bbbbbb;
  display: flex;
  align-items: center;

  &:focus {
    border: 1px solid #753a64;
  }

  input {
    flex-grow: 1;
    padding: 14px 24px 14px 0;
    background-color: transparent;
    border: none;
    color: #753a64;
    -webkit-text-fill-color: #753a64;
    font-size: 18px;
    font-weight: 500;
    border-radius: 0 30px 30px 0;
  }

  svg {
    margin-right: 10px;
  }
`
