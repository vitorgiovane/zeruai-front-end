import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  background: rgb(41, 57, 75);
  background: linear-gradient(
    150deg,
    rgba(41, 57, 75, 1) 0%,
    rgba(23, 37, 52, 1) 100%
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
export const RegisterBox = styled.div`
  background: #111f2d;
  border-radius: 30px;
  padding: 60px 50px;
  align-self: center;
  flex-grow: 1;
  -webkit-box-shadow: 21px 29px 19px -12px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 21px 29px 19px -12px rgba(0, 0, 0, 0.09);
  box-shadow: 21px 29px 19px -12px rgba(0, 0, 0, 0.09);

  h1 {
    color: #acb9c6;
    font-weight: 600;
    margin-bottom: 1em;
    font-size: 30px;
  }

  form {
    display: flex;
    flex-direction: column;

    a {
      color: #f4a40f;
      text-decoration: none;
      text-align: center;
      margin-top: 1.5rem;
      font-size: 14px;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.3, '#F4A40F')};
      }
    }
  }
`
