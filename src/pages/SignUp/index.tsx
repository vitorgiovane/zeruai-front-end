import React, { useCallback } from 'react'
import { Envelope, Lock, User, SignInAlt } from '@styled-icons/fa-solid'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import logo from '../../assets/logo.png'

import { Container, Resume, RegisterBox } from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (userAttributes: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string()
          .required('E-mail is required')
          .email('Enter a valid e-mail'),
        password: Yup.string().min(
          6,
          'Enter a password of at least 6 characters'
        )
      })

      await schema.validate(userAttributes, {
        abortEarly: false
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

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
          <Input
            themeColor="#f4a40f"
            name="name"
            icon={User}
            placeholder="Name"
          />
          <Input
            themeColor="#f4a40f"
            name="email"
            icon={Envelope}
            placeholder="E-mail"
          />
          <Input
            themeColor="#f4a40f"
            name="password"
            icon={Lock}
            type="password"
            placeholder="Password"
          />
          <Button backgroundColor="#f4a40f" type="submit" icon={SignInAlt}>
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
