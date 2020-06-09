import React from 'react'
import { Key2 } from '@styled-icons/remix-line'

import logo from '../../assets/logo.png'

import { Container, Resume, LoginBox } from './styles'

const SignIn: React.FC = () => (
  <Container>
    <Resume>
      <img src={logo} alt="Zeruai" />
      <h1>
        Get exclusive access <br />
        to Zeruai
      </h1>
      <h3>
        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do
        eiusmod tempor <br />
        incididunt ut labore et dolore.
      </h3>
    </Resume>
    <LoginBox>
      <h1>Welcome back</h1>
      <form>
        <input placeholder="E-mail" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign in</button>
        <a href="Register">
          Don&apos;t have an account yet? <strong>Register</strong>
        </a>
      </form>
    </LoginBox>
  </Container>
)

export default SignIn
