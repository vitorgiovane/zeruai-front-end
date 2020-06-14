import styled, { keyframes } from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  height: 100vh;
  padding: 3em 4em;
  display: flex;

  @media only screen and (max-width: 720px) {
    flex-direction: column;
    height: auto;
  }
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

    @media only screen and (max-width: 720px) {
      display: none;
    }
  }

  h3 {
    color: #eeeeee;
    font-weight: 400;
    font-size: 20px;

    @media only screen and (max-width: 720px) {
      display: none;
    }
  }
`

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px)
  }
  to {
    opacity: 1;
    transform: translateX(0px)
  }
`

export const LoginBox = styled.div`
  background: #111f2d;
  border-radius: 30px;
  padding: 60px 50px;
  align-self: center;
  flex-grow: 1;
  -webkit-box-shadow: 21px 29px 19px -12px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 21px 29px 19px -12px rgba(0, 0, 0, 0.09);
  box-shadow: 21px 29px 19px -12px rgba(0, 0, 0, 0.09);

  animation: ${appearFromRight} 1s;

  @media only screen and (max-width: 720px) {
    width: 100%;
    margin: 5em 0;
  }

  h1 {
    color: #acb9c6;
    font-weight: 600;
    margin-bottom: 1.6em;
    font-size: 24px;
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
        color: ${shade(0.3, '#f4a40f')};
      }
    }
  }
`
