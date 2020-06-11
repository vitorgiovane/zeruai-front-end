import React from 'react'
import { Envelope, Lock, SignInAlt } from '@styled-icons/fa-solid'
import { Form } from '@unform/web'

import logo from '../../assets/logo.png'

import { Container, Resume, LoginBox } from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'

const SignIn: React.FC = () => {
  const handleSubmit = (userAttributes: object): void => {
    console.log(userAttributes)
  }

  return (
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
        <Form onSubmit={handleSubmit}>
          <Input
            themeColor="#F4A40F"
            name="email"
            icon={Envelope}
            placeholder="E-mail"
          />
          <Input
            themeColor="#F4A40F"
            name="password"
            icon={Lock}
            type="password"
            placeholder="Password"
          />
          <Button backgroundColor="#F4A40F" type="submit" icon={SignInAlt}>
            Sign in
          </Button>
          <a href="Register">
            Don&apos;t have an account yet? <strong>Register</strong>
          </a>
        </Form>
      </LoginBox>
    </Container>
  )
}

export default SignIn
