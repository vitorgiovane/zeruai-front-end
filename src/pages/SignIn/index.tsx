import React from 'react'
import { Mail, LogIn, Lock } from '@styled-icons/feather'

import logo from '../../assets/logo.png'

import { Container, Resume, LoginBox } from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'

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
        <Input name="email" icon={Mail} placeholder="E-mail" />
        <Input
          name="password"
          icon={Lock}
          type="password"
          placeholder="Password"
        />
        <Button type="submit" icon={LogIn}>
          Sign in
        </Button>
        <a href="Register">
          Don&apos;t have an account yet? <strong>Register</strong>
        </a>
      </form>
    </LoginBox>
  </Container>
)

export default SignIn
