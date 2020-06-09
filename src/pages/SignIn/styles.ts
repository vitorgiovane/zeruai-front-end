import styled from 'styled-components'
import { lighten } from 'polished'

export const Container = styled.div`
  background: rgb(55, 85, 114);
  background: linear-gradient(
    150deg,
    rgba(55, 85, 114, 1) 0%,
    rgba(89, 71, 107, 1) 100%
  );
  height: 100vh;
  padding: 3em 4em;
  display: flex;
`

export const Resume = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 60%;

  padding-right: 2em;

  img {
    align-self: flex-start;
    width: auto;
    height: 40px;
  }

  h1 {
    margin-top: 3em;
    color: #eeeeee;
    font-weight: 500;
    margin-bottom: 1rem;
    font-size: 40px;
  }

  h3 {
    color: #eeeeee;
    font-weight: 400;
    font-size: 20px;
  }
`

export const LoginBox = styled.div`
  background: #ffffff;
  border-radius: 30px;
  padding: 40px 40px;
  height: 400px;
  align-self: center;
  flex-grow: 1;

  h1 {
    color: #753a64;
    font-weight: 600;
    margin-bottom: 1em;
    font-size: 30px;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      padding: 14px 24px;
      margin-bottom: 1rem;
      border-radius: 50px;
      border: 1px solid #bbbbbb;
      color: #753a64;
      font-size: 18px;

      &:focus {
        border: 1px solid #753a64;
      }
    }

    button {
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
    }

    a {
      color: #753a64;
      text-decoration: none;
      text-align: center;
      margin-top: 1.5rem;
      font-size: 14px;
      transition: color 0.2s;

      &:hover {
        color: ${lighten(0.2, '#753a64')};
      }
    }
  }
`
