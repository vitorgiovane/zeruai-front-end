import React from 'react'
import { Mail, LogIn, Lock, User } from '@styled-icons/feather'
import { Form } from '@unform/web'

import logo from '../../assets/logo.png'

import { Container, Resume, RegisterBox } from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'

const SignUp: React.FC = () => {
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
      <RegisterBox>
        <h1>Create account</h1>
        <Form onSubmit={handleSubmit}>
          <Input name="name" icon={User} placeholder="Name" />
          <Input name="email" icon={Mail} placeholder="E-mail" />
          <Input
            name="password"
            icon={Lock}
            type="password"
            placeholder="Password"
          />
          <Button type="submit" icon={LogIn} backgroundColor="#f00">
            Sign Up
          </Button>
          <a href="Register">
            Already have an account? <strong>Sign In</strong>
          </a>
        </Form>
      </RegisterBox>
    </Container>
  )
}

export default SignUp
