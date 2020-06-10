import styled from 'styled-components'
import { lighten } from 'polished'

export const Container = styled.div`
  background: rgb(117, 58, 100);
  background: linear-gradient(
    135deg,
    rgba(117, 58, 100, 1) 0%,
    rgba(68, 79, 111, 1) 100%
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
  background: #ffffff;
  border-radius: 30px;
  padding: 40px 40px;
  align-self: center;
  flex-grow: 1;

  h1 {
    color: #375572;
    font-weight: 600;
    margin-bottom: 1em;
    font-size: 30px;
  }

  form {
    display: flex;
    flex-direction: column;

    a {
      color: #375572;
      text-decoration: none;
      text-align: center;
      margin-top: 1.5rem;
      font-size: 14px;
      transition: color 0.2s;

      &:hover {
        color: ${lighten(0.2, '#375572')};
      }
    }
  }
`
